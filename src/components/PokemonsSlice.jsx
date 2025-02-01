export const fetchPokemons = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Ошибка", error.message);
    return [];
  }
};

export const fetchPokemonsByName = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка", error.message);
  }
};
