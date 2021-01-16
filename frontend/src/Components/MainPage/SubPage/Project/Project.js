import React, { Component } from 'react';

import Requirements from './Requirements/Requirements';
import classes from './Project.css';
import Axios from 'axios';

let datas = {
    requirements: [
        {
            requirement: 'Definirea a minim patru activități/fragmente de student; toate activitățile aplicației trebuiepopulate folosind controale vizuale corespunzătoare.',
            status: 2,
            _id: '0a',
        },
        {
            requirement: 'Utilizarea de controale variate (Button, TextView, EditView, CheckBox, Spinner, ProgressBar,SeekBar, Switch, RatingBar, ImageView, DatePicker sau TimePicker)',
            status: 1,
            _id: '0.1a',
        },
        {
            requirement: 'Utilizarea a minim un formular de introducere a datelor;',
            status: 0,
            _id: '1a',
        },
        {
            requirement: 'Transferul de parametri (obiecte proprii și primitive) între minim două activități/fragmente;',
            status: 0,
            _id: '2a',
        },
        {
            requirement: 'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            _id: '3a',
        },
        {
            requirement: 'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            _id: '4a',
        },
        {
            requirement: 'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            _id: '5a',
        },
        {
            requirement: 'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            _id: '6a',
        },
        {
            requirement: 'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            _id: '7a',
        },
        {
            requirement: 'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            _id: '8a',
        },
        {
            requirement: 'Stilizarea aplicației mobile – pentru minim trei proprietăți ale componentelor vizuale -- (se creează o temă nouă în fișierul styles.xml sau stil nou);',
            status: 0,
            _id: '9a',
        },
    ],
    description:
        'Proiectul va fi verificat pe parcurs, conform baremului. Evaluarea se realizează pe parcurs. Proiectulse susține la finalul semestrului (săpt. 13 și 14) și trebuie încărcat până în săptămâna a 13-a pe platformahttp://pdm.ase.ro. Fazele intermediare vor fi încărcate pe platforma http://online.ase.ro.',
    nextDel: '10/12/2021',
    deadline: '1/5/2022',
};

class project extends Component {

    state={
        requirements:[]
    }

    getProjectRequirments=()=>{
        Axios.get("http://localhost:3001/api/v1/projectrequirements/").then(res=>{
            const requirements=res.data.data
            this.setState({
                description:requirements.description,
                requirements:requirements.requirements,
                deadline:requirements.deadline
            })
        }).catch(err=>console.log(err))
    }

    componentDidMount=()=>{
        this.getProjectRequirments()
    }

    render() {

        return (
            <div className={classes.Project}>
                <div className={classes.Text}>
                    <p>{this.state.description}</p>
                </div>

                {
                    console.log(this.state.requirements)
                }

                <Requirements controls={this.state.requirements} />
                <p style={{ backgroundColor: '#FEFFFF' }}>Upcoming Deliverable: {datas.nextDel}</p>
                <p style={{ backgroundColor: '#FEFFFF' }}>Deadline: {this.state.deadline}</p>
            </div>
        );
    }
};

export default project;
