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
import ElbDetailView from "../elb/ElbDetailView";

const ServiceApplicationDetailView = ({serviceApp}) => {
    return <Col xs={12} sm={12} md={4} lg={4} key={serviceApp.id}>
        <div className="team-app-view-box bs-example">
            <Row>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <span
                        className='mono'>{serviceApp.appKey}</span>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <span
                        className='mono pull-right'>{serviceApp.appType}</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    {serviceApp.loadBalancers ? serviceApp.loadBalancers.map((elb, elbIndex) => {
                            return (
                                <ElbDetailView elb={elb} key={elbIndex}/>
                            )
                        })
                        : <div></div>}
                </Col>
            </Row>
        </div>
    </Col>;
};

export default ServiceApplicationDetailView;
