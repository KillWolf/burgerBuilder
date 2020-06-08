import React from 'react';
import classes from './Logo.module.css';
import { Link } from 'react-router-dom';
import burgerLogo from '../../assets/images/original.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <Link to="/">
            <img src={burgerLogo} alt="myBurger" />
        </Link>
    </div>
);

export default logo;