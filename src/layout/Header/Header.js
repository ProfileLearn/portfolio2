import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({

  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    borderRadius: '10px',
    backgroundColor: theme.palette.primary.dark,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
}));



const Header = (props) => {

  const classes = useStyles();

  
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.onClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Portfolio Hernán Porfirio
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
