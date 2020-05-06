import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/original.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="myBurger" />
    </div>
);

export default logo;