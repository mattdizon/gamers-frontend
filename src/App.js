import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter} from "react-router-dom";

//components to import
import Navigation from './components/NavBar'
import Sidebar from './components/Sidebar'
import Home from './containers/Home'
import News from './containers/News'
import Lfg from './containers/Lfg'
import Friends from './containers/Friends'
import Groups from './containers/Groups'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Sidebar/>
      <Navigation/>
      <div className = "container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/lfg" component={Lfg} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/groups" component={Groups} />
      </Switch>
      </div>
      </div>
    );
  }
}

export default withRouter(App)
