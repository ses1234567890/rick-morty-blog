import React from "react";
import locationimg from "../../img/locationIMG.png"
import { Link } from "react-router-dom";

export const CardLocation = ({location}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={locationimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{location.name}</h5>
        <p className="card-text">Type: {location.type}</p>
        <p className="card-text">Dimension: {location.dimension}</p>
        <p className="card-text">Residents: {location.residents.length}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-warning text-warning">♥</button>
          <Link to={"card-details/location/" + location.id}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
