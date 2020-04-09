import React from "react";
import "./SignupForm.css";
//import { browserHistory } from 'react-router';
//import axios from 'axios';
//import Home from './Home';
//import { Component } from 'react';
//import { userService } from './user.service2';
//import { Link } from 'react-router';
//for email validation
const emailRegax = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
      age: 30,
      type:"",
      gender: "Female",
      product: "Free"
      ,
      day: 30,
      month: 1,
      year: 1999,
      gender: "Female",

      isvalid: false,
      signedup: false, 

      formerrors: {
        emailError: "not yet",
        usernameError: "notyet",
        passwordError: "notyet",
        ageerror:"notyet",
        errormsg: ""
      },
      loaded:false, 
      data:true,
        errormsg: ""
      

       

    };
  }

/*
  componentDidMount(){
    let link= process.env.URL +"/users/signUp";
    console.log(process.env.URL)
    fetch(link,{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-TYpe':'application/json',
      }
    }).then((result)=> {
     result.json().then((resp) =>{

this.setState({data:resp})
     })
    })
  }  
    

componentDidMount(){
  fetch('http://192.168.1.3:8080/users.json')
  .then(response => {
  response.json();
   })
  .then(users => {
    this.setState({
      user:users,
   loaded:true})

  });
  
}
*/
  onsubmit = e => {
    e.preventDefault();
    if (
      this.state.passwordError === "" &&
      this.state.usernameError === "" &&
      this.state.emailError === ""    &&
      this.state.ageerror ===""
    ) {

     if(this.state.email===this.state.data.email || this.state.userName === this.state.data.display_name){
     
      this.setState({errormsg:"choose another email or username"})
     }
     else{
      
 
  const aa= process.env.REACT_APP_URL + "/users/signUp";
  console.log(process.env)
  console.log(aa) //for debugging =abm

  //let data=this.state.datatosend;
  let data ={
    'email':  this.state.email,
    'display_name':this.state.userName,
    'password': this.state.password,
    'age': this.state.age,
    'type': this.state.type,
    'gender':this.state.gender,
    'product' :this.state.product
  }
  console.log(data)
  fetch(aa,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json',
    },
    body:JSON.stringify(data)
  }).then((result) => {
 result.json().then((respp) =>{
console.warn("respp".respp)
this.setState({ errormsg: "you are signed up successfully! please go and login " ,
loaded:true,
});  
 })
  })

}
if(this.state.loaded===false){
  this.setState({ errormsg: "try again may be with diffrend email/username"}); 
}
    
      
     }
  
      
    
  };
  onChangetype = e =>{
  this.setState({
    type:e.target.value
  })
  }

  onChangeemail = e => {
    this.setState({
      email: e.target.value
    });
    let emailerror = this.state.emailError;
    emailerror =
      !emailRegax.test(e.target.value) ||
      e.target.value.trim() === "" ||
      e.target.value.length > 100 ||
      e.target.value.length < 5 ||
      e.target.value.length === 0
        ? "InvalidEmail!"
        : "";
    this.setState({ emailError: emailerror });
  };

  onChangeusername = e => {
    this.setState({
      userName: e.target.value
    });
    let usernameerror = this.state.usernameError;
    usernameerror =
      e.target.value.length > 16 ||
      e.target.value.length === 0 ||
      e.target.value.trim() === "" ||
      e.target.value.length < 6
        ? "minimum 6charchters And Maxmium 16 charchters are required"
        : "";
    this.setState({ usernameError: usernameerror });
  };

  onChangepassword = e => {
    this.setState({
      password: e.target.value
    });
    let passworderror = this.state.passwordError;
    passworderror =
      e.target.value.length > 16 ||
      e.target.value.trim() === "" ||
      e.target.value.length === 0 ||
      e.target.value.length < 8
        ? "minimum 8 charchters And Maxmium 16 charchters are required to make strong password"
        : "";
    //this.state.passwordError=passworderror;
    this.setState({ passwordError: passworderror });
  };

  onchangedateday = e => {
    if(e.target.value<=9 || e.target.value >=90)
    {
      this.setState({ageerror:" Sorry!! Min age is 10 an Max age is 90"})
    }
    else{
    this.setState({
      age: e.target.value,
      ageerror:""
    });
  }
}


  onChangegender = e => {
    this.setState({
      gender: e.target.value
    });
  }
  onChangeproduct = e=>{
    this.setState({
      product: e.target.value
    });
  }
  gologin = e => {
    return (window.location.href = "/login");
  }
  
  render()
   {

    return (
      <form onSubmit={this.onsubmit} id="signupForm">

        <div className="components">
          <br></br>
          <br></br>
          <button id="bfb">SIGNUP WITH FACEBOOK</button>
          <br></br>
          <h2>OR</h2>
          <h1>Sign Up With Your Email Address</h1>
          <br></br>
          <div className="errormsg2">{this.state.errormsg}</div>
          <br></br>
          <div className="errormsg">{this.state.errormsg}</div>
          <input
            onChange={this.onChangeemail}
            type="text"
            placeholder="Email"
            name="email"
            className="forminput"
            required="required"
          />

          <div className="errormsg">{this.state.emailError}</div>
          <br></br>

          <input
            onChange={this.onChangeusername}
            type="text"
            placeholder="UserNamee"
            name="userName"
            className="forminput"
            required="required"
          />

          <div className="errormsg">{this.state.usernameError}</div>
          <br></br>

          <input
            onChange={this.onChangepassword}
            type="password"
            placeholder="Password"
            name="password"
            className="forminput"
            required="required"
          />

          <div className="errormsg">{this.state.passwordError}</div>
          <br></br>

          
            <input
            onChange={this.onchangedateday}
            type="number"
            placeholder="YourAge"
            name="age"
            className="forminput"
            maxLength="2"
            minLength="1"
            pattern="[0-9]*" 
            required="required"
          />
          <div className="errormsg">{this.state.ageerror}</div>
          
          <br></br>

          
         <label>gender:</label>
          <br></br>
          <select
            id="select"
            className="forminput"
            onChange={this.onChangegender}
            name="gender"
            placeholder={this.state.gender}
          >
            <option selectedvalue="Female">Female</option>
            <option value="Male">Male</option>
          </select>
 

          <br></br>

<label>type:</label>
<br></br>
          <select id="sss" className="forminput" name="type" onChange={this.onChangetype} required="required" >
            <option selected value ="User"> User</option>
            <option value ="Artist">Artist</option>
          </select>

          <br></br>

<label>product:</label>
<br></br>
          <select id="sss" className="forminput" name="product" onChange={this.onChangeproduct} required="required" >
            <option selected value ="Premium"> Premium</option>
            <option value ="Free">Free</option>
</select>

          <br></br>
          <br></br>

          <button className="btn" onClick={this.onSubmit}>
            {" "}
            SIGN UP
          </button>
          <h3> Already have account?</h3>
          <button id= "forlogin" onClick={this.gologin}>Login</button>

        </div>

      </form>
    );
    }
    
  
  

  }

export default SignupForm;
