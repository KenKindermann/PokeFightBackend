import axios from "axios";

export const allPokemons = async (req, res) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching Pokémon data");
  }
};

export const pokemonById = async (req, res) => {
  const id = req.params.id;
  try {
    const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    res.json(pokemons.data);
  } catch (error) {
    res.status(500).send("Error fetching Pokémon data");
  }
};
