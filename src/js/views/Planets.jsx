import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
const [planets,setPlanets] =useState(JSON.parse(localStorage.getItem("planetsLocal")));
const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};
const {store,actions} = useContext(Context);


    return (
        <div class="container bg-dark mb-3">
            <h1 class="text-light text-center pt-4">Planets</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
            { !planets ?
            "Leyendo datos"
            :
            planets.results.map((item,index) => 
                <div class="col">
                    <div class="card border-dark my-3 mx-2 text-bg-dark">
                        <img alt="" src={"https://starwars-visualguide.com/assets/img/planets/" + (index + 1) + ".jpg"} onError={handleOnErrorImg} />
                        <div class="card-body">
                            <h5 class="card-title"> {item.name} </h5>
                            <p class="card-text">Population: 200000</p>
                            <p class="card-text">Terrain: desert </p>
                            <p class="card-text">Climate: arid </p>
                            <div class="d-flex justify-content-between">
                            <Link to={"/planets/" + item.uid} className="btn btn-secondary">
							    Details
							</Link>
                            <button className="btn btn-danger" onClick={() => {actions.addFavorite(item.name)}}>
                                    <i className="far fa-heart fa-lg"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>  
        </div>
    );
}