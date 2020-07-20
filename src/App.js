import React, { Component } from 'react';
import Header from './components/root/Header';
import Home from './components/page/Home';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
       </Switch>
      </BrowserRouter>
    )
  }

}
export default App;
