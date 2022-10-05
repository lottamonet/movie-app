import React from "react";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import { Outlet, Link } from "react-router-dom";

const style = {
    footer: {
        height: "639px"
    },
    footerInfoSec: {
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        marginLeft: "1em"
    },
    logo: {
        fontSize: "40px",
        fontWeight: "700",
        color: "#d4cb92"
    },
    phone: {
        fontSize: "20px",
        color: "#80afed",
        fontFamily: "Public Sans, sans-serif",
        fontWeight: "400"
    },
     email: {
        fontSize: "16px",
        color: "#80afed",
        fontFamily: "Public Sans, sans-serif",
        fontWeight: "400"
    },
    menu: {
        fontSize: "18px",
        color: "#d4cb92",
        fontWeight: "400"
    },
    link: {
        fontSize: "16px",
        color: "#80afed",
        fontFamily: "Public Sans, sans-serif",
        fontWeight: "400"
    },
    socials: {
        display: "flex",
        borderTop: "1px rgba(230, 225, 197, 0.1) solid",
        marginLeft: "1em",
        marginRight: "1em"
    },
    socialsMargin: {
        marginLeft: "1em",
        marginTop: "1em"
    }

};


const Footer = (props) => {
    let fbLink = 'https://facebook.com';
    let twitterLink = 'https://twitter.com';
    let instaLink = 'https://instagram.com';
    return ( 
        <div id="footer" style={style.footer}>
            <div id="info-footer-section" style={style.footerInfoSec}>
                <span id="footer-logo" style={style.logo}>LOGO</span>
                <p id="phone-num" style={style.phone}>+1 (245) 678-9012</p>
                <p id="footer-email" style={style.email}>email@support.com</p>
                <span id="menu" style={style.menu}>Menu</span>
                {props.title === 'Your Movies' ? (
                <Link to="/profile" style={style.link} className="footer-link">Profile</Link> ) : (
                <Link to="/" style={style.link} className="footer-link">Your Movies</Link> ) }
                
                
            </div>
            <div id="socials-footer-section" style={style.socials}>
                <a href={fbLink} target="_blank" style={style.socialsMargin} id="fb"><img src={facebook} /></a>
                <a href={twitterLink} target="_blank" style={style.socialsMargin} id="twitter"><img src={twitter} /></a>
                <a href={instaLink} target="_blank" style={style.socialsMargin} id="insta"><img src={instagram} /></a>
            </div>
            <Outlet />
        </div>
    );
}
export default Footer;