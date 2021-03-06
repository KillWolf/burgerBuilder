import React, { Component } from "react";
import axios from '../../axios-instances/axios-orders';
import Order from '../../components/Order/Order';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/';
import Spinner from '../../components/UI/Spinner/Spinner'
class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId)
    }

    render() {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => <Order ingredients={order.ingredients} price={order.price} key={order.id} />)
        }

        return (
            <div>
                {orders}
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.idToken,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));