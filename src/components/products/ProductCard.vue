<script setup>

import { useToast } from 'vue-toastification'
import ButtonChildComprar from './ButtonChildComprar.vue';
import ButtonChildFavoritar from './ButtonChildFavoritar.vue';
import carrinho from '@/utils/cartUtils.js';
import { formatPrice } from '@/utils/currencyUtils.js';

const props = defineProps(['produto']);

function comprar() {

  const itemExist = carrinho.items.find(p => p.id === props.produto.id);

    if (itemExist) {
      itemExist.quantidade++;
      itemExist.valorTotal = itemExist.quantidade * itemExist.preco;
    } else {
    carrinho.items.push({
      id: props.produto.id,
      nome: props.produto.titulo,
      preco: props.produto.preco,
      quantidade: 1,
      capa: props.produto.capa,
      valorTotal: props.produto.preco,
      autor: props.produto.autor
    });
  }
  carrinho.total = carrinho.items.reduce((soma, item) => soma + item.valorTotal, 0);

}

const toast = useToast()
function handleClick() {
  toast.success('Livro adicionado ao carrinho!')
}
</script>

<template>
  <div class="card-livro">
    <div class="caixa-imagem">
       <img :src="produto.capa" alt="produto.titulo" class="imagem-capa" />
    </div>

  <h3 class="titulo-livro">{{ produto.titulo }}</h3>
  <p class="autor-livro">{{ produto.autor }}</p>

   <div class="linha-preco">
      <span class="preco-livro">{{ formatPrice(produto.preco) }}</span>
      <ButtonChildFavoritar :produto="produto" />
  </div>
  <ButtonChildComprar @clique="comprar" @click="handleClick"/>
  </div>
</template>

<style scoped>
.caixa-imagem {
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 4px;
  overflow: hidden;
}

.card-livro {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.imagem-capa {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

@media (max-width: 480px) {
  .caixa-imagem {
    height: 200px;
  }

  .titulo-livro {
    font-size: 14px;
  }

  .autor-livro {
    font-size: 12px;
  }
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
