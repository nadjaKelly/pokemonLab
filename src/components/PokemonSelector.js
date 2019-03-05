import React from "react";
import { isUndefined } from "util";

const PokemonSelector = props => {
  const options = props.pokemons.map((pokemon, index) => {
    return (
      <option value={index} key={index}>
        {pokemon.name}
      </option>
    );
  });

  function handleChange(e) {
    props.onPokemonSelected(e.target.value);
  }

  return (
    <select
      id="pokemon-selector"
      onChange={handleChange}
      defaultValue="default"
    >
      <option disabled value="default">
        Choose a Pokemon...
      </option>
      {options}
    </select>
  );
};

export default PokemonSelector;
