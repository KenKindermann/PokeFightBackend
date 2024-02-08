import axios from "axios";

// Controller to fetch detailed information for all Pokémon
export const fetchAllPokemonDetails = async (req, res) => {
  // Extracting offset and limit from the request query parameters
  // Providing default values if they are not specified
  const limit = req.query.limit || 8; // Default limit to 20 if not specified
  const offset = req.query.offset || 0; // Default offset to 0 if not specified

  try {
    // Initial request to get the list of Pokémon
    const listUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const listResponse = await axios.get(listUrl);
    const pokemonList = listResponse.data.results;

    // Array to hold promises for each detail fetch
    const detailPromises = pokemonList.map((pokemon) =>
      axios.get(pokemon.url).then((response) => response.data)
    );

    // Resolve all promises to get details for each Pokémon
    const detailedPokemons = await Promise.all(detailPromises);

    // Send detailed information back to the client
    res.json({ count: detailedPokemons.length, pokemons: detailedPokemons });
  } catch (error) {
    console.error("Failed to fetch Pokémon details", error);
    res.status(500).send("Error fetching Pokémon details");
  }
};

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
