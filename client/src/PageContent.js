import React, { Component } from "react";
import HomeContent from "./Components/HomeContent";
import Search from "./Components/Search";
import Library from "./Components/Library";
import Podcasts from "./Components/Podcasts";
import Artists from "./Components/Artists";
import Albums from "./Components/Albums";
import LikedSongs from "./Components/LikedSongs";
import Account from "./Components/Account";
import Login from "./Components/Login";
import Loginform from "./Components/loginForm";
import Sidebar from "./Components/Sidebar";
import Img from "./loginlogo";
import Forgot from "./Components/page";
import SignupForm from "./Components/SignupForm";
import Error from "./Components/Error";
//import Amer from "./Components/Amer Mounib";
import PremiumCreddd from "./PremiumCreddd";
import Prem from "./Prem";
import EditProfile from "./Components/EditProfile";
import Accountoverview from "./Components/Accountoverview";
import AcountSideBar from "./Components/AcountSideBar";
import Recover from "./Components/Recover";
import Navbar from "./Components/Navbar";
import ArtistPage from "./Components/ArtistPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class PageContent extends Component {
  render() {

    this.props.setShowSideBar(true)
    this.props.setShowPageContent(true)
    this.props.setShowPageContentt(true)
    this.props.setShowAcountSideBar(false)
    
    this.props.setPremiumContentHeight("0")


    if (window.location.href === process.env.REACT_APP_CLIENT_URL+ "/Home")
      return (
        <div>
          <HomeContent />
        </div>
      );
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/login")
    {     
      return <Login />;
    }
    else if (window.location.href ===process.env.REACT_APP_CLIENT_URL +  "/search")
      return <Search />;
    else if (
      window.location.href === process.env.REACT_APP_CLIENT_URL +  "/collection/playlists"
    )
      return (
        <div>
          <Library />
        </div>
      );
    else if (
      window.location.href === process.env.REACT_APP_CLIENT_URL + "/collection/podcasts"
    )
      return <Podcasts />;
    else if (
      window.location.href === process.env.REACT_APP_CLIENT_URL + "/collection/artists"
    )
      return <Artists />;
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/collection/albums")
      return <Albums />;
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/collection/tracks")
      return <LikedSongs />;
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/account")
 {       this.props.setShowSideBar(false)
        
        return (      
          <div style={{ background: "Black", paddingRight: "2000px" }}>
          <Navbar />
          </div>
        );
      }
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/"){
      this.props.setShowSideBar(false)
      this.props.setShowAcountSideBar(false)

      return (
        <div style={{ background: "white", paddingRight: "200px" }}>
          <Img />
          <Loginform />
        </div>
      );
    }
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/page"){
    this.props.setShowSideBar(false);
      return (
        <div style={{ background: "white", paddingRight: "120px" }}>
          <Img />
          <Forgot />
        </div>
      );}
/*     else if (window.location.href === "http://localhost:3000/amer-mounib")
      return <Amer />; */
      
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/amr-diab")
      return <ArtistPage />;
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL +  "/Home")
      return <Sidebar />;
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/signup")
    {        this.props.setShowSideBar(false)
      console.log(window.location.href)
      console.log(process.env.REACT_APP_CLIENT_URL)

      
      return (      
        <div style={{ background: "white", paddingRight: "200px" }}>
          <Img />
          <SignupForm />
        </div>
      );
    }
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL +  "/amr-diab/overview")
      return (
        <div>
          <ArtistPage />
        </div>
      );
    else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/amr-diab/about")
      return (
        <div>
          <ArtistPage />
        </div>
      );
    else if (
      window.location.href === process.env.REACT_APP_CLIENT_URL + "/amr-diab/related-artists"
    )
      return <ArtistPage />;
    else if (
      window.location.href === process.env.REACT_APP_CLIENT_URL + "/Premium/Credentials"
    ) {
      this.props.setShowSideBar(false);
      this.props.setShowPageContent(false);
      this.props.setPremiumContentHeight("100vh");
      return <h></h>; //<div style={{ height: 0, width:0}} />;
    } else if (window.location.href === process.env.REACT_APP_CLIENT_URL + "/Premium") {
      this.props.setShowSideBar(false);
      this.props.setShowPageContent(false);
      this.props.setPremiumContentHeight("0");
      return <h></h>; //<div style={{ height: 0, width:0}} />;

    }
    else if(window.location.href === process.env.REACT_APP_CLIENT_URL + "/EditProfile" ){
      this.props.setShowSideBar(false);
      //this.props.setShowAcountSideBar(true)
      return( <div style={{ background: "white", paddingRight: "100px" , marginTop:"120px" }}><EditProfile /></div> );
    }
    else if(window.location.href === process.env.REACT_APP_CLIENT_URL + "/AccountoverView" ){
      this.props.setShowSideBar(false);
      return ( <div style={{ background: "white", paddingRight: "100px" , marginTop:"120px" }}> <Accountoverview /></div>);
    }
    else if(window.location.href === process.env.REACT_APP_CLIENT_URL + "/Recover" ){
      this.props.setShowSideBar(false);
      return ( <div style={{ background: "white", paddingRight: "100px" , marginTop:"120px"}}> <Recover /></div>);
    }


    
    
    else {
      return <Error />;
    }
  }
}

export default PageContent;

/** 
commented old code for refernce
if (window.location.href === "http://localhost:3000/Home")
      return (
        <div>
          <HomeContent />
        </div>
      );
    else if (window.location.href === "http://localhost:3000/login")
    {     
      return <Login />;
    }
    else if (window.location.href === "http://localhost:3000/search")
      return <Search />;
    else if (
      window.location.href === "http://localhost:3000/collection/playlists"
    )
      return (
        <div>
          <Library />
        </div>
      );
    else if (
      window.location.href === "http://localhost:3000/collection/podcasts"
    )
      return <Podcasts />;
    else if (
      window.location.href === "http://localhost:3000/collection/artists"
    )
      return <Artists />;
    else if (window.location.href === "http://localhost:3000/collection/albums")
      return <Albums />;
    else if (window.location.href === "http://localhost:3000/collection/tracks")
      return <LikedSongs />;
    else if (window.location.href === "http://localhost:3000/account")
 {       this.props.setShowSideBar(false)
        
        return (      
          <div style={{ background: "Black", paddingRight: "2000px" }}>
          <Navbar />
          </div>
        );
      }
    else if (window.location.href === "http://localhost:3000/"){
      this.props.setShowSideBar(false)
      this.props.setShowAcountSideBar(false)
      return (
        <div style={{ background: "white", paddingRight: "200px" }}>
          <Img />
          <Loginform />
        </div>
      );
    }
    else if (window.location.href === "http://localhost:3000/page"){
    this.props.setShowSideBar(false);
      return (
        <div style={{ background: "white", paddingRight: "120px" }}>
          <Img />
          <Forgot />
        </div>
      );}
/*     else if (window.location.href === "http://localhost:3000/amer-mounib")
      return <Amer />; //this part was commented
      
    else if (window.location.href === "http://localhost:3000/amr-diab")
      return <ArtistPage />;
    else if (window.location.href === "http://localhost:3000/Home")
      return <Sidebar />;
    else if (window.location.href === "http://localhost:3000/signup")
    {        this.props.setShowSideBar(false)
      
      return (      
        <div style={{ background: "white", paddingRight: "200px" }}>
          <Img />
          <SignupForm />
        </div>
      );
    }
    else if (window.location.href === "http://localhost:3000/amr-diab/overview")
      return (
        <div>
          <ArtistPage />
        </div>
      );
    else if (window.location.href === "http://localhost:3000/amr-diab/about")
      return (
        <div>
          <ArtistPage />
        </div>
      );
    else if (
      window.location.href === "http://localhost:3000/amr-diab/related-artists"
    )
      return <ArtistPage />;
    else if (
      window.location.href === "http://localhost:3000/Premium/Credentials"
    ) {
      this.props.setShowSideBar(false);
      this.props.setShowPageContent(false);
      this.props.setPremiumContentHeight("100vh");
      return <h></h>; //<div style={{ height: 0, width:0}} />;
    } else if (window.location.href === "http://localhost:3000/Premium") {
      this.props.setShowSideBar(false);
      this.props.setShowPageContent(false);
      this.props.setPremiumContentHeight("0");
      return <h></h>; //<div style={{ height: 0, width:0}} />;

    }
    else if(window.location.href === "http://localhost:3000/EditProfile" ){
      this.props.setShowSideBar(false);
      //this.props.setShowAcountSideBar(true)
      return( <div style={{ background: "white", paddingRight: "100px" , marginTop:"120px" }}><EditProfile /></div> );
    }
    else if(window.location.href === "http://localhost:3000/AccountoverView" ){
      this.props.setShowSideBar(false);
      return ( <div style={{ background: "white", paddingRight: "100px" , marginTop:"120px" }}> <Accountoverview /></div>);
    }
    else if(window.location.href === "http://localhost:3000/Recover" ){
      this.props.setShowSideBar(false);
      return ( <div style={{ background: "white", paddingRight: "100px" , marginTop:"120px"}}> <Recover /></div>);
    }


    
    
    else {
      return <Error />;
    }
  }
}

export default PageContent;
*/