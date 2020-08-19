import React, { Component } from 'react';
import {withRouter}
from "react-router-dom";
import '../root/styte/Header.css'
class Login extends Component {
    constructor(){
        super();
        this.onLogin = this.onLogin.bind(this);
      }
    onLogin(event){
        event.preventDefault();
        let name = event.target['name'].value;
        let password = event.target['password'].value;

        let user  = {
            name: name,
            password: password,
        }

        let postInJson = JSON.stringify(user)
        fetch("http://127.0.0.1:8000/api/user/", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: postInJson
        })
        // .then((data) => {
        //     return data.json();
        // })
        .then(response => {
            response.json().then((data) => {
            console.log(data);          
            if(response.status==200){
            localStorage.setItem("idp",data.idToken);
            console.log(data.idToken);
            alert("Success");
            this.props.history.push('/homemain');
            
            }
            if(response.status==400){
                alert("Failed");
            this.props.history.push('/login');
            }
        window.location.reload();
        });
    });
}
    
    render() {
        return (
            <div >
            <center><div className="login">
                <h3>Login</h3><br />
                <form onSubmit={this.onLogin} method="POST" role="form">
                    <div>
                    <label>Username</label>&emsp;
                    <input type="text" name="name" placeholder="Enter your username..." />
                    </div><br/>
                    <div>
                    <label>Password</label>&emsp;
                    <input type="password" name="password" placeholder="Enter your password..." />
                    </div><br/>
                    <button type="submit">Login</button>
                </form>
            </div></center>
            </div>
        );
    }
}
export default withRouter(Login);
