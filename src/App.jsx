
import './App.css';
import Index from 'pages';
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
          <Route path=''>
            <Index />
          </Route>
        </Switch>
      </Router>
  );
}


export default App;
