import React,{useState} from "react";
import axios from "axios";
const Pokemon = (props) => {
  const [pokemons, setPokemons] = useState([]);

  const pokes = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {setPokemons(response.data.results)});
  };
  console.log(pokemons);
  return (
    <div>
      <button onClick={pokes}>Fetch Pokemons</button>
      {pokemons.map((pokemon, index) => {
        return <div key={index}>{pokemon.name}</div>;
      })}
    </div>
  );
};

export default Pokemon;
