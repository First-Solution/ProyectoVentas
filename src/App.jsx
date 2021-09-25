
import './App.css';
import Index from 'pages';
import Registro from 'pages/registro';
import Layout from "layout/layoutuser";
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
        </Switch>
        </Layout>
      </Router>
  );
}


export default App;
