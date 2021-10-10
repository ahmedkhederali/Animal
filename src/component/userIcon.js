import React from "react";
import { Link } from "react-router-dom";
import "./userIcon.css"
function UserIcon(props) {
    return <div id="cart-icon">
       <Link to="/user">
            <i className="user">
                <img className="img-responsive imf" src="/imgs/person3.jpg"/>
            </i>
            
       </Link>
    </div>
  }export default UserIcon;