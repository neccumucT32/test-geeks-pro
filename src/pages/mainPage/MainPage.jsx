import { useEffect, useState } from "react";
import {
  fetchPokemons,
  fetchPokemonsByName,
} from "../../components/PokemonsSlice";
import PokemonCards from "../../components/PokemonCards";

const MainPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addPokemons = async () => {
    setLoading(true);
    try {
      const allPokemons = await fetchPokemons();
      const randomPokemons = allPokemons
        .sort(() => Math.random() - 0.5)
        .slice(0, 20)
        .map((pokemons) => pokemons.name);

      const data = await Promise.all(randomPokemons.map(fetchPokemonsByName));

      setPokemons(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    addPokemons();
  }, []);

  console.log(pokemons);

  return (
    <div>
      <h1>Покемоны</h1>
      <button onClick={addPokemons} disabled={loading}>
        {loading ? "Загрузка" : "Обновить покемонов"}
      </button>

      {error && <p style={{ color: "red" }}>Ошибка:{error}</p>}

      <div className="footer_list">
        <div className="pokemonList">
          {pokemons.length > 0
            ? pokemons.map((pokemon) => (
                <PokemonCards key={pokemon.name} pokemonInfo={pokemon} />
              ))
            : !loading && <p>Не удалось загрузить покемонов</p>}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
