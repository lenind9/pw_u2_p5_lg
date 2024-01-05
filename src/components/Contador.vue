<template>
  <h2>{{ titulo }}</h2>
  <p>{{counter}} <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
  <button @click="restarUno()">-1</button>
  <button @click="sumarUno()">+1</button>
</template>

<script>
export default {
    //props:["titulo", "valor"],
    props:{
        titulo: String,
        valor: {
            type: Number,
            required: false,
            default: 100,
            validator(value){
                return value > 0;
            }
        }
    },
    data() {
        return{
            counter: this.valor
        };
    },
    methods:{
        obtenerCuadrado(){
            console.log("Se calcula el cuadrado");
            return this.counter * this.counter;
        },
        sumarUno(){
            return this.counter ++;
        },
        restarUno(){
            return this.counter --;
        }
    },
    computed:{
        obtenerCuadradoComputado(){
            console.log("Se calcula el cuadrado computado");
            return this.counter * this.counter;
        }
    }
};
</script>

<style scoped>
    button{
        background-color: #64B687;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0px 4px;
        padding: 5px 15px;
    }

    button:hover{
        background-color: #5AA67B;
    }

    h2{
        color: rgb(32, 61, 70);
        margin-top: 50px;
        font-family: monospace;
        font-size: 25px;
    }

    p{
        font-family: initial;
        font-size: 20px;
        color: chocolate;
    }
</style>