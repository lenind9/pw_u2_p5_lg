<template>
  <h1 v-if="!pokemonGanador">
    Espere, por favor, estamos cargando el juego.....
  </h1>
  <div v-else>
    <h1>Adivina el Pokemón</h1>
    <PokemonImagen
      :pokemonId="pokemonGanador.id"
      :showPokemon="mostrarPokemon"
    />
    <PokemonOpciones @selecciono="revisarClick($event)" :pokemon="pokemonArr" />
  </div>

  <div v-if="mostrarPerdedor" class="pierde">
    <h1>PERDIÓ</h1>
    <button @click="reiniciar">Juego Nuevo</button>
  </div>

  <div v-if="mostrarGanador" class="gana">
    <h1>GANÓ</h1>
    <button @click="reiniciar">Juego Nuevo</button>
  </div>
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
  beforeCreate() {
    console.log("Antes de crear el componente");
  },
  created() {
    console.log("Se creo el componente");
  },
  beforeMount() {
    console.log("Antes de que se monte el componente en la pagina");
  },
  mounted() {
    console.log("Se monto el componente PokemonPage");
    this.cargaInicial();
  },
  beforeUpdate() {
    console.log("Antes de que se actualice el componente");
  },
  updated() {
    console.log("Se actualiza el componente");
  },
  beforeDestroy() {
    console.log("Antes de destruir");
  },
  destroyed() {
    console.log("Destruido");
  },
  methods: {
    async cargaInicial() {
      const arregloPokemon = await obtenerPokemonFachada();
      console.log("Desde componente");
      console.log(arregloPokemon);
      this.pokemonArr = arregloPokemon;

      const indiceGanador = Math.floor(Math.random() * 4);
      this.pokemonGanador = this.pokemonArr[indiceGanador];
    },
    revisarClick(datoRecibido) {
      console.log("Dio click y comunico desde el padre");
      console.log(this.pokemonGanador.id);
      console.log(datoRecibido);

      if (this.pokemonGanador.id === datoRecibido) {
        this.mostrarGanador = true;
        this.mostrarPerdedor = false;
      } else {
        this.mostrarPerdedor = true;
        this.mostrarGanador = false;
      }
      this.mostrarPokemon = true;
    },
    reiniciar() {
      this.mostrarPokemon = false;
      this.mostrarPerdedor = false;
      this.mostrarGanador = false;
      this.cargaInicial();
    },
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mostrarPokemon: false,
      mostrarPerdedor: false,
      mostrarGanador: false,
    };
  },
};
</script>

<style>
.gana{
  color: blue;
}
.pierde{
  color: red;
}
</style>