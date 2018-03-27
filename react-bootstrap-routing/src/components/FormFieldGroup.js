import React from 'react';
import {
    FormControl, FormGroup,
    InputGroup,
    ControlLabel
} from 'react-bootstrap';

export default function FormFieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}
