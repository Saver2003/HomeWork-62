import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './MainMenu.css';

class MainMenu extends Component {
  render() {
    return (
      <div>
        <NavLink to="/mainpage" activeClassName="ActiveClassName" className="Mainmenu">Main Page</NavLink>
        <NavLink to="/gamesettings" activeClassName="ActiveClassName" className="Mainmenu">Game settings</NavLink>
        <NavLink to="/projectinfo" activeClassName="ActiveClassName" className="Mainmenu">Project Info</NavLink>
      </div>
    )
  }
}

export default MainMenu;