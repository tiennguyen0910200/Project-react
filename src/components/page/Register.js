import React, { Component } from 'react';
import {withRouter}
from "react-router-dom";

 class Register extends Component {
   constructor(){
     super();
    //  this.state={
    //    success: ""
    //  }
     this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
   }
  onRegisterSubmit(event) {
    event.preventDefault();

    let name = event.target['name'].value;
    let email = event.target['email'].value;
    let password = event.target['password'].value;

    let user = {
        name:name,
        email:email,
        password:password
    }

    let userRegister = JSON.stringify(user);
    
    console.log(userRegister);

    fetch("http://127.0.0.1:8000/api/register", {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: userRegister
    })
    .then((response) => {
        console.log(response);
        alert("Register successful");
        if(response.status==200)
          this.props.history.push('/login');
        if(response.status==400){
          
        localStorage.setItem("old",userRegister);
        this.props.history.push('/register');
        }
    });
}

  render() {
    let old =JSON.parse(localStorage.getItem("old"));
    
    return (
      <div>
      <center><form className="register" onSubmit={this.onRegisterSubmit}> 
          <h3>Register</h3><br/>
          <div>
          <label>Name</label>&emsp;
          <input type="text" name="name" placeholder="Enter your name..."/>
          </div><br/>
          <div>
          <label>Email</label>&emsp;
          <input type="text" name="email" placeholder="Enter your email..."/>
          </div><br/>
          <div>
          <label>Password</label>&emsp;
          <input type="password" name="password" placeholder="Enter your password..."/>
          </div><br/>
          <button type="submit">Register</button>
      </form></center>
      </div>
    );
  }
}
export default withRouter(Register);