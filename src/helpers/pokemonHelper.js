const obtenerIdPokemon = () => {
    //const pokemonArr = Array.from(Array(600));
    const pokemon1 = obtenerAleatorio(1, 600);
    const pokemon2 = obtenerAleatorio(1, 600);
    const pokemon3 = obtenerAleatorio(1, 600);
    const pokemon4 = obtenerAleatorio(1, 600);
    const pokemonArr = [pokemon1, pokemon2, pokemon3, pokemon4];
    console.log(pokemonArr);
}

const obtenerNombresPokemon = (arreglo) =>{
    const nombre1 = consumirAPI(arreglo[0]);
    const nombre2 = consumirAPI(arreglo[1]);
    const nombre3 = consumirAPI(arreglo[2]);
    const nombre4 = consumirAPI(arreglo[3]);
}

function consumirAPI(id){
    return "nombre"
}

const obtenerIdPokemonFachada = () => {
    obtenerIdPokemon()
}

function obtenerAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default obtenerIdPokemonFachada