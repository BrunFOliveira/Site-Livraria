<script setup>
import CartItem from './CartItem.vue';
import carrinho from '@/utils/cartUtils.js';
import { RouterLink } from 'vue-router';

function aumentarQuantidade(id) {
  const item = carrinho.items.find(i => i.id === id);
  if (item) {
    item.quantidade++;
    item.valorTotal = item.quantidade * item.preco;
    atualizarTotalGeral(); }}

function diminuirQuantidade(id) {
  const item = carrinho.items.find(i => i.id === id);
  if (item) {
    item.quantidade--;
    if (item.quantidade <= 0) {
      carrinho.items = carrinho.items.filter(i => i.id !== id);
    } else {
      item.valorTotal = item.quantidade * item.preco;
    }
    atualizarTotalGeral();
  }
}

function atualizarTotalGeral() {
  carrinho.total = carrinho.items.reduce((soma, item) => soma + item.valorTotal, 0);
   if (carrinho.items.length === 0) {
    carrinho.desconto = 0;
  }
}

</script>

<template>
    <section class="painelDoCart">

    <div class="topoDoPainel">
        <span class="colProduto">Título</span>
        <span class="colQtd">Quantidade</span>
        <span class="colSubtotal">Subtotal</span>
      </div>


    <div class="lista-itens" v-if="carrinho.items.length > 0">
        <CartItem
          v-for="itemCarrinho of carrinho.items"
          :key="itemCarrinho.id"
          :produto="itemCarrinho"
          @aumentar="aumentarQuantidade"
          @diminuir="diminuirQuantidade"
        />
      </div>

      <div class="carrinhoVazio" v-else>
        <p>Seu carrinho está vazio.</p>
      </div>
      <RouterLink to="/">
      <button class="btnVoltarLoja">Voltar para loja</button>
      </RouterLink>
    </section>
</template>

<style scoped>

span.colProduto {
  margin-left: 15px;
}

section.painelDoCart {
  margin-left: 9vw;
  margin-right: 9vw;
}
div.topoDoPainel {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding-bottom: 10px;
  border-bottom: 2px solid #27ae60;
  font-weight: bold;
  color: #000;
  font-size: 1.5rem;
}
button.btnVoltarLoja {
  border: 1px solid #000;
  border-radius: 4px;
  padding: 15px 50px;
  margin: 35px 10px;
  cursor: pointer;
  font-weight: 500;
}
div.carrinhoVazio p{
  color: #27ae60;
  font-weight: bolder;
  margin: 30px auto 50px auto;
  text-align: center;
  text-decoration: underline;
  cursor: default;
}

@media (max-width: 640px) {
  section.painelDoCart {
    margin-left: 5vw;
    margin-right: 5vw;
  }

  div.topoDoPainel {
    font-size: 1rem;
    grid-template-columns: 2fr 1fr 1fr;
  }

  button.btnVoltarLoja {
    width: 100%;
    padding: 12px 20px;
    margin: 20px 0;
    text-align: center;
  }
}

</style>
