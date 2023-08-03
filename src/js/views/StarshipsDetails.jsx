import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const StarshipsDetails = () => {
    const [starships, setStarships] = useState();
    const starshipParam = useParams();
    const starshipsid = starshipParam.starshipsid;
    const url = "https://www.swapi.tech/api/starships/" + starshipsid
    const imagenUrl = "https://starwars-visualguide.com/assets/img/starships/" + starshipsid + ".jpg"

    const fetchStarshipsData = async () => {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setStarships(data);
        }
        else { "Error" }
    }


    useEffect(() => {
        fetchStarshipsData();
    }, []);


    return (
        <div className="container bg-dark">
            {!starships ?
                "Leyendo datos"
                :
                <div className="card mb-3  bg-dark text-light">
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img className="img-fluid rounded-start" src={imagenUrl} />
                        </div>
                        <div className="col-md-3">
                            <div className="card-body">
                                <h1>{starships.result.properties.name}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-2">
                            <h5>Name</h5>
                            <p>{starships.result.properties.name}</p>
                        </div>
                        <div class="col-2">
                            <h5>Cargo_capacity</h5>
                            <p>{starships.result.properties.cargo_capacity}</p>
                        </div>
                        <div class="col-2">
                            <h5>Length</h5>
                            <p>{starships.result.properties.length}</p>
                        </div>
                        <div class="col-2">
                            <h5>Consumables</h5>
                            <p>{starships.result.properties.consumables}</p>
                        </div>
                        <div class="col-2">
                            <h5>Passengers</h5>
                            <p>{starships.result.properties.passengers}</p>
                        </div>
                        <div class="col-2">
                            <h5>Max_atmosphering_speed</h5>
                            <p>{starships.result.properties.max_atmosphering_speed}</p>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};
