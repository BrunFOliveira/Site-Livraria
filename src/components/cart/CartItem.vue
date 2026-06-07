<script setup>
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
        <span>R${{ produto.preco.toFixed(2) }}</span>
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
      <p>R${{ produto.valorTotal.toFixed(2) }}</p>
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
}
div.colTitulo p{
  font-size: 12px;
  margin-bottom: 7px;
  margin-top: 7px;
  color: #4F4C57;
}
.seletorQtd {
  display: flex;
  align-items: center;
  gap: 10px;
}

.seletorQtd button {
  border: 1px solid #ccc;
  background: white;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
