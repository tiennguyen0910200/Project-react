import React, { Component } from 'react';
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";
import './styte/Header.css';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: false
        }
        this.signin = this.signin.bind(this)
    }
    signin() {
        var { isLogged } = this.state;
        isLogged = !isLogged;
        this.setState({ isLogged });

    }
    render() {
        return (

            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
                <body>
                    <header className="header-section">
                        <div className="container-fluid">
                            <div className="inner-header">
                                <div className="logo">
                                
                                    <a href="/" ><img width="100px;" height="100px;" src="Image/logo.png" alt="" /></a>
                                </div>
                                <div className="header-right">
                                    <img src="img/icons/search.png" alt="" className="search-trigger" />
                                    <img src="img/icons/man.png" alt="" />
                                    <a href="/test">
                                        <img src="img/icons/bag.png" alt="" />

                                    </a>
                                </div>
                                <div className="user-access">
                                    {this.state.isLogged && <button className="btn" onClick={this.signin}>Logout</button>}
                                    {!this.state.isLogged && <button className="btn" onClick={this.signin}>Login</button>}

                                </div>

                                <nav className="main-menu mobile-menu">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/shop">Shop</Link>
                                            <ul className="sub-menu">
                                            </ul>
                                        </li>
                                        <li><a href="/">About</a></li>
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                        
                    </header>


                </body>
                <div className="discount">
                   <center><h6>~~~~~~~**~~~~~~~</h6></center>
                </div>
            </div>

        );
    }
}

export default Header;