import React from 'react';
import {Component} from "react";
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock, Table} from "react-bootstrap";
import './styles.css';
import {LagerKlasse, Store} from "../../models/Store";
import Select from 'react-select';
import * as _ from 'lodash';

export type Partial<T> = {
    [P in keyof T]?: T[P];
};

export type State = {
    form: Partial<Store>,
    stores: Partial<Store>[]
}

export type Props = {}

export class AddStore extends Component<Props, State> {
    state: State = {
        form: {
        },
        stores: []
    }

    constructor(props: any) {
        super(props);
        this.fetchAllStores();
    }

    getValidationState() {
        return "success" as 'success'
    }

    handleChange = (e: React.FormEvent<FormControl>) => {
        // @ts-ignore
        console.log("e.target.name : " + e.target.name);
        // @ts-ignore
        console.log("e.target.name : " + e.target.value);
        this.setState({
            form: {
                ...this.state.form,
                // @ts-ignore
                [e.target.name]: e.target.value
            }
        });
        console.log("this.state.form :" + JSON.stringify(this.state.form))
    }

    handleLagerKlassenChange = (selectedOption: any) => {
        console.log("selectedOption : " + JSON.stringify(selectedOption));
        this.setState({form: { ...this.state.form, lagerKlassen : _.uniq(selectedOption.map((v:any) => v.value)) }});
        console.log("this.state.form :" + JSON.stringify(this.state.form));
    }

    submit = (e: React.FormEvent)=>{
        console.log("this.state.form :" + JSON.stringify(this.state.form));
        e.preventDefault()
        fetch('http://localhost:8000/add-store', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.form)
        })
.then(function(response) {
        return response.json();
    })
.then(function(myJson) {
        console.log(JSON.stringify(myJson));
    }).then(() => this.fetchAllStores());
    }

    fetchAllStores = () => {
        fetch('http://localhost:8000/add-store', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(res => {
            this.setState({
                stores: res && res.results
            });
        })
    };

    render() {
        const lagerKlassen = _.map(_.values(LagerKlasse),name => ({
            value: name, label: name
        }));
        return (<div className="form-container">
            <form className="form" onSubmit={this.submit}>
                <FormGroup
                    bsSize="sm"
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Füge ein neues Gefahrenlager hinzu</ControlLabel>
                    <FormControl
                        required={true}
                        type="text"
                        value={this.state.form.ort}
                        name="ort"
                        placeholder="Ort"
                        onChange={this.handleChange}
                    />
                    <Select
                        isMulti={true}
                        value={_.map(this.state.form.lagerKlassen, (v: any) => ({ value: v, label: v}))}
                        onChange={this.handleLagerKlassenChange}
                        options={lagerKlassen as any} />
                    <Button className="btn btn-primary btn-large centerButton" type="submit">Lagerklasse hinzufügen</Button>
                    <FormControl.Feedback/>
                </FormGroup>

            </form>

            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Ort</th>
                    <th>Lagerklasse</th>
                </tr>
                </thead>
                <tbody>
                { this.state.stores.map(store => {
                    return (<tr>
                        <td>{store.ort}</td>
                        <td>{store.lagerKlassen && store.lagerKlassen.join(", ")}</td>
                    </tr>)
                }) }
                </tbody>
            </Table>

        </div>);
    }
}