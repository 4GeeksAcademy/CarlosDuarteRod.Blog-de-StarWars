import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const PlanetsDetails = () => {
    const [planet, setPlanet] = useState();
    const planetParam = useParams();
    const planetsid = planetParam.planetsid;
    const url = "https://www.swapi.tech/api/planets/" + planetsid
    const imagenUrl = "https://starwars-visualguide.com/assets/img/planets/" + planetsid + ".jpg"

    const fetchPlanetData = async () => {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setPlanet(data);
        }
        else { "Error" }
    }


    useEffect(() => {
        fetchPlanetData();
    }, []);


    return (
        <div className="container bg-dark">
            {!planet ?
                "Leyendo datos"
                :
                <div className="card mb-3  bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img className="img-fluid rounded-start" src={imagenUrl} />
                        </div>
                        <div className="col-md-3">
                            <div className="card-body">
                                <h1>{planet.result.properties.name}</h1>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-2">
                            <h5>Name</h5>
                            <p>{planet.result.properties.name}</p>
                        </div>
                        <div class="col-2">
                            <h5>Population</h5>
                            <p>{planet.result.properties.population}</p>
                        </div>
                        <div class="col-2">
                            <h5>Terrain</h5>
                            <p>{planet.result.properties.terrain}</p>
                        </div>
                        <div class="col-2">
                            <h5>Climate</h5>
                            <p>{planet.result.properties.cliamte}</p>
                        </div>
                        <div class="col-2">
                            <h5>Diameter</h5>
                            <p>{planet.result.properties.diameter}</p>
                        </div>
                        <div class="col-2">
                            <h5>Rotation Period</h5>
                            <p>{planet.result.properties.rotation_period}</p>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};
