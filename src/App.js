import React from 'react'
import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';

import NavBoot from './components/NavBoot'
import Navbar2 from './components/Navbar/Navbar2'
import Team from './components/pages/Team'
import Servc from './components/pages/Servc'
import 'bootstrap';
import Product from './components/pages/Prdts'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
      <NavBoot/>
      <Switch>
        <Route path="/" exact component={Home}/>
        
        <Route path="/services" exact component={Servc}/>
        <Route path="/product" exact component={Product}/>
        <Route path="/team" exact component={Team}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/footer" exact component={Footer}/>
      </Switch>
      <Footer />
      </Router>
  </>
  );
}

export default App;
