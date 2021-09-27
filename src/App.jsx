
import './App.css';
import Index from 'pages';
import Registro from 'pages/registro';
import Layout from "layout/layout";
import LayoutU from "layout/layoutuser";
import Usuarios from "pages/listausuarios"
import Productos from 'pages/productos';
import Ventas from 'pages/ventas';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Layout> 
        <Switch>
            <Route path='/registro' excact>
              <Registro/>
            </Route>
          <Route path='' excact>
            <Index />
          </Route>
              <Route path='/Usuarios' excact>
            <Usuarios />
            </Route>
              <Route path='/Ventas' excact>
            <Ventas />
          </Route>
          <Route path='/Productos' excact>
            <Productos />
          </Route>
        </Switch>
       </Layout>
      </Router>
  );
}


export default App;

          /*<LayoutU>
            <Route path='/Admin' excact>
            <Index />
          </Route>
          </LayoutU>*/