<script setup>
import { formatPrice } from '@/utils/currencyUtils.js';
defineProps(['produto']);
defineEmits(['aumentar', 'diminuir']);

</script>

<template>
  <div class="itemProduto">

    <div class="colTitulo">
      <img :src="produto.capa" :alt="produto.titulo" class="imgProduto" />
      <div class="infoProduto">
        <h3>{{ produto.nome }}</h3>
        <p>{{ produto.autor }}</p>
        <span>{{ formatPrice(produto.preco) }}</span>
      </div>
    </div>

    <div class="colQuantidade">
      <div class="seletorQtd">
        <button @click="$emit('diminuir', produto.id)" class="btnMais">-</button>
        <span>{{ produto.quantidade }}</span>
        <button @click="$emit('aumentar', produto.id)" class="btnMenos">+</button>
      </div>
    </div>

    <div class="colSubtotal">
      <p>{{ formatPrice(produto.valorTotal) }}</p>
    </div>
  </div>

</template>

<style scoped>
.itemProduto {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
}
.imgProduto {
  width: 110px;
  height: auto;
  margin-right: 15px;
}
div.colTitulo {
  display: flex;
  margin-left: 12px;
}

div.colTitulo span{
  font-weight: bolder;
}
div.colTitulo h3{
  font-weight: bolder;
  font-size: 14px;
}
div.colTitulo p{
  font-size: 12px;
  margin-bottom: 7px;
  margin-top: 7px;
  color: #4F4C57;
}
.seletorQtd {
  display: inline-flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.seletorQtd button {
  border: none;
  background: #f9fafb;
  padding: 0.8rem;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  transition: all 0.15s ease;
  line-height: 1;
  user-select: none;
}

.seletorQtd button:hover {
  background: #27ae60;
  color: #fff;
}

.seletorQtd button:active {
  background: #1e8f4f;
}

.seletorQtd span {
  min-width: 36px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  color: #1f2937;
  padding: 6px 0;
}

@media (max-width: 640px) {
  .itemProduto {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 16px 0;
  }

  div.colTitulo {
    margin-left: 0;
    align-items: center;
  }

  .imgProduto {
    width: 80px;
  }

  div.colQuantidade {
    justify-self: start;
  }

  div.colSubtotal {
    justify-self: start;
  }

  .seletorQtd {
    gap: 8px;
  }
}
</style>
