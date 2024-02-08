import axios from "axios";

export const getAllPokemons = async (req, res) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch Pokémon", error);
    res.status(500).send("Error fetching Pokémon data");
  }
};
