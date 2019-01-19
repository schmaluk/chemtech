import React from 'react';
import {Component} from "react";
import {ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap";
import './styles.css';

export class AddStore extends Component {
    state = {
        value: null
    }

    getValidationState() {

    }

    handleChange() {

    }

    render() {
        return (<div className="form-container">
            <form className="form">
                <FormGroup
                    bsSize="sm"
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Add your store</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback/>
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
            </form>

        </div>);
    }
}