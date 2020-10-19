import React from 'react';
import { Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import CovidList from './components/CovidList';
import PoliticsList from './components/PoliticsList';
import SportsList from './components/SportsList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SportForm from './components/SportForm';
import CovidForm from './components/CovidForm';
import PoliticForm from './components/PoliticForm';


function App() {
  return (
    <div className="App">
      <Header />
      <Route to='/' exact component={Navbar} />
      <Route path='/covidsList' exact component={CovidList} />
      <Route path='/politicsList' exact component={PoliticsList} />
      <Route path='/sportsList' exact component={SportsList} />
      <Route path='/addSport' exact component={SportForm} />
      <Route path='/addCovid' exact component={CovidForm} />
      <Route path='/addPolitic' exact component={PoliticForm} />
    </div>
  );
}

export default App;
