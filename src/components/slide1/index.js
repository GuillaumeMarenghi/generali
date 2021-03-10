import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import chien from './chien.jpg';
import chat from './chat.jpg';

function Slide1 ({info, setInfo}) {

  const classes = useStyles();

  return (
    <div className="container-slide-1">
        <div className={classes.animal}>Quel type d'animal souhaitez vous assurer ?</div>
        <div className={classes.root}>
          <div className={info.animal === "chat" ? classes.brd : ""} onClick={() => {setInfo({...info, animal: "chat"})}}>
            <Avatar alt="chat" src={chat} className={classes.large}/><div className={classes.animal}>Chat</div>
            </div>
          <div className={info.animal === "chien" ? classes.brd : ""} onClick={() => {setInfo({...info, animal: "chien"})}}>
            <Avatar alt="Travis Howard" src={chien} className={classes.large} /><div className={classes.animal}>Chien</div>
            </div> 
            
        </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: "center"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    cursor: "pointer"
  },
  animal: {
    fontSize: "2em",
    textAlign: "center"
  },
  brd: {
    border: " solid 4px #e11c05",
    borderRadius: "15px"
  }

}));

export default Slide1;