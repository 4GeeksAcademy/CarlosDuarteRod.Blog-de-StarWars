import React,{useState} from "react";
import imagen1 from "../../img/star-wars-collage.jpg"
import { Link } from "react-router-dom";

export const Planets = () => {
const [planets,setPlanets] =useState(JSON.parse(localStorage.getItem("planetsLocal")));

    return (

        <div class="container bg-dark mb-3">
            <h1 class="text-light text-center pt-4">Characters</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
            { !planets ?
            "Leyendo datos"
            :
            planets.results.map((item) => 
                <div class="col">
                    <div class="card border-dark my-3 mx-2 text-bg-dark">
                        <img alt="" src={imagen1} />
                        <div class="card-body">
                            <h5 class="card-title"> {item.name} </h5>
                            <p class="card-text">Population: 200000</p>
                            <p class="card-text">Terrain: desert </p>
                            <p class="card-text">Climate: arid </p>
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-secondary" href="/characters/1">Details</a>
                                <a class="btn btn-outline-warning" href="/characters">
                                    <i class="far fa-heart fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>  
        </div>
    );
}