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


const SimpleApplicationDetailView = ({serviceApp: simpleApp}) => {
    return <Col xs={12} sm={12} md={4} lg={4} key={simpleApp.id}>
        <div className="team-app-view-box bs-example">
            <Row>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <span
                        className='mono'>{simpleApp.appKey}</span>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <span
                        className='mono pull-right'>{simpleApp.appType}</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    {simpleApp.host
                        ?
                        <Link
                            to={'/applications/SIMPLE_APP/' + simpleApp.host.id}>
                            <span className={'mono'}>{simpleApp.host.address}:{simpleApp.port}</span>
                        </Link>

                        : <div></div>}
                </Col>
            </Row>
        </div>
    </Col>;
};

export default SimpleApplicationDetailView;
