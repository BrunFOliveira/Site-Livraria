<script setup>
  defineEmits(['clique'])
</script>

<template>
  <button @click.prevent="$emit('clique')" class="btn">
    <img src="/public/IconCarrinhoDeCompras.png" alt="">
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
  gap: 8px;
  padding: 12px 20px;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  border: none;
  width: 100%;
  transition: background-color 0.2s;
}

button.btn:hover {
  background-color: #017632;
}

button.btn img {
  width: 18px;
  height: 18px;
}

@media (max-width: 480px) {
  button.btn {
    padding: 10px 16px;
    font-size: 13px;
  }
}
</style>
