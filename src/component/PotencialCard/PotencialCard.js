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
  anchor: {
    color: "white"
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

export default function PotencialCard(props) {
  const classes = useStyles();
  console.log(props.info)
  return (



    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="subtitle1" component="p">
          <ul>
            {Array.from(props.info).map(e => <li>{e}</li>)}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  )



}
