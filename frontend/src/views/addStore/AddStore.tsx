import React from 'react';
import {Component} from "react";
import {ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap";
import './styles.css';
import {LagerKlasse, Store} from "../../models/Store";
import Select from 'react-select';
import * as _ from 'lodash';

export type Partial<T> = {
    [P in keyof T]?: T[P];
};

export type State = {
    form: Partial<Store>
}

export type Props = {}

export class AddStore extends Component<Props, State> {
    state: State = {
        form: {
        }
    }

    getValidationState() {
        return "success" as 'success'
    }

    handleChange(e: React.FormEvent<FormControl>) {
        this.setState({
            form: {
                // @ts-ignore
                [e.target.name]: e.currentTarget.value
            }
        });
    }

    render() {
        return (<div className="form-container">
            <form className="form">
                <FormGroup
                    bsSize="sm"
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Füge ein neues Gefahrenlager hinzu</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.form.ort}
                        name="ort"
                        placeholder="Ort"
                        onChange={this.handleChange}
                    />
                    <Select
                        value={this.state.form.lagerKlassen}
                        onChange={this.handleChange}
                        options={_.keys(LagerKlasse)}
                    />
                    <FormControl
                        type="text"
                        value={this.state.form.lagerKlassen}
                        name="ort"
                        placeholder="Ort"
                        onChange={this.handleChange}
                        componet
                    />
                    <FormControl.Feedback/>
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
            </form>

        </div>);
    }
}