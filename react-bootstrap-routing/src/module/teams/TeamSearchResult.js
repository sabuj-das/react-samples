import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
    Row, Col, Grid,
    Form, FormControl, FormGroup,
    InputGroup,
    ControlLabel,
    Button
} from 'react-bootstrap';
import TeamInfo from "./TeamInfo";


const TEAM_SEARCH_RESULT = [
    {
        teamId: 1000,
        name: "The Team's Name like: Team 1000",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.",
        health: {
            breach: {
                type: "BREACH_UNKNOWN"
            }
        }
    },
    {
        teamId: 1001,
        name: "The Team's Name like: Team 1001",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.",
        health: {
            value: 100,
            unit: "%",
            breach: {
                type: "BREACH_ACCEPTABLE"
            }
        }
    },
    {
        teamId: 1002,
        name: "The Team's Name like: Team 1002",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.",
        health: {
            value: 70,
            unit: "%",
            breach: {
                type: "BREACH_ACCEPTABLE"
            }
        }
    },
    {
        teamId: 1003,
        name: "The Team's Name like: Team 1003",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.",
        health: {
            value: 55,
            unit: "%",
            breach: {
                type: "BREACH_WARNING"
            }
        }
    },
    {
        teamId: 1004,
        name: "The Team's Name like: Team 1004",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.",
        health: {
            value: 25,
            unit: "%",
            breach: {
                type: "BREACH_FATAL"
            }
        }
    },
    {
        teamId: 1005,
        name: "The Team's Name like: Team 1004",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere."

    }
];

class TeamSearchResult extends Component {

    constructor(context, props) {
        super(context, props);

        this.state = {
            filter: {},
            result: {}
        };
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Teams ...</h3>
                    <hr/>
                </div>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <TeamInfo teamData={TEAM_SEARCH_RESULT[0]}/>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <TeamInfo teamData={TEAM_SEARCH_RESULT[1]}/>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <TeamInfo teamData={TEAM_SEARCH_RESULT[2]}/>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <TeamInfo teamData={TEAM_SEARCH_RESULT[3]}/>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <TeamInfo teamData={TEAM_SEARCH_RESULT[4]}/>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    };

};

export default TeamSearchResult;
