<template>
  <div class="container">
    <form class="form" action="https://pokeapi.co/api/v2/pokemon/" method="GET">
      <p type="Id:"><input v-model="id" @keypress.enter="consumirAPI(this.id)" type="text" /></p>

      <p type="Name:"><input v-model="name" type="text" /></p>
      <p type="Weight:"><input v-model="weight" type="text" /></p>
      <p type="Experiencia base:"><input v-model="base" type="text" /></p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        id: null,
        name: null,
        weight: null,
        base: null
    };
  },
  methods: {
    async consumirAPI(id) {
        const {name, weight, base_experience} = await fetch(this.construirURLAPI(this.id)).then((res) => res.json());
        this.name = name;
        this.weight = weight;
        this.base = base_experience;
        console.log(name);
    },
    construirURLAPI(id) {
      return "https://pokeapi.co/api/v2/pokemon/" + id;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
}

.form {
  width: 340px;
  height: 280px;
  background: #e6e6e6;
  border-radius: 8px;
  padding: 20px 30px;
  font-family: monospace;
  box-shadow: 0px 0px 40px -5px #000;
}

p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 16px;
  color: #5a5a5a;
}

input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #bebed2;
  background: none;
}

input:focus {
  border-bottom: 3px solid #78788c;
}
</style>