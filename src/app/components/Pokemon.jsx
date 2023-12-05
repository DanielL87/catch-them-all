"use client";

import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [request, setRequest] = useState("ditto");

  async function fetchPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${request}`);
    if (res.ok) {
      const info = await res.json();
      setPokemon(info);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    fetchPokemon();
  }

  return (
    <div>
      <h3>Pokemon</h3>
      <p>
        Here's a pokemon api:
        <a href="https://pokeapi.co/api/v2/pokemon/ditto">
          https://pokeapi.co/api/v2/pokemon/ditto
        </a>
      </p>
      <p>
        You have to replace the text "ditto" with the name of the pokemon you
        want to search for.
      </p>
      <form onSubmit={handleSearch} action="">
        <input
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="ditto"
        />
        <button type="submit">Search</button>
      </form>
      <div id="pokemon-display">
        <p>{pokemon.name}</p>
        <img
          src={pokemon.sprites?.front_default}
          alt={`${pokemon.name} sprite`}
        />
      </div>
      <hr />
    </div>
  );
}
