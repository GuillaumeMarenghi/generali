import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import './index.css';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Slide2 ({info, setInfo}) {

    const classes = useStyles();

  return (
    <div className="container-slide-2">
        <Grid container spacing={3}>
            <Grid containeur item xs={6} className={classes.first} >
                <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <KeyboardDatePicker
                    className={classes.picker}
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-of-birth"
                    label="Date de naissance de l'animal"
                    value={info.dateNaissance}
                    onChange={(date) => {setInfo({...info , dateNaissance: date})}}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>
                    <TextField className={classes.textField} id="standard-basic"  onChange={(e) => {setInfo({...info , nomAnimal: e.target.value})}} label="Nom de l'animal" />
                    <TextField className={classes.textField} id="standard-basic" onChange={(e) => {setInfo({...info , race: e.target.value})}} label="Race de l'animal" />
                <TextField className={classes.textField} id="standard-basic" onChange={(e) => {setInfo({...info , refTatoo: e.target.value})}} label="Référence Tatoo ou puce" />
                </div>
            </Grid>
            <Grid item xs={6}>
                <FormControl component="fieldset">
                <div className={classes.radio}>
                <FormLabel component="legend">Selectionnez le sexe de votre animal</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={info.sexe} onChange={(e) => {setInfo({...info , sexe: e.target.value})}}>
                    <FormControlLabel value="male" control={<Radio />} label="Mâle" />
                    <FormControlLabel value="femelle" control={<Radio />} label="Femelle" />
                </RadioGroup>
                </div>
                <div className={classes.radio}>
                <FormLabel component="legend">Votre animal est-il castré ou sterilisé</FormLabel>
                <RadioGroup aria-label="Castré-Stérilisé" name="Castré" value={info.castre} onChange={(e) => {setInfo({...info , castre: e.target.value})}}>
                    <FormControlLabel value="Castré-sterilisé oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Castré-sterilisé non" control={<Radio />} label="Non" />
                </RadioGroup>
                </div>
                <div className={classes.radio}>
                <FormLabel component="legend">Votre animal est-il tatoué ou pucé</FormLabel>
                <RadioGroup aria-label="Tatoo-puce" name="Tatoo" value={info.refTatoo} onChange={(e) => {setInfo({...info , refTatoo: e.target.value})}}>
                    <FormControlLabel value="Tatoo-puce oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Tatoo-puce non" control={<Radio />} label="Non" />
                </RadioGroup>
                </div>
                </FormControl>
            </Grid>
        </Grid>

    </div>
  );
}

const useStyles = makeStyles(() => ({
    first: {
        display : 'flex',
        flexDirection : 'column'
    },
    textField : {
        display : 'block',
        margin: '1em 0 3em 1em'
    },
    picker : {
        margin : '2em 0 0 1em'
    },
    radio : {
        margin : '1em'
    }
  }));

export default Slide2;