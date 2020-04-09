import React, { Component } from "react";
import "./Recover.css";


//--This to handle only one list to delete and recover :
//--Functions of FETCH,POST,DELETE are commented due to not exist database for the on the server by 'backend'
class Recoverplaylist extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           
          onTable1:false, //to visualize table of deleted playlist.. if data exist set this manually to true..it will change atoumatically when there's real data from server in handling function below
          onHeader1:true, //to visualize that no deleted playlist set this manually to true..it will change atoumatically when there's real data from server in handling function below
                          //set onHeader1 to false when uncommenting FETCH,POST,DELETE functions
            deletedLists: false //array of deleted lists
       
            
        };
    }
     //-----------here fetch data from server to the deleted lists array (deletedLists must be handeled in backend)
    //   componentDidMount() {
    //     const tokenn =localStorage.getItem('tokenfromlogin')
    //     let url= "http://localhost:3000/deleted";
    //     fetch(url,{
    //       method:'GET',
    //       headers:{
    //         'Accept':'application/json',
    //         'Content-TYpe':'application/json',
   //          'Authorization' :'Token'+tokenn
    //       }
    //     }).then((results)=> {
    //      results.json().then((response) =>{
    
    // this.setState({deletedLists:response})
    //      })
    //     })
    //   } 
    

 //post request onclick restore to post data again to the playlist
    restoreData = e => {
      this.setState({onTable1:false ,onHeader1:true})
     //alert("Playlist RESTORED")
      //must return data again to the server by post request (POST REQUEST) to [lists]
      // const tokenn =localStorage.getItem('tokenfromlogin')
    //   let url="http://localhost:3000/playlists"
    //  let datalist=this.state.deletedLists
    //   fetch(url,{
    //   method:'POST',
    //   headers:{
    //      'Accept':'application/json',
    //      'Content-TYpe':'application/json',
    //       'Authorization' :'Token'+tokenn
    //    },
    //    body:JSON.stringify(datalist)
    //  }).then((resultts)=> {
    //   resultts.json().then((respp)=>{
    //    const deletedLists = respp.data;
    //    this.setState({ deletedLists })
    //  console.log("data sent")
     
    //})
  //})
//}
   
     //delete data from deleted list server must tried on real server
     
      
     ///////////////////
     //    const tokenn =localStorage.getItem('tokenfromlogin')
    //     fetch("http://localhost:3000/deleted",{
    //    method:'DELETE',
    //    'Authorization' :'Token'+tokenn
      
      
    //    })
    
    
    //    .then((result)=> {
    //     result.json().then((resp)=> {
    //      const deletedLists = resp.datalist;
    //      this.setState({ deletedLists })
    
    //    console.log("data deleted")

    //     })
    //    })
    //  }
    //////////////////////////////////

    }
    
    renderTableData() {
        //there's a deleted playlist
        
      if(this.state.deletedLists){
        
      return this.state.deletedLists.map((deletedLists, index) => {
         const { date, title, songs } = deletedLists //destructuring
         
         return (
           <div>
          <tr>
          <th>DELETED</th>
          <th>TITLE</th>
          <th>SONGS</th>
          <th>RESTORE</th>
          </tr>
               <td>{date}</td>
               <td>{title}</td>
               <td>{songs}</td>
               <td>
               <button className="restor" onClick={this.restoreData}>
          RESTORE
        </button>
              </td>
               </div>     
            
         )
      })
    }
   }
    
   

   
  




        render() {
          var onTable=false
          var onHeader=false
         
          const deletedLists=this.state.deletedLists
          console.warn(deletedLists)
        // must call handling function here to know the state of onTable and onHeader before entering
        if(this.state.deletedLists) //if data heree got from server using if condition 
        { 
          onTable=true
          onHeader=false
          
     
        }
         else {
           onTable=false
           onHeader=true
           
        }  
          
        
           
    return (
        
      <div style={{paddingBottom:300}} >
        <br></br> <br></br> <br></br> <br></br>
        <header className="heading">
       
           Recover playlists</header> <hr/>

        <header className="statment" >
            {this.state.onHeader || this.state.onHeader1 ? "You haven't deleted any playlists":null}
        </header> 

        <div> 
        
        <header className="table">
        {this.state.onTable || !this.state.onTable1 && !(this.state.onHeader || this.state.onHeader1) ?"Accidentally deleted a playlist?No worries, find the deleted playlist you'de like to recover below and click RESTORE to recover it.":null}
        </header>
        <table id='deletedLists'>
               <tbody>
                  { this.state.onTable || !this.state.onTable1 ? this.renderTableData():<header className="statment" >
                  "You haven't deleted any playlists"
            </header> } 
                  
               </tbody>
            </table>
        
       </div> <br></br> <br></br> <br></br> <br></br>



       
        
  
       

      </div>
    );
    }
}

export default Recoverplaylist;
