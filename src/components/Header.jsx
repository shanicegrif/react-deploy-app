import React from "react";
import Pic from "./src/assets/pursuit-logo.png"

const Header = () => {
    return (
    <div class="header">
        <div class="logo"><img src={Pic} alt="Pursuit logo"/></div>
        <div class="menu">
        <ul>
            <li>
            <a href="https://pursuit.org">Pursuit Home Page</a>
            </li>
            <li>
            <a href="https://github.com/joinpursuit">Pursuit GitHub</a>
            </li>
        </ul>
        </div>
  </div>
    )
}
export default Header;