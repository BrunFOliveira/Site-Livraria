<script setup>
import { ref } from 'vue'

const favoritar = ref(false);

function funcao() {
  favoritar.value = !favoritar.value;
}
</script>

<template>
  <button @click="funcao" class="btn">
    <img v-if="favoritar === false" src="/VectorHeartFalse.png" alt="">
    <img v-else src="/VectorHeartTrue.png" alt="">

  </button>
</template>

<style scoped>
.btn {
  cursor: pointer;
}

</style>
