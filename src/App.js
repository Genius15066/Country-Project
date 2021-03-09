import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Country from './components/Country/Country';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Country />
        </Route>
        <Route exact path="/country">
          <Country />
        </Route>

        <Route path="/country/:name">
          <CountryDetails/>
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
