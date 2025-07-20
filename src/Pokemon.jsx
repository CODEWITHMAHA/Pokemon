import { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

const Pokemon = () => {
    const [pokemon,setPokemon] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokemonData = data.results.map(async(currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data
      });
      
      const detailedResponse =await Promise.all(detailedPokemonData)
      setPokemon(detailedResponse);
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(error)
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  if(loading){
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
  }

   if(error){
    return(
        <div>
            <h1>{error.message}</h1>
        </div>
    )
  }

  return (
    <div className="custom-container flex flex-col justify-center items-center">
      <section>
        <header>
            <h1 className="center heading">Let's Catch Pokemon</h1>
        </header>
      </section>
      <div>
        <ul className="grid mt-10">
            {
                pokemon.map((currPokemon)=>(
                    <PokemonCards key={currPokemon.id} pokemonData={currPokemon}/>
                ))
            }
        </ul>
      </div>
      
    </div>
  );
};

export default Pokemon;
