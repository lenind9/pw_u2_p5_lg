<template>
  <!--<PokemonPage/>-->
  <div class="container">
    <div v-if="mostrarJuego">
      <h1>Casino Pokémon</h1>
      <div class="puntaje_intentos">
        <h2>Puntaje: {{ puntaje }}</h2>
        <h2>Intento: {{ intento }}</h2>
      </div>

      <div class="imagenes_texto">
        <ImagenExamen :texto="texto1" :urlImg="url1" />
        <ImagenExamen :texto="texto2" :urlImg="url2" />
        <ImagenExamen :texto="texto3" :urlImg="url3" />
      </div>

      <button @click="jugar">JUGAR</button>
    </div>

    <div v-if="mostrarPerdedor" class="perder">
      <h1>Has utilizado tus 5 intentos</h1>
      <h1>El juego ha termindo, intentalo nuevamente</h1>
      <button @click="reiniciar">Nuevo Juego</button>
    </div>

    <div v-if="mostrarGanador" class="ganar">
      <h1>Puntaje: {{ puntaje }}</h1>
      <h1>Felicitaciones has ganado un premio de $10.000,00</h1>
      <button @click="reiniciar">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
//import PokemonPage from './pages/PokemonPage.vue';
import ImagenExamen from "./components/ImagenExamen.vue";

export default {
  name: "App",
  components: {
    //PokemonPage
    ImagenExamen,
  },
  data() {
    return {
      puntaje: 0,
      intento: 0,
      url1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1: "XXXXXXXXX",
      texto2: "XXXXXXXXX",
      texto3: "XXXXXXXXX",
      mostrarGanador: false,
      mostrarPerdedor: false,
      mostrarJuego: true,
    };
  },
  methods: {
    async jugar() {
      // instancia 1
      const data1 = await this.consumirAPI();
      this.texto1 = data1.answer;
      this.url1 = data1.image;

      // instancia 2
      const data2 = await this.consumirAPI();
      this.texto2 = data2.answer;
      this.url2 = data2.image;

      // instancia 1
      const data3 = await this.consumirAPI();
      this.texto3 = data3.answer;
      this.url3 = data3.image;

      this.evaluarResultado();
    },
    async consumirAPI() {
      return await fetch("https://yesno.wtf/api").then((res) => res.json());
    },
    evaluarResultado() {
      this.intento++;
      if (
        this.texto1 === "yes" &&
        this.texto2 === "yes" &&
        this.texto3 === "yes"
      ) {
        this.puntaje += 5;
      } else if (
        (this.texto1 === "yes" && this.texto2 === "yes") ||
        (this.texto2 === "yes" && this.texto3 === "yes") ||
        (this.texto1 === "yes" && this.texto3 === "yes")
      ) {
        this.puntaje += 2;
      } else if (
        this.texto1 === "yes" ||
        this.texto2 === "yes" ||
        this.texto3 === "yes"
      ) {
        this.puntaje += 1;
      }

      if (this.puntaje >= 10) {
        this.mostrarGanador = true;
        this.mostrarPerdedor = false;
        this.mostrarJuego = false;
      }

      if (this.intento === 5) {
        this.mostrarPerdedor = true;
        this.mostrarGanador = false;
        this.mostrarJuego = false;
      }
    },
    reiniciar() {
      this.puntaje = 0;
      this.intento = 0;
      this.url1 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1 = "XXXXXXXXX";
      this.texto2 = "XXXXXXXXX";
      this.texto3 = "XXXXXXXXX";
      this.mostrarGanador = false;
      this.mostrarPerdedor = false;
      this.mostrarJuego = true;
    },
  },
};
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

.container {
  display: grid;
  justify-content: center;
  align-content: center;
}
.puntaje_intentos{
  display: grid;
  grid-template-columns: repeat(2, 250px);
  margin-left: 18%;
}
.imagenes_texto {
  display: grid;
  grid-template-columns: repeat(3, 250px);
  margin-bottom: 30px;
}
button {
  width: 175px;
  height: 40px;
  padding-top: 10px;
  padding-bottom: 30px;
  border: 2px solid black;
  cursor: pointer;
  font-size: 20px;
}
button:hover {
  background-color: #919191;
  color: white;
}
.perder {
  color: red;
}
.ganar {
  color: blue;
}
.perder h1, .ganar h1{
  margin-bottom: 50px;
}
</style>
