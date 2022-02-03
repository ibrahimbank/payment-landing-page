import React from "react";
import Avatar from "../images/avatar.jpg";

function Navbar() {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li>TRIPS</li>
        <li>RECENTLY VIEW</li>
        <li>BOOKINGS</li>
      </ul>
      <img src={Avatar} alt="profile" className="nav__img" />
    </div>
  );
}

export default Navbar;
