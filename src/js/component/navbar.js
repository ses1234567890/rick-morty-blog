import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store} = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Rick & Morty</span>
      </Link>
      <div className="dropdown pe-4">
        <button
          class="btn btn-success dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          {store.favorites.length > 0 ? store.favorites.map((favorite, i)=>{
				return <li key={i} className="dropdown-item">{favorite}</li>
			}) : <li className="dropdown-item">Empty</li>
		  }
        </ul>
      </div>
    </nav>
  );
};
