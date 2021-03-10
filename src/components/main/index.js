import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './styles.css';

import Slide1 from '../slide1';
import Slide2 from '../slide2';
import Slide3 from '../slide3';
import Slide4 from '../slide4';

function Main () {
  const classes = useStyles();

  
  const [slide, setSlide] = useState(1);
  const [info, setInfo] = useState({
    animal: "",
    dateNaissance: new Date(),
    nomAnimal: "",
    race: "",
    refTatoo: "",
    sexe: "",
    castre: "",
    tatoo: "",
    formule: "",
    nom: "",
    prenom: "",
    adresse: "",
    code: "",
    ville: "",
    telephone: ""
  })

  useEffect(() => {
    console.log("state:",info)
  },[info])
  
    const lastPage = () => {
      setSlide(slide - 1)
    }
    const nextPage = () => {
      setSlide(slide + 1)
    }

  return (
    <div className="main">

        <form className="form1">
            {slide === 1 && <Slide1 info={info} setInfo={setInfo}/>}
            {slide === 2 && <Slide2 info={info} setInfo={setInfo}/>}
            {slide === 3 && <Slide3 info={info} setInfo={setInfo} nextPage={nextPage} />}
            {slide === 4 && <Slide4 info={info} setInfo={setInfo}/>}
        </form>
            <div className={classes.root}>       
              {slide !== 1 && <Button onClick={lastPage} className="nav-btn" variant="contained">Précedent</Button>}
              {slide !== 4 && <Button onClick={nextPage} className="nav-btn" variant="contained">Suivant</Button>}
              {slide === 4 && <Button className="nav-btn" variant="contained">Envoyer</Button>}
            </div>  
        
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));


export default Main;