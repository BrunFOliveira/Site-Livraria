<script setup>

import produtos from '@/data/products';
import ProductCard from './ProductCard.vue';

</script>

<template>
  <section class="Secao-lancamentos">
    <h2 class="titulo-lancamento">Lançamentos</h2>

    <div class="product-grid">
      <ProductCard v-for="livro in produtos" :key="livro.id" :produto="livro"/>
    </div>

  </section>
</template>

<style scoped>
.Secao-lancamentos {
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 50px;
}

.titulo-lancamento {
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 30px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 45px;
  max-width: 1200px;
  margin: 10px auto;
  padding: 20px;
}

@media (max-width: 768px) {
  .Secao-lancamentos {
    padding: 0 20px;
    margin: 30px auto;
  }

  .titulo-lancamento {
    font-size: 28px;
  }

  .product-grid {
    gap: 30px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .Secao-lancamentos {
    padding: 0 12px;
    margin: 20px auto;
  }

  .titulo-lancamento {
    font-size: 22px;
  }

  .product-grid {
    gap: 20px;
    padding: 5px;
  }
}
</style>
