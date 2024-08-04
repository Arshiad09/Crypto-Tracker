import React from "react";
import "./style.css"

// import coin from "./assests/coin.jpeg"
function Header() {
  return (
      <div className="header"> Header
      {/* <img src="coin"></img> */}
      <ul>
        <li>HOME</li>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>BLOG</li>
      </ul>
      <div className="right-nav">
        <select>
          <option value="usd">USD</option>
          <option value="eur">USD</option>
          <option value="inr">USD</option>
        </select>
      </div>
      </div>
  );
}

export default Header;
