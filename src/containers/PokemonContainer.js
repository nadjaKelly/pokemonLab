import React from "react";
import PokemonSelector from "../components/PokemonSelector";
import PokemonDetail from "../components/PokemonDetail";

class PokemonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      currentPokemon: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount() {
    console.log("didMount running");
    const url = "http://pokeapi.co/api/v2/pokemon/?limit=151";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data.results }));
  }

  handlePokemonSelected(index) {
    const selectedPokemon = this.state.pokemons[index];
    this.setState({ currentPokemon: selectedPokemon });
  }

  render() {
    console.log("render called");
    return (
      <div>
        <h2>PokemonContainer</h2>
        <PokemonSelector
          pokemons={this.state.pokemons}
          onPokemonSelected={this.handlePokemonSelected}
        />
        <PokemonDetail pokemon={this.state.currentPokemon} />
      </div>
    );
  }
}

export default PokemonContainer;
