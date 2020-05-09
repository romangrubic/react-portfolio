import React from 'react';
import NavItem from './NavItem/NavItem';
// import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return (
        <ul>
            <NavItem link="/">Landing Page</NavItem>
            <NavItem link="/portfolio">Portfolio Page</NavItem>
            <NavItem link="/experience">Experience Page</NavItem>
            <NavItem link="/about-me">About me Page</NavItem>
            <NavItem link="/contact">Contact Page</NavItem>
        </ul>
    )
};

export default NavigationItems;