import React from "react";
import  "./Accountoverview.css";



class Accountoverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         //make the userinfo in user

          data:false,
          loaded:true,// MAKE LOADED:FALSE

        };
    }
    
   

  componentDidMount(){
    const tokenn =localStorage.getItem('tokenfromlogin')
    const link1= process.env.REACT_APP_URL + "/me";
    fetch(link1,{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization' :'Token'+tokenn
   
      }
    }).then((result)=> {
     result.json().then((resp) =>{

this.setState({data:resp})
     })
    })
  }  
    
    
    gotoprem = e => {
//go to premium page

return (window.location.href = "/Premium");
      };

    gotoeditprofile = e=>{
     return (window.location.href = "/EditProfile");
    };


   

render() {    
  const data=this.state.data;
  console.warn(data);

    var name =this.state.data.display_name || "";
    var e = this.state.data.email || "";
    var count = this.state.data.country || "";
    var ttype = this.state.data.type || "";
    var aa = this.state.data.age || "";
    var pp = this.state.data.product || "";
    return(
   <div style={{paddingBottom:200}} className="info">
<h1>Account overview</h1>
  <h2>Profile</h2>
  

  <label className="labels">Username:</label><label className="data"> {name}</label>
<br></br>
<label className="labels">Email:</label> <label className="data">{e}</label>  

<br></br>
<label className="labels">Country:</label> <label className="data">{count}</label>  
<br></br>
<label className="labels"> type:</label> <label className="data">{ttype}</label>  
<br></br>
<label className="labels"> Age:</label> <label className="data">{aa}</label>  
<br></br>
<label className="labels"> Product:</label> <label className="data">{pp}</label>  

  <br></br>
  <br></br>


  <button className="button1" onClick={this.gotoeditprofile}>EDIT PROFILE</button>
  <br></br>
 
  <br></br>
  <h4> YOUR PLAN</h4>
  <div className="id">
  <br></br> 
  <br></br>
  <h3 className="pp"> Spotify Free</h3><br></br>
  <br></br> 
  </div>
    <div className ="labels">Play music in shuffle mode only, with ads.</div>
    <h5> FREE</h5>
   <button className="button1" onClick={this.gotoprem}>JOIN PREMIUM</button>
 </div>
    ); }
}
export default Accountoverview;