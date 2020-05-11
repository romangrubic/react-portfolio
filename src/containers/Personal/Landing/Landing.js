import React from 'react';
import classes from './Landing.module.css';

const Landing = props => {
    return (
        <div>
            <div className={classes.context}>
                <h1>Looking for a landing page for your bussines?</h1>
                <h1>Or a full-blown website?</h1>
                <br></br>
                <h1>Check my portfolio and get in touch!</h1>
           </div>
            <div className={classes.area} >
                <ul className={classes.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </div>
    )
};

export default Landing;