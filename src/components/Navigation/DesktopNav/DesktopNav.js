import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

import classes from './DesktopNav.module.css';

const DesktopNav = (props) => {
    return (
        <header className={ classes.Toolbar } >
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
};

export default DesktopNav;