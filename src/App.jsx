
import React, {useEffect, useState, useRef} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Index from 'pages';
import Login from 'pages/login';
import Layout from "layout/layout";
import LayoutAU from "layout/layoutuser";
import LayoutU from "layout/layoutu";
import LayoutAuth from "layout/layoutauth";

import Usuarios from "pages/Admin/usuarios"
import Productos from 'pages/Admin/productos';
import Ventas from 'pages/Admin/ventas';
import Admin from 'pages/Admin/index';
import AdminP from 'pages/Admin/perfil';
import Vventas from 'pages/Vendedor/ventas';

import Vendedor from 'pages/Vendedor/index';
import VendedorP from 'pages/Vendedor/perfil';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from "components/context/userContext";
import PrivateRoute from "components/PrivateRoute";

function App() {
  const [userData,setUserData] = useState({});
  return (
    <Auth0Provider
    domain="firstsolution-proyventas.us.auth0.com"
    clientId="T0DBfOUlgSC0sV9QbcTxFtWx1mLINKJp"
    redirectUri={"http://localhost:3000/Admin"}
    audience = 'api-autenticacion-ventas-mintic'
    >
      
    <UserContext.Provider value = {{userData,setUserData}}>
    <Router>
      <Switch>
      <Route path = {['/Admin','/Admin/Productos','/Admin/Ventas','/Admin/Usuarios','/Admin/Perfil']}>
        <LayoutAU>
            <Switch>
              <Route path='/Admin/Ventas' >
                <PrivateRoute roleList = {['Admin']}>
                  <Ventas />
                </PrivateRoute>
                
              </Route>
              <Route path='/Admin/Productos' >
              <PrivateRoute roleList = {['Admin']}>
                <Productos />
                </PrivateRoute>
              </Route>
              
              <Route path='/Admin/Usuarios' >
              <PrivateRoute roleList = {['Admin']}>
                <Usuarios />
                </PrivateRoute >
              </Route>
              <Route path='/Admin/Perfil' >
              <PrivateRoute roleList = {['Admin']}>
                <AdminP />
                </PrivateRoute>
              </Route>
              <Route path='/Admin'>
              <PrivateRoute roleList = {['Admin']}>
                <Admin />
                </PrivateRoute>
              </Route>
            </Switch>
        </LayoutAU>
        </Route>
        <Route path = {['/Vendedor','/Vendedor/Ventas','/Vendedor/Perfil']}>
        <LayoutU>
            <Switch>
              <Route path='/Vendedor/Ventas' >
              <PrivateRoute roleList = {['Vendedor']}>
                <Vventas />
                </PrivateRoute>
              </Route>
              <Route path='/Vendedor/Perfil' >
              <PrivateRoute roleList = {['Vendedor']}>
                <VendedorP />
                </PrivateRoute>
              </Route>
              <Route path='/Vendedor' >
              <PrivateRoute roleList = {['Vendedor']}>
                <Vendedor/>
                </PrivateRoute>
              </Route>
            </Switch>
        </LayoutU>
        </Route>
        <Route path = {['/login']}>
          <LayoutAuth>
            <Switch>
                <Route path='/login' >
                  <Login/>
                </Route>
            </Switch>
          </LayoutAuth>
        </Route>
        <Route path = {['/']}>
          <Layout>
            <Switch>
                <Route path='/' >
                  <Index/>
                </Route>
            </Switch>
          </Layout>
        </Route>
        
      </Switch>      
    </Router>
    </UserContext.Provider>
    </Auth0Provider>
  );
}


export default App;

