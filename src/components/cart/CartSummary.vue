<script setup>
import { ref } from 'vue';
import carrinho from '@/utils/cartUtils.js';
import { formatPrice, formatPriceWithDiscount } from '@/utils/currencyUtils.js';
import { useToast } from 'vue-toastification';

const CodigoCupom = ref('');
const vezesUsadoCupom = ref(0);
const toast = useToast();

function aplicarCupom() {
  if (CodigoCupom.value.toUpperCase() === 'VOUPROGRAMAR' && vezesUsadoCupom.value === 0) {
    carrinho.desconto = 10;
    vezesUsadoCupom.value = 1;
    toast.success('🎉 Cupom aplicado com sucesso!');
    CodigoCupom.value = '';

  } else if (CodigoCupom.value.toUpperCase() !== 'VOUPROGRAMAR' && vezesUsadoCupom.value === 0) {
    toast.error('✖ Cupom inválido!');
  } else {
    toast.warning('⚠ Você já usou esse cupom!');
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

    </div>

    <div class="divExterna">
      <h3>Total da Compra</h3>
      <div class="divInterna">
        <div class="primeiraDiv">
          <span>Produtos:</span>
          <p>{{ formatPrice(carrinho.total) }}</p>

        </div>
        <div class="segundaDiv">
          <span>Frete:</span>
          <p>GRÁTIS</p>

        </div>
        <div class="terceiraDiv">
          <span>Desconto:</span>
          <p>{{ formatPrice(carrinho.desconto) }}</p>

        </div>
        <div>
          <span>Total:</span>
          <p>{{ formatPriceWithDiscount(carrinho.total, carrinho.desconto) }}</p>

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
  gap: 20px;
  flex-wrap: wrap;
}
div.divExterna div.divInterna div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15vw;
  min-width: 200px;
}
div.elementosLaterais button.inserirCupom{
  cursor: pointer;
  background-color: #27ae60;
  color: #fff;
  padding: 15px 50px;
  border-radius: 4px;
  white-space: nowrap;
}
div.elementosLaterais input {
  padding: 15px 50px 15px 15px;
  border: 1px solid #000;
  border-radius: 4px;
  width: 100%;
  min-width: 120px;
}
div.elementosLaterais {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
div.divExterna {
  border: 2px solid #000;
  border-radius: 4px;
  padding: 30px 40px;
  flex: 1;
  min-width: 280px;
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

@media (max-width: 640px) {
  section.summaryCart {
    margin: 20px 5vw;
    flex-direction: column;
  }

  div.divExterna div.divInterna div {
    gap: 10vw;
    min-width: auto;
  }

  div.elementosLaterais input {
    min-width: 90px;
    padding: 12px 30px 12px 12px;
  }

  div.elementosLaterais button.inserirCupom {
    padding: 12px 30px;
    font-size: 13px;
  }

  div.divExterna {
    padding: 20px;
    min-width: auto;
  }

  .btnPagamento {
    margin: 0;
    width: 100%;
    padding: 12px 20px;
  }
}
</style>
