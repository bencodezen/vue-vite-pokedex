<template>
  <h1>Twitch Pokedex - Updated</h1>
  <input type="text" v-model="filterText" />
  <ul>
    <PokedexCard
      v-for="(pokemon, index) in pokemonStore.filteredList"
      :key="`poke-${index}`"
      :name="pokemon.name"
      :number="pokemon.id"
    />
  </ul>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import PokedexCard from './components/PokedexCard.vue'

const filterText = ref('')

const pokemonStore = reactive({
  list: [],
  filteredList: computed(() =>
    pokemonStore.list.filter(pokemon => pokemon.name.includes(filterText.value))
  )
})

onMounted(async () => {
  const pokeData = await fetch('/.netlify/functions/pokedex').then(response =>
    response.json()
  )

  console.log({ pokeData })

  pokemonStore.list = pokeData
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
