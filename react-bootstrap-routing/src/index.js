import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import HomeComponent from "./module/HomeComponent";

import './assets/bootstrap/css/bootstrap.css';
// import './assets/bootstrap/css/bootstrap-theme.css';
import './assets/bootstrap/css/theme-paper.css';

import './assets/fontawesome-free-5.0.8/web-fonts-with-css/css/fontawesome-all.css';
import './index.css';

import MonitorHome from "./module/monitor/MonitorHome";
import ApplicationsHome from "./module/applications/ApplicationsHome";
import TeamsHome from "./module/teams/TeamsHome";
import Header from "./layout/modules/Header";
import Footer from "./layout/modules/Footer";
import TeamSearch from "./module/teams/TeamSearch";
import TeamOnboard from "./module/teams/TeamOnboard";
import {APP_ROUTES, RouteWithSubRoutes} from "./RouteConfig";



function Index() {
    return (
        <Router>
            <div>
                <BaseLayout exact path='/' component={HomeComponent} />

                {APP_ROUTES.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </div>
        </Router>
    );
}

render(<Index/>, document.querySelector('#root'));


