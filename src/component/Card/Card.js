import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '8px',
    backgroundColor: 'rgb(77, 77, 66)',
    color: 'white'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  console.log(props.info[0])
  return (



    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography className={classes.pos}  gutterBottom>
          {props.info[0]}
        </Typography>
        <Typography className={classes.pos} >
          {props.info[1]}
        </Typography>
        <Typography variant="body2" component="p">
          <ul>
            {Array.from(props.info[2]).map(e => <li>{e}</li>)}
          </ul>
        </Typography>
        <br />
        <Typography variant="caption" component="p">
          {props.info[3] ? props.info[3] : null}
        </Typography>
      </CardContent>
    </Card>
  )



}
