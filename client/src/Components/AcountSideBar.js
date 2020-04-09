import React from "react";
import  "./AcountSideBar.css";

class AcountSideBar extends React.Component {
render(){
    return(
    <div class="side">
        
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Account Info</h3>
            </div>

            <ul class="list-unstyled components">


            <img
                className="logo"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                alt="logo"
                width="auto"
                height="40"
                />
                
                <li>
                    <a href="/AccountoverView" className="buttons">Account Overview</a>
                </li>
                <li>
                    <a href="/EditProfile"className="buttons">Edit Profile</a>
                </li>
                <li>
                    <a href="/Recover" className="buttons">Recover Playlist</a>
                </li>
                <li>
                    <a href="/Home" className="buttons">Change Password</a>
                </li>
                <li>
                    <a href="/Home" className="buttons">Privacy Setting</a>
                </li>
                <li>
                    <a href="/Home" className="buttons">Recipits</a>
                </li>
                <li>
                    <a href="/Home"className="buttons">Apps</a>
                </li>
                <li>
                    <a href="/Home"className="buttons">Notifications Setting</a>
                </li>
                <li>
                    <a href="/Home"className="buttons">Redeem</a>
                </li>
            </ul>

        </nav>
        

        
    </div>
    );
    }
}


export default AcountSideBar;