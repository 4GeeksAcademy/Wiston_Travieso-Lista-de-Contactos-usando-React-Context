import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Card from "../component/Card";
import Info from "../component/Info";

export const Home = () => (
	<div className="text-center mt-5">
		
		<Card/>
		<Info/>
		<Link to="/nuevo-contacto">
		<button className="btn btn-success">Nuevo Contacto</button>
		</Link>
		<Link to="/editar-contacto">
		<button className="btn btn-success">Editar Contacto</button>
		</Link>
		
	</div>
);
