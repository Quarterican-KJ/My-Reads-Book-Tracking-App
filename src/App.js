import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import mainPage from './Components/Pages/mainPage';
import searchPage from './Components/Pages/searchPage';

class BooksApp extends React.Component {
  render() {
    return(
      <div>
       <Route exact path="/" component={ mainPage } />
       <Route exact path="/search" component={ searchPage } />
      </div>
    );
  }
}

export default BooksApp
