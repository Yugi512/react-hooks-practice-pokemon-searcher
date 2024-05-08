import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {

  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    }
  })

  function handleChange(e){
     setNewPokemon({
      ...newPokemon,
      [e.target.id]: [e.target.value]
    })
  }

  function handleImage(e){
    setNewPokemon({
      ...newPokemon,
      sprites: {
        ...newPokemon.sprites,
        [e.target.id]: [e.target.value]
      }
    })
  }


  function handleSubmit(){
    fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
       body: JSON.stringify(newPokemon),})
       .then((r) => r.json())
       .then((pokemon) => addNewPokemon(pokemon))
  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name"name="name" id="name" value={newPokemon.name} onChange={(e) => handleChange(e)} />
          <Form.Input fluid label="hp" placeholder="hp" name ="hp" id="hp" value={newPokemon.hp} onChange={(e) => handleChange(e)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            id="front"
            value={[newPokemon.sprites.front]}
            onChange={(e) => handleImage(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            id="back"
            value={[newPokemon.sprites.back]}
            onChange={(e) => handleImage(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
