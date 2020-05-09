import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return (
        <ul className={classes.Ul}>
            <NavItem link="/portfolio">Portfolio</NavItem>
            <NavItem link="/experience">Experience</NavItem>
            <NavItem link="/about">About me</NavItem>
            <NavItem link="/contact">Contact me!</NavItem>
        </ul>
    )
};

export default NavigationItems;