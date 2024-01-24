<template>
  <div class="options-container">
    <ul>
      <li v-for="poke in pokemon" :key="poke.id" @click="$emit('selecciono', poke.id)">{{ poke.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
        pokemon:{
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-bottom: 15px;
  cursor: pointer;
}
li:hover {
  background: rgba(0, 0, 0, 0.1);
}
.options-container {
  display: flex;
  justify-content: center;
}
</style>