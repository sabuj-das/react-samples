import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
    Row, Col,
    Form, FormControl, FormGroup,
    InputGroup,
    ControlLabel,
    Button
} from 'react-bootstrap';

import './TeamSearch.css';
import FormFieldGroup from "../../components/FormFieldGroup";
import TeamSearchResult from "./TeamSearchResult";

class TeamSearch extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h2>Search Team &nbsp;&nbsp;<Link to='/teams/create' ><i className={'fa fa-plus'}></i></Link></h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <form >
                            <FormFieldGroup
                                id="formControlTeamName"
                                type="text"
                                label="Team Name"
                                placeholder="Enter name"
                            />
                            <FormFieldGroup
                                id="formControlTeamEmail"
                                type="email"
                                label="Email address"
                                placeholder="Enter email"
                            />
                            <Button bsStyle='primary'>Find</Button>
                        </form>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>

                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <TeamSearchResult/>
                    </Col>
                </Row>
            </div>
        );
    };
};

export default TeamSearch;
