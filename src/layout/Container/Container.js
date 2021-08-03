import React from 'react'
import Cajon from '../../component/Cajon/Cajon';
import Header from '../Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../../pages/App/App'
import Contact from '../../pages/Contact/Contact'
import { makeStyles } from '@material-ui/core/styles';
import Estudios from '../../pages/Estudios/Estudios';
import SobreMi from '../../pages/SobreMi/SobreMi';
import info from '../../api/json/info.json'
import Experiencia from '../../pages/Experiencia/Experiencia';
import Potencial from '../../pages/Potencial/Potencial';
import Contenido from '../../pages/Contenido/Contenido';

const useStyles = makeStyles((theme)=>({
  content: {
    flexGrow: 1,
    backgroundColor: 'rgb(30 38 41)',
    height: '100%',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]:{
      marginLeft: 240
    },
  },
  toolbar: theme.mixins.toolbar,
}))

const Container = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);

  };
  return (
    <BrowserRouter>
      <Header onClick={handleDrawerToggle} />
      <Cajon open={mobileOpen} onClose={handleDrawerToggle} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/" exact render={()=> <SobreMi info={info} />} />
          <Route path="/experiencia" render={()=> <Experiencia info={info.experiencia} />} />
          <Route path="/estudios" render={() => <Estudios info={info.estudios} />} />
          <Route path="/potencial-adquirido" render={() => <Potencial />} />
          <Route path="/contenido" render={() => <Contenido />} />
          <Route path="/app" render={()=> <App />} />
          <Route path="/contacto" render={() => <Contact />} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default Container
