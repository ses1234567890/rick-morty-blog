import React from "react";
import episodeimg from "../../img/episodeIMG.webp"
import { Link } from "react-router-dom";

export const CardEpisode = ({episode}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={episodeimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{episode.name}</h5>
        <p className="card-text">Episode: {episode.episode}</p>
        <p className="card-text">Air date: {episode.air_date}</p>
        <p className="card-text">Characters: {episode.characters.length}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-warning text-warning">♥</button>
          <Link to={"card-details/episode/" + episode.id}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>  
      </div>
    </div>
  );
};
