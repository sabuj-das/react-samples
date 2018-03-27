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

import '../monitor/Monitor.css';
import StyleUtils from "../../utils/StyleUtils";

const ElbDetailView = ({elb}) => {
    return (
        <div>
            <Row>
                <Col xs={9} sm={9} md={9} lg={9}>
                    <span className={'mono bold green large'}>
                        {elb.elbHost.address}
                    </span>
                    <span className='copy-to-clipboard'><i className="fa fa-copy"></i></span>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                    <Button bsStyle="info" className="pull-right"><i className="fa fa-arrow-circle-right"></i></Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Link
                        to={'/applications/SERVICE_APP/' + elb.elbHost.id}>
                        <span>{elb.elbHost.name}</span>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <span>Service Port: </span>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <span className="mono">{elb.servicePort}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <span>Health URL: </span>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <span className="mono">{elb.healthCheckUrl}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <span className={'large'}>Backend Applications</span>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} sm={4} md={4} lg={4}>
                            <span className='copy-to-clipboard'>Copy&nbsp;<i className="fa fa-copy"></i></span>
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8}>
                            {elb.serviceHosts ? elb.serviceHosts.map((host)=>{
                                return (
                                    <Row>
                                        <Col xs={10} sm={10} md={10} lg={10}>
                                            <span className={'mono'}>
                                                <Link to={'/applications/SERVICE_APP/hosts/' + host.id}>{host.address}</Link>
                                            </span>
                                        </Col>
                                        <Col xs={2} sm={2} md={2} lg={2}>
                                            {/*<span className={"mono pull-right " + StyleUtils.convertBreactToStyle('BREACH_FATAL')}>*/}
                                                {/*20%*/}
                                            {/*</span>*/}
                                        </Col>
                                    </Row>
                                );
                            }) : <div></div>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ElbDetailView;
