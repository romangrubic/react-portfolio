import React from 'react';
import DesktopNav from '../../components/Navigation/DesktopNav/DesktopNav';
import classes from './Layout.module.css';

const Layout = props => {
    return (
        <>
            <DesktopNav />
            <main className={classes.Content}>
                { props.children }
            </main>
        </>
    )
};

export default Layout;