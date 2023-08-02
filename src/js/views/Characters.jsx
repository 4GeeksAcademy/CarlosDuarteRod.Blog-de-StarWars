import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Characters = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("usersLocal")));


    return (

        <div className="container bg-dark mb-3">
            <h1 className="text-light text-center pt-4">Characters</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
            { !users ?
            "Leyendo datos"
            :
            users.results.map((item, index) => 
                <div className="col">
                    <div className="card border-dark my-3 mx-2 text-bg-dark">
                        <img alt="" src={"https://starwars-visualguide.com/assets/img/characters/" + (index + 1) + ".jpg"} />
                        <div className="card-body">
                            <h5 className="card-title"> {item.name} </h5>
                            <div className="d-flex justify-content-between">
                            <Link to={"/characters/" + item.uid} className="btn btn-secondary">
							    Details
							</Link>
                                <Link className="btn btn-outline-warning" to="/characters">
                                    <i className="far fa-heart fa-lg"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>  
        </div>
    );
}

