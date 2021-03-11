import React from 'react';
import "./App.scss"

import articleData from "./../mockData/description.js"

import Header from "./../layout/Header.js";
import Home from './../pages/Home.js'
import Article from "./../components/Article.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div id={'nescss'}>
        <Header/>
        <div className={'container'}>
          <main className={"main-content"}>
            <Switch>
              {
                articleData.map(item => {
                  return (
                      <Route path={`/${Object.keys(item)[0]}`}>
                        <Article article={item}/>
                      </Route>
                  )
                })
              }

              <Route path={"/"}>
                <Home/>
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
