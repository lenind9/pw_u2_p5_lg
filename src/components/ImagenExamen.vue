<template>
  <div class="container">
    <img :src="urlImg" alt="No se puede visualizar" />
    <label for="">{{texto}}</label>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
    },
    urlImg: {
      type: String,
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img{
  width: 200px;
  height: 300px;
}

label{
  font-weight: bold;
}
</style>