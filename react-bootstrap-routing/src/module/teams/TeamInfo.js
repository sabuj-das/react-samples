import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
    Row, Col, Panel, Grid,
    Form, FormControl, FormGroup,
    InputGroup,
    ControlLabel,
    Button,
    Well
} from 'react-bootstrap';
import StyleUtils from "../../utils/StyleUtils";


class TeamInfo extends Component {

    getBreachPanelStyle(breach) {
        if(breach && breach.type){
            return StyleUtils.convertBreactToStyle(breach.type);
        }
        return "default";
    }

    getBreachActionStyle(breach) {
        if(breach && breach.type){
            return "alert alert-" + StyleUtils.convertBreactToStyle(breach.type);
        }
        return "alert alert-default";
    }

    render() {

        const {teamData} = this.props;

        return (
            <Panel bsStyle={this.getBreachPanelStyle(teamData.health.breach)}>
                <Panel.Heading >
                    <Panel.Title componentClass="h2">{teamData.name}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Well bsSize="small">{teamData.description}</Well>
                        </Col>
                    </Row>
                    { teamData && teamData.health ?
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                    <span className={ "mono bold " + this.getBreachActionStyle(teamData.health.breach) }>
                                        {teamData.health.value} {teamData.health.unit}
                                    </span>
                            </Col>
                        </Row>
                        :
                        <div></div>
                    }
                </Panel.Body>
                <Panel.Footer>
                    <Link to={'/monitor/teams/' + teamData.teamId}>
                        <Button bsStyle={this.getBreachPanelStyle(teamData.health.breach)}>View Details</Button>
                    </Link>
                </Panel.Footer>
            </Panel>

        );
    };

};

TeamInfo.propTypes = {
    teamData : PropTypes.object.isRequired
};

export default TeamInfo;
