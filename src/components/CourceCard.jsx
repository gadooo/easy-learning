import React from "react";
import { Cources } from "../mokData/CourceData";
import "./CourceCard.css";

function CourceCard() {
  return (
    <div className="card-container">
      {Cources.map((cource) => (
        <div key={cource.id} className="card-body">
          <h2 className="card-title">{cource.title}</h2>
          <p className="card-discription">{cource.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CourceCard;
