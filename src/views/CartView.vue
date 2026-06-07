<script setup>
import CartPanel from '@/components/cart/CartPanel.vue';
import CartSummary from '@/components/cart/CartSummary.vue';

</script>

<template>
  <main>
    <section class="tituloCartView">
      <h2>Carrinho</h2>
    </section>
    <CartPanel />
    
    <CartSummary />



  </main>

</template>

<style scoped>
h2{
  color: #27ae60;
  font-size: 35px;
  font-weight: bold;
}
section.tituloCartView {
  margin-top: 13vw;
  margin-left: 10vw;
  margin-bottom: 3vw;
}



</style>
