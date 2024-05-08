import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemonsList, setPokemonList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((r) =>  r.json())
    .then((pokemon) => setPokemonList(pokemon))
  },[])

  function addNewPokemon(newPokemon){
    setPokemonList([...pokemonsList,newPokemon])
  }

  return (
    <div className="App">
      <PokemonPage pokemonList={pokemonsList} addNewPokemon={addNewPokemon}/>
    </div>
  );
}

export default App;
