import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import BookIcon from '@material-ui/icons/Book';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import img from "../../images/perfil.jpeg"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },


  },
  toolbar: {
    ...theme.mixins.toolbar,
    backgroundColor: 'rgb(30 38 41)',
    zIndex: 0,
    marginTop: '18px'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgb(30 38 41)',
    color: 'white'
  },
  listas: {
    backgroundColor: theme.palette.primary.dark,
    // border: "8px solid rgb(30 38 41)",
    marginLeft: "8px",
    marginRight: "4px",
    borderRadius: '10px',
    zIndex: 1
  },
  img: {
    width: "200px",
    height: "auto",
    borderRadius: "50%",
    margin: theme.spacing(2)
  } 

}));

const Cajon = (props) => {

  const classes = useStyles();

  const drawer = (
    <List component="nav" aria-label="main">
      <ListItem button component={Link} to="/portfolio2/">
        <ListItemIcon>
          <HomeIcon color="" />
        </ListItemIcon>
        <ListItemText primary="Sobre Mí" />
      </ListItem>
      <Divider light />
      <ListItem button component={Link} to="/portfolio2/experiencia">
        <ListItemIcon>
          <BookIcon color="" />
        </ListItemIcon>
        <ListItemText primary="Experiencia" />
      </ListItem>
      <Divider light />
      <ListItem button component={Link} to="/portfolio2/estudios">
        <ListItemIcon>
          <LibraryBooksIcon color="" />
        </ListItemIcon>
        <ListItemText primary="Estudios" />
      </ListItem>
      <Divider light />
      <ListItem button component={Link} to="/portfolio2/potencial-adquirido">
        <ListItemIcon>
          <StarOutlineIcon color="" />
        </ListItemIcon>
        <ListItemText primary="Potencial Adquirido" />
      </ListItem>
      <Divider light />
      <ListItem button component={Link} to="/portfolio2/contenido">
        <ListItemIcon>
          <PermMediaIcon color="" />
        </ListItemIcon>
        <ListItemText primary="Contenido" />
      </ListItem>
      <Divider light />
      <ListItem button component={Link} to="/portfolio2/app">
        <ListItemIcon>
          <AppsIcon color="" />
        </ListItemIcon>
        <ListItemText primary="App" />
      </ListItem>
      <Divider light />
      <ListItem button component={Link} to="/portfolio2/contacto">
        <ListItemIcon>
          <InboxIcon color="" />
        </ListItemIcon>
        <ListItemText primary="Contacto" />
      </ListItem>
      <Divider />
    </List>
  )

  return (
    <>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={props.open}
            onClose={props.onClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClick={props.onClick}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div>
              <div className={classes.toolbar} />
              <div className={classes.listas} >
                {drawer}
                
              </div>
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div>
              <img className={classes.img} src={img} alt="foto de perfil" />
{/*               <div className={classes.toolbar} />
 */}              <div className={classes.listas} >

                {drawer}
              </div>
            </div>
          </Drawer>
        </Hidden>
      </nav>
    </>
  )
}

export default Cajon
