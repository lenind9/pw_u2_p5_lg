<template>
  <div class="container">
    <div class="img_lbl">
      <img :src="urlImg" alt="No se puede visualizar" />
      <label for="">{{ texto }}</label>
    </div>
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

img {
  width: 215px;
  height: 215px;
  margin-bottom: 20px;
}
.img_lbl {
  display: grid;
}

label {
  font-weight: bold;
  font-size: 20px;
}
</style>