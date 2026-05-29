<script setup>
  defineEmits(['clique'])
</script>

<template>
  <button @click.prevent="$emit('clique')" class="btn">
    <img src="/IconCarrinhoDeCompras.png" alt="">
    Comprar
  </button>
</template>

<style scoped>
button.btn {
  background-color: #27AE60;
  color: #fff;
  border-radius: 3px;
  align-items: center;
  display: flex;
  padding: 20px;
  justify-content: center;
  cursor: pointer;
}

button.btn:hover {
  background-color: #017632;
}
</style>
