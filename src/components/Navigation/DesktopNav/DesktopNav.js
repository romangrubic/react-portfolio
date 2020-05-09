import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo'; 

const DesktopNav = (props) => {
    return (
        <>
        <div>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
        </>
    )
};

export default DesktopNav;