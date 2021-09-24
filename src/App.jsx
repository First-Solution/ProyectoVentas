
import './App.css';
import Index from 'pages';
import Registro from 'pages/registro';
import Layout from "layout/layout";
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
          <Layout>
            <Route path='/registro'>
              <Registro/>
            </Route>

        
          <Route path=''>
            <Index />
          </Route>
          </Layout>
        </Switch>
      </Router>
  );
}


export default App;
