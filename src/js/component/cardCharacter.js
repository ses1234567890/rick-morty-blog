import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardCharacter = ({character}) => {
  const {store, actions} = useContext(Context);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={character.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">Status: {character.status}</p>
        <p className="card-text">Species: {character.species}</p>
        <p className="card-text">Gender: {character.gender}</p>
        <div className="d-flex justify-content-between">
          <button className={store.favorites.includes(character.name) ? "btn btn-warning text-white" : "btn btn-outline-warning text-warning"} onClick={()=>actions.setFavorites(character.name)}>♥</button>
          <Link to={"card-details/character/" + character.id}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
