import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Starships = () => {
    const [starships, setStarships] = useState(JSON.parse(localStorage.getItem("starshipsLocal")));
    const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};
    const {store,actions} = useContext(Context);

    return (

        <div className="container bg-dark mb-3">
            <h1 className="text-light text-center pt-4">Starships</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
            { !starships ?
            "Leyendo datos"
            :
            starships.results.map((item) => 
                <div className="col">
                    <div className="card border-dark my-3 mx-2 text-bg-dark">
                        <img alt="" src={"https://starwars-visualguide.com/assets/img/starships/" + (item.uid) + ".jpg"} onError={handleOnErrorImg} />
                        <div className="card-body">
                            <h5 className="card-title"> {item.name} </h5>
                            <div className="d-flex justify-content-between">
                            <Link to={"/starships/" + item.uid} className="btn btn-secondary">
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


