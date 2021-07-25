import React, {useState, useEffect} from "react";
const Pokemon = (props) => {
  const [pokemons, setPokemons] = useState([]);
 
  const pokes= () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json())
      .then((response) => setPokemons(response.results));
  };

  return (

    <div>
        <button onClick={pokes}>Fetch Pokemons</button>
      {
        pokemons.map((pokemon, index) => {
          return <div key={index}>{pokemon.name}</div>;
        })
        }
    </div>
  );
};

export default Pokemon;
