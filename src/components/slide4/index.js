import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';

function Slide4 ({info, setInfo}) {
    const [client, setClient] = useState({
        nom:"",
        prenom:"",
        adresse:"",
        ville:"",
        code:"",
        telephone:""
    })
    const classes = useStyles();

  return (
    <div className="container-slide-4">
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField className={classes.textField} value={info.nom} onChange={(e) => {setInfo({...info , nom: e.target.value})}} id="standard-basic" label="Votre Nom" />
                <TextField className={classes.textField} value={info.prenom}  onChange={(e) => {setInfo({...info , prenom: e.target.value})}} id="standard-basic" label="Votre Prénom" />
                <TextField className={classes.textField} value={info.adresse}  onChange={(e) => {setInfo({...info , adresse: e.target.value})}} id="standard-basic" label="Votre adresse" />
            </Grid>
            <Grid item xs={6}>
                <TextField className={classes.textField} value={info.ville}  onChange={(e) => {setInfo({...info , ville: e.target.value})}} id="standard-basic" label="Votre ville" />
                <TextField className={classes.textField} value={info.code}  onChange={(e) => {setInfo({...info , code: e.target.value})}} id="standard-basic" label="Code Postal" />
                <TextField className={classes.textField} value={info.telephone}  onChange={(e) => {setInfo({...info , telephone: e.target.value})}} type="tel" id="standard-basic" label="Télephone" />
            </Grid>
        </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
        textField : {
            display : 'block',
            margin: '1em 0 3em 1em'
        },
}));

export default Slide4;