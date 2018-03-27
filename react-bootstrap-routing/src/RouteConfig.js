import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import MonitorHome from "./module/monitor/MonitorHome";
import ApplicationsHome from "./module/applications/ApplicationsHome";
import TeamMonitor from "./module/teams/TeamDetailsView";
import TeamSearch from "./module/teams/TeamSearch";
import TeamOnboard from "./module/teams/TeamOnboard";
import BaseLayout from "./layout/BaseLayout";
import HomeComponent from "./module/HomeComponent";


export const RoutePath = {
    MONITOR: {
        ROOT: '/monitor',
        TEAM: '/monitor/teams/:id'
    },
    APPLICATIONS: {
        ROOT: '/applications'
    },
    TEAM: {
        ROOT: '/teams',
        SEARCH: '/teams/search',
        CREATE: '/teams/create',
        DETAIL: '/teams/view/:id'
    },

}

export const APP_ROUTES = [
    {
        path: RoutePath.MONITOR.ROOT,
        component: MonitorHome
    },
    {
        path: RoutePath.MONITOR.TEAM,
        component: TeamMonitor
    },
    {
        path: RoutePath.APPLICATIONS.ROOT,
        component: ApplicationsHome
    },
    {
        path: RoutePath.TEAM.SEARCH,
        component: TeamSearch
    },
    {
        path: RoutePath.TEAM.CREATE,
        component: TeamOnboard
    }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = route => (
    <div>
        <BaseLayout exact path={route.path} component={route.component} />
    </div>
);

