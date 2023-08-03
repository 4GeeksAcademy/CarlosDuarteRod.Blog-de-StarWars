import React from "react";
import { Link } from "react-router-dom";
import image2 from "../../img/Star_Wars_Logo.svg.png"
import { BtnFavorites } from "../component/BtnFavorites.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-4 mb-1">
				<div><Link className="navbar-brand" to="/"><img height="55" src={image2} />
				</Link>
				</div>
				<div>
					<ul className="nav me-auto mb-2 mb-lg-0">
						<li className="nav-item"><Link className="nav-link link-secondary" to="/characters">Characters</Link> </li>
						<li className="nav-item"><Link className="nav-link link-secondary" to="/planets">Planets</Link> </li>
						<li className="nav-item"><Link className="nav-link link-secondary" to="/starships">Starships</Link> </li>
						<li className="nav-item"><BtnFavorites/></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};


