import React from "react";

const Button = (props) => {
    return ( 
        <div className="button">
            <button className="dynamic-btn">{props.name}</button>
        </div>
    );
}
export default Button;