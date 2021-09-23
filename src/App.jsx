
import './App.css';
import Index from 'pages';
import Registro from 'pages/registro';
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
        <Route path='/registro'>
            <Registro/>
          </Route>
          <Route path=''>
            <Index />
          </Route>
        </Switch>
      </Router>
  );
}


export default App;
