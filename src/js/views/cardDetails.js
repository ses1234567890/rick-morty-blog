import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const CardDetails = () => {
  const params = useParams();
  const [itemDetails, setItemDetails] = useState({});

  useEffect(()=>{
	getDetails();
  },[]);

  const getDetails = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/" + params.type + "/" + params.id);
		const data = await response.json();
		setItemDetails(data);
  };

  return (
    <div className="container">
      <h1>Details of {itemDetails.name}</h1>
      <img src={itemDetails.image}></img>
      {Object.keys(itemDetails).map((x,i)=>{
        if (typeof itemDetails[x]!="object") return (<p key={i}>{x}: {itemDetails[x]}</p>)
      })}
    </div>
  );
};
