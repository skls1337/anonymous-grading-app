import React from 'react';

import Requirements from './Requirements/Requirements';
import classes from './Project.css';

let datas = {
    requirements: [
        {
            text:
                'Definirea a minim patru activități/fragmente de student; toate activitățile aplicației trebuiepopulate folosind controale vizuale corespunzătoare.',
            status: 2,
            key: '0a',
        },
        {
            text:
                'Utilizarea de controale variate (Button, TextView, EditView, CheckBox, Spinner, ProgressBar,SeekBar, Switch, RatingBar, ImageView, DatePicker sau TimePicker)',
            status: 1,
            key: '0.1a',
        },
        {
            text: 'Utilizarea a minim un formular de introducere a datelor;',
            status: 0,
            key: '1a',
        },
        {
            text:
                'Transferul de parametri (obiecte proprii și primitive) între minim două activități/fragmente;',
            status: 0,
            key: '2a',
        },
        {
            text:
                'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            key: '3a',
        },
        {
            text:
                'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            key: '4a',
        },
        {
            text:
                'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            key: '5a',
        },
        {
            text:
                'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            key: '6a',
        },
        {
            text:
                'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            key: '7a',
        },
        {
            text:
                'Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);',
            status: 0,
            key: '8a',
        },
        {
            text:
                'Stilizarea aplicației mobile – pentru minim trei proprietăți ale componentelor vizuale -- (se creează o temă nouă în fișierul styles.xml sau stil nou);',
            status: 0,
            key: '9a',
        },
    ],
    description:
        'Proiectul va fi verificat pe parcurs, conform baremului. Evaluarea se realizează pe parcurs. Proiectulse susține la finalul semestrului (săpt. 13 și 14) și trebuie încărcat până în săptămâna a 13-a pe platformahttp://pdm.ase.ro. Fazele intermediare vor fi încărcate pe platforma http://online.ase.ro.',
    nextDel: '10/12/2021',
};

const project = () => {
    return (
        <div className={classes.Project}>
            <div className={classes.Text}>
                <p>{datas.description}</p>
            </div>
            <Requirements controls={datas.requirements} />
            <p style={{ backgroundColor: '#FEFFFF' }}>
                Upcoming Deliverable: {datas.nextDel}
            </p>
        </div>
    );
};

export default project;
