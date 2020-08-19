import React, { Component } from 'react';
import Home from './components/page/Home';
import Login from './components/page/Login';
import Cart from './components/page/Cart';
import HomeMain from './components/page/HomeMain';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Register from './components/page/Register';
import Detail from './components/page/Detail';


class App extends Component {
  constructor(){
    super();
    let checkLogin = localStorage.getItem('idp');
    let check = checkLogin ? "on" :"off";
    this.state ={
      checkLogin: check
    }
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout(){
    localStorage.removeItem('idp');
    this.setState({
      checkLogin:"off"
    });

  }

  render() {
    return (
      <div>
        <Router>
         <body>
            <header className="header-section">
              <div className="container-fluid">
                <div className="inner-header">
                  <div className="logo">
                   <a href="/" ><img width="130px;" height="130px;" src="Image/logo.png" alt="" /></a>
                  </div>
                  <div className="header-right">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">Search</button>&emsp;
                  <Link to="/login" > <button>Login</button></Link>
                  
                  {this.state.checkLogin === "on"?
                  <Link to="/"><button onClick={this.onLogout}>Logout</button></Link>:<Link to="/register"><button>Register</button></Link>}
                   

                  </div>
                  <nav className="main-menu ">
                    <ul>
                      <li><Link to="/homemain">Home</Link></li>
                      <li><Link to="/shop">Shop</Link>
                        <ul className="sub-menu">
                          <li><a href="#">Link 1</a></li>
                          <li><a href="#">Link 2</a></li>
                          <li><a href="#">Link 3</a></li>
                        </ul>
                      </li>
                      <li><a href="/">About</a></li>
                      <li><a href="/">Contact</a></li>
                      <li><Link to="/cart">Cart</Link></li>
                    </ul>
                  </nav>
                </div>

              </div>
           </header>
         </body>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact/>
            <Route path="/homemain" component={HomeMain} exact />

           <Route path={"/detail/:id"} exact>
              <Detail />
            </Route>
            <Route path="/login" exact >
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }

}
export default App;
