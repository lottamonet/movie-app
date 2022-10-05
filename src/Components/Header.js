import React from "react";
import { Link, Outlet } from "react-router-dom";



const Header = (props) => {
    return ( 
        <div id="header">
            {props.title1 === "Your " && props.title2 === "Movies" ? (
            <Link to="/" style={{color: "#395c6b"}} id="anchor" ><span id="logo">LOGO</span></Link> ) :  (<Link to="/" style={{color: "#395c6b"}} id="anchor" ><span id="profile-logo">LOGO</span></Link>)}
            {props.title1 === "Your " && props.title2 === "Movies" ? (<p className="header-title" ><span id="title1">{props.title1}</span><span id="title2">{props.title2}</span></p>) : (<p id="title">{props.title}</p>)}
            {props.title1 === "Your " && props.title2 ==="Movies" ? <Link to="/profile" id="profile-anchor" ><button className="your-movies-btn">Profile</button></Link> : null}
            <Outlet />
        </div>
    );
}
export default Header;  