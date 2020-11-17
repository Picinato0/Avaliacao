import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import PageError from './pages/PageError';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route component={PageError} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
