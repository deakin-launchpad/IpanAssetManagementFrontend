import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import Home from './views/home'
import Sidenav from '../src/views/sidenav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Programs from './views/Program/programs';
import Programdetails from './views/Program/programdetails';
import Modules from './views/Modules/modules'
import Createprogram from './views/Program/createprogram'
import Moduledetails from './views/Modules/moduledetails'
import CreateModule from './views/Modules/createmodule'
import Activities from './views/Activities/activities'
import Activitydetails from './views/Activities/activitydetails'
import Createactivity from './views/Activities/createactivity'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }


  }



  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <Sidenav></Sidenav>
        </header>
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/programs" component={Programs} />
              <Route path="/programdetails" component={Programdetails} />
              <Route path="/createprogram" component={Createprogram} />
              <Route path="/modules" component={Modules} />
              <Route path="/moduledetails" component={Moduledetails} />
              <Route path="/createmodule" component={CreateModule} />
              <Route path="/activity" component={Activities} />
              <Route path="/activitydetails" component={Activitydetails} />
              <Route path="/createactivity" component={Createactivity} />
            </Switch>
          </Router>
        </main>
        <footer className="App-footer"><div className="container">Footer Component</div></footer>
      </div>
    );
  }
}

export default App;
