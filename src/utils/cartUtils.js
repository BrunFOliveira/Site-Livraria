import { reactive } from 'vue';

const carrinho = reactive({
  items: [
    
  ],
  frete: 0,
  desconto: 0,
  total: 0
});

export default carrinho;
