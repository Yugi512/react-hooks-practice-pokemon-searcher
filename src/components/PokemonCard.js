import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [isClicked, setClicked] = useState(true)

  const {id,name,hp,sprites} = pokemon;
  const {front,back} = sprites;
  
  function handleImageClick(){
    setClicked(!isClicked)
  }

  return (
    <Card>
      <div>
        <div className="image" id={id}>
          <img src={isClicked ? front : back}  alt="oh no!" onClick={handleImageClick} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
