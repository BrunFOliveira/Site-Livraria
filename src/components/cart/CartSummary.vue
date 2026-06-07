<script setup>
import { ref } from 'vue';
import carrinho from '@/utils/cartUtils.js';

const CodigoCupom = ref('');
const mensagem = ref('');
const vezesUsadoCupom = ref(0);

function aplicarCupom() {
  if (CodigoCupom.value.toUpperCase() === 'VOUPROGRAMAR' && vezesUsadoCupom.value === 0) {
    carrinho.desconto = 10;
    vezesUsadoCupom.value = 1;
    mensagem.value = 'Cupom aplicado com sucesso!';

  } else if (CodigoCupom.value.toUpperCase() !== 'VOUPROGRAMAR' && vezesUsadoCupom.value === 0) {
    mensagem.value = 'Cupom inválido!';
  } else {
    mensagem.value = 'Você já usou esse cupom!'
  }
}
</script>

<template>
  <section class="summaryCart">
    <div>
       <div class="elementosLaterais">
      <input type="text" v-model="CodigoCupom" placeholder="Código do cupom"/>
      <button @click="aplicarCupom" class="inserirCupom">Inserir Cupom</button>
    </div>

    <p v-if="mensagem !== ''" class="aviso">
      {{ mensagem }}
    </p>
    </div>

    <div class="divExterna">
      <h3>Total da Compra</h3>
      <div class="divInterna">
        <div class="primeiraDiv">
          <span>Produtos:</span>
          <p>R${{ carrinho.total.toFixed(2) }}</p>

        </div>
        <div class="segundaDiv">
          <span>Frete:</span>
          <p>GRÁTIS</p>

        </div>
        <div class="terceiraDiv">
          <span>Desconto:</span>
          <p>R${{ carrinho.desconto.toFixed(2) }}</p>

        </div>
        <div>
          <span>Total:</span>
          <p>R${{ Math.max(0, carrinho.total - carrinho.desconto).toFixed(2) }}</p>

        </div>
      </div>
      <button class="btnPagamento">Ir para o pagamento</button>

    </div>
  </section>
</template>

<style scoped>
section.summaryCart {
  margin: 35px 10vw 35px 9vw;
  display: flex;
  justify-content: space-between;
}
section.summaryCart div p.aviso {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 0.9rem;
  font-weight: bold;
}
div.divExterna div.divInterna div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 23vw;
}
div.elementosLaterais button.inserirCupom{
  cursor: pointer;
  background-color: #27ae60;
  color: #fff;
  padding: 15px 50px;
  border-radius: 4px;
}
div.elementosLaterais input {
  padding: 15px 50px 15px 15px;
  margin-left: 10px;
  border: 1px solid #000;
  border-radius: 4px;
}
div.elementosLaterais {
  display: flex;
  gap: 10px;
}
div.divExterna {
  border: 2px solid #000;
  border-radius: 4px;
  padding: 30px 40px;
  }
div.divExterna h3{
  margin: 0 0 20px 0;
  font-size: 1.15rem;
  font-weight: 600;
}
div.divInterna {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}
.btnPagamento {
  cursor: pointer;
  background-color: #27ae60;
  color: #fff;
  padding: 15px 50px;
  border-radius: 4px;
  margin: 0 0 0 120px;
}
.btnPagamento:hover {
  background-color: #017632 ;
}
div.divExterna div.divInterna div.primeiraDiv {
  border-bottom: 1px solid #8c8c8c;
  padding-bottom: 1vw;
}
div.divExterna div.divInterna div.segundaDiv {
  border-bottom: 1px solid #8c8c8c;
  padding-bottom: 1vw;
}
div.divExterna div.divInterna div.terceiraDiv {
  border-bottom: 1px solid #8c8c8c;
  padding-bottom: 1vw;
}
</style>
