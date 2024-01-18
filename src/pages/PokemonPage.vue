<template>
  <h1>Adivina el Pokemón</h1>
  <PokemonImagen :pokemonId="2" :showPokemon="true" />
  <PokemonOpciones />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import obtenerPokemonFachada from "../helpers/pokemonHelper";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  mounted() {
    console.log("Se monto el componente PokemonPage");
    this.cargaInicial();
  },
  methods: {
    async cargaInicial() {
      const arregloPokemon = await obtenerPokemonFachada();
      console.log("Desde componente");
      console.log(arregloPokemon);
    },
  },
};
</script>

<style>
</style>