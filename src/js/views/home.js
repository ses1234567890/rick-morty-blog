import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter";
import { CardLocation } from "../component/cardLocation";
import { CardEpisode } from "../component/cardEpisode";

export const Home = () => {
  const {store, actions} = useContext(Context);
	return (
    <div className="text-center mt-5">
      <div className="container">
        <h1>Characters</h1>
        <div className="row">
          {store.characters.map((character)=>{
            return (
              <CardCharacter key={character.id} character={character} />
            );
          })};
        </div>
        <h1>Locations</h1>
        <div className="row">
          {store.locations.map((location)=>{
            return (
              <CardLocation key={location.id} location={location} />
            )
          })};
        </div>
        <h1>Episodes</h1>
        <div className="row">
          {store.episodes.map((episode)=>{
            return (
              <CardEpisode key={episode.id} episode={episode} />
            )
          })};
        </div>
      </div>
    </div>
  );
};
