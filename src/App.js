import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Create from './Create';

//We've surrounded our entire app with <Router> so that all components that are nested inside the app
//component will have access to the router


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />      
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
