
import './App.css';
import Index from 'pages';
import Registro from 'pages/registro';
import Layout from "layout/layout";
import LayoutU from "layout/layoutuser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <LayoutU> 
        <Switch>
          
            <Route path='/registro' excact>
              <Registro/>
            </Route>
          <Route path='' excact>
            <Index />
          </Route>
          
        </Switch>
       </LayoutU>
       
        
      </Router>
  );
}


export default App;

          /*<LayoutU>
            <Route path='/Admin' excact>
            <Index />
          </Route>
          </LayoutU>*/