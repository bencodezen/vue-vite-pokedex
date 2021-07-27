const fetch = require('node-fetch')

exports.handler = async function () {
  const pokeApiData = await fetch('https://pokeapi.co/api/v2/pokedex/2/').then(
    response => response.json()
  )

  const pokeData = pokeApiData.pokemon_entries
    ? pokeApiData.pokemon_entries.map(pokemon => {
        const pokemonName =
          pokemon.pokemon_species.name[0].toUpperCase() +
          pokemon.pokemon_species.name.substring(1)

        return {
          id: pokemon.entry_number,
          name: pokemonName
        }
      })
    : []

  return {
    statusCode: 200,
    body: JSON.stringify(pokeData)
  }
}
