import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const CardList = props => {
  return (
    <div className="CardList">
      {props.monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
