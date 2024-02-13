import axios from "axios";
import Pokemon from "../models/leaderboard.js";

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

    const detailedPokemons = await Promise.all(detailPromises);

    const data = detailedPokemons.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
      };
    });

    // Send detailed information back to the client
    res.json(data);
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

export const updatePokemonScore = async (req,res) => {
  const { pokemonId } = req.body;

  try {
    const pokemon = await Pokemon.findById(pokemonId);
    pokemon.score += 1;
    await pokemon.save();
    res.json({ message: 'Pokemon score updated successfully' });
  } catch (error) {
    console.error('Error updating Pokemon score', error);
    res.status(500).send('Error updating Pokemon score');
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const leaderboardData = await Pokemon.find().sort({ score: -1 });

    res.json(leaderboardData);
  } catch (error) {
    console.error('Error fetching leaderboard data', error);
    res.status(500).send('Error fetching leaderboard data');
  }
};

// export const updateLeaderboard = async (req, res) => {
//   const { winner, loser } = req.body;

//   if (!leaderboard[winner]) {
//     leaderboard[winner] = 0;
//   } else {
//     leaderboard[winner]++;
//   }

//   res.json({ message: "Leaderboard updated successfully" });
// };

// export const getLeaderboard = async (req, res) => {
//   res.json(leaderboard);
// };
