import React from "react";
//import{ Component, Fragment } from "react";
////import axios from 'axios'; 
import  "./EditProfile.css";
const emailRegax = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);
const phonenumberRegex =RegExp( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         // newdetails:
            newemail: "",
            newdisplay_name: "",
            passwordd: "",
           newphonenumber:"",
           newage:"",
           newproduct:"",

          passwordtrue:false,
          changeemail:false,
          changeusername:false,
          changeday:false,
          changemonth:false,
          changeyear:false,
          changegender:false,
          changephonenumber:false,
          changeage:false,
          changeproduct:false,
          formerrors: {
            newemailError: "",
            newusernameError: "",
            newphonenumberError:"",
            newageError:"",
            msg:"",
          },
          donesaving:"",


            data:false,


        };
    }

    componentDidMount(){
      const tokenn =localStorage.getItem('tokenfromlogin')
      let url= process.env.URL + "/me";
      fetch(url,{
        method:'GET',
        headers:{
          'Accept':'application/json',
          'Content-TYpe':'application/json',
          'Authorization' :'Token'+tokenn
        }
      }).then((result)=> {
       result.json().then((resp) =>{
  
  this.setState({data:resp})
       })
      })
    } 
    
   saveEdit =e =>{  
    //e.preventDefault();     
    if(this.state.passwordd===this.state.data.password){
               if(this.state.changeemail===true){
                   if( this.state.newemail !== this.state.data.email) {
                    const tokenn =localStorage.getItem('tokenfromlogin' )                   
                     let ur5l=process.env.URL + "/users/me";
                     let data={
                      'email' :this.state.newemail,
                      
                     }
                     fetch(ur5l,{
                       method:'PATCH',
                       headers:{
                         'Content-Type':'application/json',
                         'Accept':'application/json',
                         'Authorization' :'Token'+tokenn
                       },
                       body:JSON.stringify(data)
                     }).then((result) => {
                    result.json().then((respp) =>{
                   console.warn("respp".respp)
                     this.setState({msg:"Email is changed!"});
                    })
                     })
                    
                    this.setState({msg:"Email is changed!"});
                   }
                   else{
                    this.setState({msg:"Email is already taken!"});
                   }
                  }
 /*
           if(this.state.changephonenumber===true){
    ///axious.post('http://192.168.1.3:8080/users.json',this.statenewphonenumber)
   
    this.setState({msg:"your phone number is changed!"});
           }
           if(this.state.changeusername===true){
            ///
            let url="	http://dummy.restapiexample.com/api/v1/create";
            let data=this.state.newdisplay_name;
            fetch(url,{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
              },
              body:JSON.stringify(data)
            }).then((result) => {
           result.json().then((respp) =>{
          console.warn("respp".respp)
           })
            })
          }
*/
if(this.state.changeusername===true){
if( this.state.newdisplay_name!== this.state.data.display_name) {
  const tokenn =localStorage.getItem('tokenfromlogin')
                 
  let url55=process.env.URL +"/users/me";
  let data={
    'display_name':this.state.newdisplay_name,
    
  }
  fetch(url55,{
    method:'PATCH',
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization' :'Token'+tokenn  
    },
    body:JSON.stringify(data)
  }).then((result) => {
 result.json().then((respp) =>{
console.warn("respp".respp)
  this.setState({msg:"UserName is changed!"});
  console.log(this.state.data.email)
 })
  })
}
else{this.setState({msg:"UserName is already taken!"}) }
}           
   if(this.state.changeage===true){
    const tokenn =localStorage.getItem('tokenfromlogin')
    
    let url557=process.env.URL + "/users/me";
    let data={
              'age':this.state.newage,
              
    }
    fetch(url557,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization' :'Token'+tokenn
      },
      body:JSON.stringify(data)
    }).then((result) => {
   result.json().then((respp) =>{
  console.warn("respp".respp)
    this.setState({msg:"Age is changed!"});
   })
    })
   }
   ////////
   if(this.state.changeusername===true || this.state.changeemail===true || this.state.changeage===true){
    if( this.state.newemail !== this.state.data.email) {
      const tokenn =localStorage.getItem('tokenfromlogin')
      let ura= process.env.URL + "/users/me";
      let data={
            'email' :this.state.newemail || this.data.email,
'display_name':this.state.newdisplay_name || this.data.display_name,
'age':this.state.newage || this.state.data.age,
      }
      fetch(ura,{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Authorization' :'Token'+tokenn
        },
        body:JSON.stringify(data)
      }).then((result) => {
     result.json().then((respp) =>{
    console.warn("respp".respp)
      this.setState({msg:"your details is changed!"});
     })
      })
    }
    else{
     this.setState({msg:"try again!!"});
    }
   }



   //

        }
        else{
          this.setState({msg:"the password is not correct"});
        }
      }
    
    onChangeemail = e => {
      this.setState({
        newemail: e.target.value
      });
      let newemailerror = this.state.newemailError;
      newemailerror =
        !emailRegax.test(e.target.value) ||
        e.target.value.trim() === "" ||
        e.target.value.length > 100 ||
        e.target.value.length < 5 ||
        e.target.value.length === 0
          ? "InvalidEmail!"
          : "";
      this.setState({ newemailError: newemailerror });
      if(newemailerror==="")
      {
        this.setState({changeemail:true})
      }
    };


    onChangephonenumber = e =>{
      this.setState({
        newphonenumber: e.target.value,
      });

      let newphonenumbererror = this.state.newphonenumberError;
      newphonenumbererror =
        !phonenumberRegex.test(e.target.value)||
        e.target.value.trim() === "" ||
        e.target.value.length !== 10 ||
        e.target.value.length === 0
          ? "InvalidPhoneNumber"
          : "";
      this.setState({ newphonenumberError: newphonenumbererror });
      if(newphonenumbererror==="")
      {
        this.setState({changephonenumber:true})
      }
    }
   
    onChangepassword = e => {
      this.setState({
        passwordd: e.target.value
      });
    }
      onChangeage = e => {
        if(e.target.value<=9 || e.target.value >=90)
        {
          this.setState({newageError:" Sorry!! Min age is 10 an Max age is 90"})
        }
        else{
        this.setState({
          newage: e.target.value,
          newageError:"",
          changeage:true
        });
      }

    }
    
    onChangeusername= e=>{
      this.setState({
        newdisplay_name: e.target.value
      });
      let usernameerror = this.state.newusernameError;
      usernameerror =
        e.target.value.length > 16 ||
        e.target.value.length === 0 ||
        e.target.value.trim() === "" ||
        e.target.value.length < 6
          ? "minimum 6charchters And Maxmium 16 charchters are required"
          : "";
      this.setState({ newusernameError: usernameerror });
      if (this.state.newusernameError==="")
      {
        this.setState({changeusername: true})
      }
    }

    onChangegender = e =>{
      this.setState({
        newgender: e.target.value,
        changegender:true,
      });
    }

    cancelEdit =e =>{
      //go to home again
      return (window.location.href = "/account");
    }


    
  

    render() {
      const data=this.state.data;
      console.warn(data);

        var name =this.state.data.display_name || "";
        var e = this.state.data.email || "";
        var aa = this.state.data.age || "";


       return(

         <div style={{paddingBottom:200}} className="editprofileform"> 


         <br></br>
         <br></br>
            <h1> Edit Your Profile</h1>
            <br></br>
           <label className="labels">Email</label>
           <br></br>
           
            <input
            onChange={this.onChangeemail}
            type="text"
            placeholder={e}
            name="newemail"
            className="forminput"
          />
          <div className="errormsg">{this.state.newemailError}</div>
          <br></br>
        
          <label className="labels">Username</label>
           <br></br>
           
            <input
            onChange={this.onChangeusername}
            type="text"
            placeholder={name}
            name="newdisplay_name"
            className="forminput"
          />
          <div className="errormsg">{this.state.newusernameError}</div>
          <br></br>
<label className="labels">Age</label>
          <input
            onChange={this.onChangeage}
            type="number"
            placeholder={aa}
            name="newage"
            className="forminput"
            maxLength="2"
            minLength="1"
            pattern="[0-9]*" 
            
          />
          <div className="errormsg">{this.state.newageError}</div>


<br>
</br>


          <label className="labels">Confirmation Password</label>
          <br></br>

          <input
            onChange={this.onChangepassword}
            type="password"
            placeholder="Enter Your Password To Confirm Edits"
            name="passwordd"
            className="forminput"
            required="required"
          />
          
         

          <br></br>
          <label className="labels">Phone Number</label>
          <br></br>

          <input
            onChange={this.onChangephonenumber}
            type="phonenumber"
            maxLength="10"
            placeholder="Enter phone number after '0'"
            name="newphonenumber"
            pattern="[0-9]*"
            className="forminput"
          />
        <div className="errormsg">{this.state.newphonenumberError}</div>
          <br></br>

          <br></br>



         

          <div className="errormsg">{this.state.msg}</div>
              
          <button className="buttonprem" onClick={this.cancelEdit }>Cancel Edits</button>
   <button className="buttonprem" onClick={this.saveEdit }>Save Edits</button>
          

           </div>        
 );}
       
    
}
export default EditProfile;
//  //#1db954;

