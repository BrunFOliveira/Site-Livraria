<script setup>
import produtos from '@/data/products'
import ProductCard from './ProductCard.vue'
</script>

<template>
  <section class="Secao-lancamentos">
    <h2 class="titulo-lancamento">Lançamentos</h2>
      <div class="product-grid">
        <ProductCard v-for="livro in produtos" :key="livro.id" :produto="livro" />
      </div>
  </section>
</template>

<style scoped>
.Secao-lancamentos {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.titulo-lancamento {
  width: 100%;
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 30px;
  margin-left: 0;
  padding-left: 1.2rem;
  text-align: left;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  gap: 45px;
  max-width: 1200px;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 45px;
  margin: 10px auto;
  padding: 20px;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
  }
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
    grid-template-columns: repeat(2, 1fr);
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
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 5px;
  }
}
</style>
