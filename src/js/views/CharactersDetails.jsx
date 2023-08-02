import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const CharactersDetails = () => {
    const [person, setPerson] = useState();
    const param = useParams();
    const charactersid = param.charactersid;
    const url = "https://www.swapi.tech/api/people/" + charactersid
    const imagenUrl = "https://starwars-visualguide.com/assets/img/characters/" + charactersid + ".jpg"

    const fetchCharacterData = async () => {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setPerson(data);
        }
        else { "Error" }
    }


    useEffect(() => {
        fetchCharacterData();
    },[]);


    return (
        <div className="container bg-dark">
            { !person ?
            "Leyendo datos"
            :
            <div className="card mb-3  bg-dark text-light">
                <div className="row g-0"><div className="col-md-7 col-lg-6 col-xl-5">
                    <img className="img-fluid rounded-start" src={imagenUrl} />
                </div>
                    <div className="col-md-5 col-lg-6 col-xl-7">
                        <div className="card-body">
                            <h1>{person.result.properties.name}</h1>
                            <p> </p>
                            <p><strong>Height: </strong>{person.result.properties.height}</p>
                            <p><strong>Mass: </strong>{person.result.properties.mass}</p>
                            <p><strong>Hair color: </strong>{person.result.properties.hair_color}</p>
                            <p><strong>Skin color: </strong>{person.result.properties.skin_color}</p>
                            <p><strong>Eye color: </strong>{person.result.properties.eye_color}</p>
                            <p><strong>Birth year: </strong>{person.result.properties.birth_year}</p>
                            <p><strong>Gender: </strong>{person.result.properties.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
            };
        </div>
    );
};