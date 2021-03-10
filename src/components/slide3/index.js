import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from './chienChat.jpg';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  columnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  divFormCont: {
    textAlign: "center"
  },
  formText: {
    fontSize: "1.2em",
    fontWeight: "bold",

  },
  img: {
    width: "50%"
  },
  smallText: {
    fontSize: "0.8em"
  },
  boldText : {
    fontWeight: "bold",
    fontSize: "1.2em"
  },
  fisrtC : {
    backgroundColor: "#e8563c",
    color: "#fff",
  },
  secondC : {
    backgroundColor: "#c11a16",
    color: "#fff"
  },
  thirdC: {
    backgroundColor: "#742026",
    color: "#fff"
  }
}));

export default function Slide3({info, setInfo}) {
  const classes = useStyles();

  const formules = ["Prudente", "Rusée", "Avisée"];
  const forfait = ["30 €", "40 €", "60 €"];
  const taux = [{prc:"60 %", max: "1200€"}, {prc:"80 %", max: "1600€"}, {prc:"90 %", max: "2000€"}];
  const capital = ["200€", "400€", "600€"];
  const franchise = ["0€", "20€", "60€"];

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} className={classes.columnContainer} >
          <Grid item xs={3} ></Grid >
          {formules.map(elm => <Grid item xs={3} className={classes.divFormCont} ><img src={img} className={classes.img} /><div>Formule</div><div className={classes.formText}>{elm}</div></Grid>)}
        </Grid>
        <Grid container item xs={12} className={classes.columnContainer}  className={classes.fisrtC}>
        <Grid item xs={3} className={classes.divFormCont}>
          <div>Forfait prévention</div>
          <div>(prise en charge des dépense prévisible)</div>
          </Grid >
          {forfait.map(elm => <Grid item xs={3} className={classes.divFormCont}><div className={classes.boldText}>{elm} / an</div></Grid>)}
        </Grid>
        <Grid container item xs={12}><Grid item xs={3} className={classes.divFormCont}>Aucune Franchise</Grid></Grid>
        <Grid container item xs={12} className={classes.columnContainer} className={classes.secondC}>
        <Grid item xs={3} className={classes.divFormCont}>
          <div>Taux de prise en charge</div>
          <div>(frais médicaux / chirurgicaux)</div>
          </Grid >
          {taux.map(elm => <Grid item xs={3} className={classes.divFormCont}><div className={classes.boldText}>{elm.prc}</div><div className={classes.smallText}>jusqu'à</div><div className={classes.smallText}>{elm.max}</div></Grid>)}
        </Grid>
        <Grid container item xs={12}><Grid item xs={3} className={classes.divFormCont}>Franchise annuelle</Grid>
        {franchise.map(elm => <Grid item xs={3} className={classes.divFormCont}>{elm}</Grid>)}
        </Grid>
        <Grid container item xs={12} className={classes.columnContainer} className={classes.thirdC}>
        <Grid item xs={3} className={classes.divFormCont}>
          <div>Capital Décès</div>
          <div>(si souscrit)</div>
          </Grid >
          {capital.map(elm => <Grid item xs={3} className={classes.divFormCont}><div className={classes.boldText}>{elm}</div></Grid>)}
        </Grid>
        <Grid container item xs={12} className={classes.columnContainer} >
        <Grid item xs={3} className={classes.divFormCont}>Cochez la formule de votre choix</Grid>
        <Grid item xs={3} className={classes.divFormCont}>
          <Checkbox
          checked={info.formule === "Prudente" ? true : false}
          onClick={() => setInfo({...info, formule : "Prudente"})}
          value="Prudente"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Grid>
        <Grid item xs={3} className={classes.divFormCont}>
        <Checkbox
          checked={info.formule === "Rusée" ? true : false}
          onClick={() => setInfo({...info, formule : "Rusée"})}
          color="primary"
          value="Rusée"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        </Grid>
        <Grid item xs={3} className={classes.divFormCont}>
          <Checkbox
          checked={info.formule === "Avisée" ? true : false}
          onClick={() => setInfo({...info, formule : "Avisée"})}
          value="Avisée"
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
