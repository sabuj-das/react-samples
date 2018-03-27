import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


import Header from "./modules/Header";
import BaseContainer from "./modules/BaseContainer";
import Footer from "./modules/Footer";

import {APP_ROUTES, RouteWithSubRoutes} from '../RouteConfig';

const BaseLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="base-layout">
                <div id='header'>
                    <Header/>
                </div>
                <div id='content'>
                    <BaseContainer children={<Component {...matchProps} />}/>
                </div>
                <div id='footer'>
                    <Footer/>
                </div>
            </div>

        )}>

        </Route>
    )
};

export default BaseLayout;
