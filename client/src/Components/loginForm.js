import React, { Component } from "react";
import "./login.css";
import "./page.js";

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
      password: "",
      isLoading: false,
      nameError: "",
      passwordError: "",
      loggedIn: false,
      loggingError: "",
      user:false,  //array of users
      
       
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

/*
  componentDidMount(){
    let url= process.env.URL + "/users/login";
    fetch(url,{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-TYpe':'application/json',
      }
    }).then((result)=> {
     result.json().then((resp) =>{

this.setState({user:resp})
     })
    })
  } 
  */
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  isValid() {
    if (this.state.identifier.length < 1 && this.state.password.length < 1) {
      this.setState({
        nameError: "Please enter your Spotify username or email address.",
        passwordError: "Please enter your password."
      });
    } else if (
      this.state.identifier.length < 1 &&
      this.state.password.length > 0
    ) {
      this.setState({
        nameError: "Please enter your Spotify username or email address."
      });
    } else if (
      this.state.password.length < 1 &&
      this.state.identifier.length > 1
    ) {
      this.setState({ passwordError: "Please enter your password." });
    } else {
      return true;
    }
  }



  onSubmit = e => {

    this.setState({ nameError: "", passwordError: "" });
    e.preventDefault();

    if (this.isValid()) {
      //-------------------------------------------------------
        const url=process.env.REACT_APP_URL + "/users/login";

        let data=(this.state.user)
        console.log(this.state.user)

        fetch(url, {mode: 'cors'},{
        method:'POST',
        headers:{
        'Accept':'application/json',
        'Content-TYpe':'application/json',
      },
      body:JSON.stringify(data)
    }).then((resultss)=> {
     resultss.json().then((resp) =>{
    console.warn(resp)
    var h =resp.token;
   
    localStorage.setItem('tokenfromlogin',h)
    this.setState({
      loggedIn: true
    });
        
     })
    })
  
      }
      if(this.state.loggedIn===false) {
       { 
         this.setState({loggingError:"Incorrect user or password"})
         }
    }
  
  };
  render() {
    const { identifier, password, isLoading,loaded } = this.state;
    
    if (this.state.loggedIn) {
      return (window.location.href = "/Home");
    }

    return (
      <form id="loginForm">
        <h3> To continue,log in to Spotify </h3>
        <div className="error">{this.state.loggingError}</div> <br />
        <button
          className="btn2"
          
            //alert("try later");
            onClick={this.onSubmit}
          
          disabled={isLoading}
        >
          CONTINUE WITH FACEBOOK
        </button>
        <h3>OR</h3>
        <input
          name="identifier"
          field="identifier"
          value={identifier}
          className="center"
          type="text"
          placeholder="Enter Username or Email "
          onChange={this.onChange}
        />
        <div className="error">{this.state.nameError}</div> <br />
        <input
          name="password"
          field="password"
          value={password}
          type="password"
          className="center"
          placeholder="Password"
          onChange={this.onChange}
        />
        <div className="error">{this.state.passwordError}</div> <br />
        <button className="btn" onClick={this.onSubmit} disabled={isLoading}>
          LOG IN
        </button>{" "}
        <br />
        <a href="/page" className="hyperLink">
          Forgot your password?
        </a>
        <hr />
        <h3>Don't have an account ?</h3>
        <a className="btn3" href="/signup" disabled={isLoading}>
          SIGN UP FOR SPOTIFY
        </a>
      </form>
    );
  }
}

export default Loginform;
