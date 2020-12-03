import React from 'react';

import Requirement from './Requirement/Requirement';
import classes from './Requirements.css'

let controls = [
    { text: "Definirea a minim patru activități/fragmente de student; toate activitățile aplicației trebuiepopulate folosind controale vizuale corespunzătoare.", status: 2 },
    { text: "Utilizarea de controale variate (Button, TextView, EditView, CheckBox, Spinner, ProgressBar,SeekBar, Switch, RatingBar, ImageView, DatePicker sau TimePicker)", status: 1 },
    { text: "Utilizarea a minim un formular de introducere a datelor;", status: 0 },
    { text: "Transferul de parametri (obiecte proprii și primitive) între minim două activități/fragmente;", status: 0 },
    { text: "Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);", status: 0 },
    { text: "Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);", status: 0 },
    { text: "Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);", status: 0 },
    { text: "Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);", status: 0 },
    { text: "Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);", status: 0 },
    { text: "Implementarea unui adaptor personalizat (cel puțin trei controale vizuale, dintre care douădiferite);", status: 0 },
    { text: "Stilizarea aplicației mobile – pentru minim trei proprietăți ale componentelor vizuale -- (se creează o temă nouă în fișierul styles.xml sau stil nou);", status: 0 }
]

const requirements = () => {
    return (
        <div className={classes.Requirements}>
            <p>Requirements:</p>
            <ul>
                {controls.map(ctrl => <Requirement status={ctrl.status}>{ctrl.text}</Requirement>)}
            </ul>
        </div>
    );
}

export default requirements;