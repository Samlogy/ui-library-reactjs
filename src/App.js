import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <Dashboard />

      <Switch>
        <Route path='/' exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
