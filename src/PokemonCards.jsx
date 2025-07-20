const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="card vertical">
      <figure>
        <img
          className="pokemon-img"
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      </figure>
      <h1 className="font-bold capitalize">{pokemonData.name}</h1>
      <div className="category">
        <p>
          {pokemonData.types.map((currType) => currType.type.name).join(", ")}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 font-semibold space-x-2">
        <p>
          <span>Height:</span>
          {pokemonData.height}
        </p>
        <p>
          <span>Weight:</span>
          {pokemonData.weight}
        </p>
        <p>
          <span>Speed:</span>
          {pokemonData.stats[5].base_stat}
        </p>
      </div>
    </li>
  );
};

export default PokemonCards;
