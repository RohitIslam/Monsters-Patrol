import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="Card">
      <img
        alt="monsters"
        src={"https://robohash.org/" + props.monster.id + "?set=set2"}
      />
      <h1>{props.monster.name}</h1>
      <h1>{props.monster.email}</h1>
    </div>
  );
};

export default Card;
