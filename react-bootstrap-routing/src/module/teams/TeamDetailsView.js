import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
    Row, Col, Panel, Grid,
    Form, FormControl, FormGroup,
    InputGroup,
    ControlLabel,
    Button,
    Well, PageHeader
} from 'react-bootstrap';

import ServiceApplicationDetailView from '../applications/ServiceApplicationDetailView';

import './TeamDetailsView.css';
import SimpleApplicationDetailView from "../applications/SimpleApplicationDetailView";

const TEAM_DETAILS = {
    "active": true,
    "applicationGroups": [
        {
            "description": "string",
            "environment": {
                "descripetion": "string",
                "id": 1,
                "name": "string",
                "type": "string"
            },
            "id": 2,
            "name": "App Group 001",
            "serviceApplications": [
                {
                    "active": true,
                    "appKey": "ekl-sal-srms",
                    "appType": "SERVICE_APP",
                    "description": "string",
                    "id": 3,
                    "loadBalancers": [
                        {
                            "active": true,
                            "description": "string",
                            "elbHost": {
                                "active": true,
                                "address": "123.345.567",
                                "id": 4,
                                "name": "ekl-sal-jhfgkajhsgdfkahjgsfd-dfasdf"
                            },
                            "elbName": "string",
                            "elbPort": "string",
                            "healthCheckUrl": "string",
                            "id": 5,
                            "serviceHosts": [
                                {
                                    "active": true,
                                    "address": "234.234.234",
                                    "id": 6001,
                                    "name": "string"
                                },
                                {
                                    "active": true,
                                    "address": "334.234.234",
                                    "id": 6002,
                                    "name": "string"
                                },
                                {
                                    "active": true,
                                    "address": "434.234.234",
                                    "id": 6003,
                                    "name": "string"
                                }
                            ],
                            "servicePort": "string"
                        }
                    ]
                },
                {
                    "active": true,
                    "appKey": "ekl-service-designer-api",
                    "appType": "SERVICE_APP",
                    "description": "string",
                    "id": 31,
                    "loadBalancers": [
                        {
                            "active": true,
                            "description": "string",
                            "elbHost": {
                                "active": true,
                                "address": "string",
                                "id": 41,
                                "name": "string"
                            },
                            "elbName": "string",
                            "elbPort": "string",
                            "healthCheckUrl": "string",
                            "id": 51,
                            "serviceHosts": [
                                {
                                    "active": true,
                                    "address": "string",
                                    "id": 61,
                                    "name": "string"
                                }
                            ],
                            "servicePort": "string"
                        }
                    ]
                },
                {
                    "active": true,
                    "appKey": "string",
                    "appType": "SIMPLE_APP",
                    "description": "string",
                    "id": 32,
                    "loadBalancers": [
                        {
                            "active": true,
                            "description": "string",
                            "elbHost": {
                                "active": true,
                                "address": "string",
                                "id": 42,
                                "name": "string"
                            },
                            "elbName": "string",
                            "elbPort": "string",
                            "healthCheckUrl": "string",
                            "id": 52,
                            "serviceHosts": [
                                {
                                    "active": true,
                                    "address": "string",
                                    "id": 62,
                                    "name": "string"
                                }
                            ],
                            "servicePort": "string"
                        }
                    ]
                }
            ],
            "simpleApplications": [
                {
                    "active": true,
                    "appKey": "string",
                    "appType": "SIMPLE_APP",
                    "description": "string",
                    "healthCheckUrl": "string",
                    "host": {
                        "active": true,
                        "address": "123.456.654",
                        "healthBreach": {
                            "id": 7,
                            "query": "string",
                            "thresholds": [
                                {
                                    "breach": {},
                                    "id": 8,
                                    "operation": {
                                        "code": "string",
                                        "id": 9,
                                        "symbol": "string",
                                        "type": "BINARY"
                                    },
                                    "severity": {
                                        "description": "string",
                                        "id": 10,
                                        "level": "string"
                                    },
                                    "value": 0
                                }
                            ]
                        },
                        "id": 11,
                        "metrics": [
                            {
                                "breach": {
                                    "id": 12,
                                    "query": "string",
                                    "thresholds": [
                                        {
                                            "breach": {},
                                            "id": 13,
                                            "operation": {
                                                "code": "string",
                                                "id": 14,
                                                "symbol": "string",
                                                "type": "BINARY"
                                            },
                                            "severity": {
                                                "description": "string",
                                                "id": 15,
                                                "level": "string"
                                            },
                                            "value": 0
                                        }
                                    ]
                                },
                                "displayName": "string",
                                "httpMetricRequests": [
                                    {
                                        "body": "string",
                                        "bodyTemplate": "string",
                                        "endpointUrl": "string",
                                        "headers": {},
                                        "id": 16,
                                        "metricRequests": [
                                            {
                                                "httpMetricRequest": {},
                                                "id": 17,
                                                "requestTemplate": "string"
                                            }
                                        ],
                                        "requestType": "POST",
                                        "urlParameters": {}
                                    }
                                ],
                                "id": 18,
                                "name": "string",
                                "type": "SYSTEM"
                            }
                        ],
                        "name": "string"
                    },
                    "id": 19,
                    "port": 0
                }
            ]
        }
    ],
    "description": "string",
    "email": "string",
    "id": 20,
    "name": "string"
};

const TeamDetailsView = ({match}) => {
    const {teamId} = match.params.id;

    return (
        <div>
            <PageHeader>
                {TEAM_DETAILS.name} &nbsp;&nbsp;
                <small>{TEAM_DETAILS.email}</small>
                &nbsp;&nbsp;
                <small>Team ID: {match.params.id}</small>
            </PageHeader>
            <Well>
                {TEAM_DETAILS.description}
            </Well>
            {TEAM_DETAILS && TEAM_DETAILS.applicationGroups
                ?
                TEAM_DETAILS.applicationGroups.map((appGroup, indexAg) => {


                    return (
                        <Row key={appGroup.id}>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Panel>
                                    <Panel.Heading className={'mono'}>
                                        <i className={'fa fa-server'}></i>&nbsp;&nbsp;{appGroup.name}
                                    </Panel.Heading>
                                    <Panel.Body>
                                        <Row>
                                            {appGroup && appGroup.serviceApplications ?
                                                appGroup.serviceApplications.map((serviceApp, indexSa) => {
                                                    return (
                                                        <ServiceApplicationDetailView serviceApp={serviceApp} key={indexSa}/>
                                                    );
                                                })
                                                :
                                                <div></div>

                                            }
                                        </Row>
                                        <Row>
                                            {appGroup && appGroup.simpleApplications ?
                                                appGroup.simpleApplications.map((simpleApp, index) => {
                                                    return (
                                                        <SimpleApplicationDetailView serviceApp={simpleApp} key={index}/>
                                                    );
                                                })
                                                :
                                                <div></div>

                                            }
                                        </Row>
                                    </Panel.Body>
                                    <Panel.Footer>

                                    </Panel.Footer>
                                </Panel>
                            </Col>
                        </Row>
                    );
                })
                :
                <div>
                    {TEAM_DETAILS.applicationGroups.length}
                </div>
            }


        </div>
    );
};


export default TeamDetailsView;
