import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li>
            <NavLink
            exact
            to={props.link}>{props.children}</NavLink>
        </li>
    )
};

export default NavItem;