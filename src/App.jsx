
import './App.css';
import Index from 'pages';
import Login from 'pages/login';

import Layout from "layout/layout";
import LayoutAU from "layout/layoutuser";
import LayoutU from "layout/layoutu";

import Usuarios from "pages/Admin/usuarios"
import Productos from 'pages/Admin/productos';
import Ventas from 'pages/Admin/ventas';
import Admin from 'pages/Admin/index';

import Vventas from 'pages/Vendedor/ventas';

import vend from 'pages/Vendedor/index';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
      <Route path = {['/Admin','/Admin/Productos','/Admin/Ventas','/Admin/Usuarios']}>
        <LayoutAU>
            <Switch>
              <Route path='/Admin/Ventas' >
                <Ventas />
              </Route>
              <Route path='/Admin/Productos' >
                <Productos />
              </Route>
              <Route path='/Admin/Usuarios' >
                <Usuarios />
              </Route>
              <Route path='/Admin'>
                <Admin />
              </Route>
            </Switch>
        </LayoutAU>
        </Route>
        <Route path = {['/Vendedor','/Vendedor/Ventas']}>
        <LayoutU>
            <Switch>
              <Route path='/Vendedor/Ventas' >
                <Vventas />
              </Route>
              <Route path='/Vendedor'>
                <vend/>
              </Route>
            </Switch>
        </LayoutU>
        </Route>
        <Route path = {['/login','']}>
          <Layout>
            <Switch>
                <Route path='/login' >
                  <Login/>
                </Route>
                <Route path='/' >
                  <Index/>
                </Route>
            </Switch>
          </Layout>
        </Route>
        
      </Switch>      
    </Router>
  );
}


export default App;

