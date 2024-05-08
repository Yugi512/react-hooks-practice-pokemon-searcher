import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemonList, addNewPokemon}) {
  const [searchInput,setSearchInput] = useState("")

  const searchFiltered = pokemonList.filter((pokemons) => {
    if(searchInput === "") return true;
    if(pokemons.toLowerCase().includes(searchInput.toLowerCase())){
      return pokemons
    }
  })



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <br />
      <PokemonCollection pokemonList={searchFiltered}/>
    </Container>
  );
}

export default PokemonPage;
