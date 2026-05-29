<script setup>

import ButtonChildComprar from './ButtonChildComprar.vue';
import ButtonChildFavoritar from './ButtonChildFavoritar.vue';

defineProps(['produto'])

</script>

<template>
  <div class="card-livro">
    <div class="caixa-imagem">
       <img :src="produto.capa" alt="produto.titulo" class="imagem-capa" />
    </div>

  <h3 class="titulo-livro">{{ produto.titulo }}</h3>
  <p class="autor-livro">{{ produto.autor }}</p>

   <div class="linha-preco">
      <span class="preco-livro">R$ {{ produto.preco.toFixed(2) }}</span>
      <ButtonChildFavoritar />
  </div>
  <ButtonChildComprar />
  </div>
</template>

<style scoped>
.caixa-imagem {
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
  border-radius: 4px;
}

.card-livro {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.imagem-capa {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
.titulo-livro {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.autor-livro {
  font-size: 13px;
  color: #777;
  margin-bottom: 15px;
}
.linha-preco {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-bottom: 15px;
}
.preco-livro {
  font-size: 16px;
  font-weight: bold;
}
.botao-favorito {
  background: none;
  border: none;
  cursor: pointer;
}

</style>
