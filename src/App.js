import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import MainMenu from "./containers/MainMenu/MainMenu";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import GameSettings from "./components/GameSettings/GameSettings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu/>
        <Switch>
          <Route path="/mainpage" component={MainPage}/>
          <Route path="/gamesettings" exact component={GameSettings}/>
          <Route path="/projectinfo" exact component={ProjectInfo}/>
        </Switch>
      </div>
    );
  }
}

export default App;
