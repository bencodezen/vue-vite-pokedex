<template>
  <h1>Twitch Pokedex</h1>
  <input type="text" v-model="filterText" />
  <ul>
    <li
      v-for="(pokemon, index) in pokemonStore.filteredList"
      :key="`poke-${index}`"
    >
      #{{ pokemon.entry_number }} - {{ pokemon.pokemon_species.name }}
    </li>
  </ul>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'

const filterText = ref('')

const pokemonStore = reactive({
  list: [],
  filteredList: computed(() =>
    pokemonStore.list.filter(pokemon =>
      pokemon.pokemon_species.name.includes(filterText.value)
    )
  )
})

onMounted(async () => {
  const pokeData = await fetch('https://pokeapi.co/api/v2/pokedex/2/').then(
    response => response.json()
  )

  pokemonStore.list = pokeData.pokemon_entries
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
