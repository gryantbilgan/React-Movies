import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <div className="flex-container">
        <p>Welcome {user}!</p>
        <NavLink className="flex-item" to="/">
          <button className="btn fourth">Movies</button>
        </NavLink>
        <NavLink className="flex-item" to="/actors">
          <button className="btn fourth">Actors</button>
        </NavLink>
    </div>
  );
}
