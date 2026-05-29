<script setup>
 import { ref } from 'vue';
 import { RouterLink } from 'vue-router';
 import ProductList from '@/components/products/ProductList.vue';

const urlImage = ref('https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg')
</script>

<template>
  <main>

   <section class="banner">
    <div>
       <span class="livroDestaque">Livro Destaque</span>
    <h2 class="tituloDoLivro">Clean Code</h2>
    <p>Neste guia de engenharia de Robert C. Martin, conheça as boas práticas e os padrões de arquitetura do desenvolvimento de software, com seus refatoramentos, padrões de projeto e testes automatizados que sustentam sistemas robustos do mundo inteiro. Obra de referência na indústria da tecnologia, Código Limpo apresenta um dos mais eficazes ecossistemas de desenvolvimento e manutenção de código do século XXI.</p>
    <button>
      <RouterLink to="/" class="botao-link">
  Acessar página do livro
      </RouterLink>
    </button>
    </div>
    <div>
      <img :src="urlImage" alt="Capa do livro Clean Code">
    </div>
   </section>

   <section class="informacoes">

    <div class="conteudoInformacoes">
      <div class="divC">
      <img src="/public/IconCaminhão.png" alt="">
    <p>Frete grátis para SC</p>
    </div>

    <p class="paragrafo1">|</p>

    <div class="divE">
      <img src="/public/IconEstrela.png" alt="">
    <p>Livros recomendados</p>
    </div>

    <p class="paragrafo2">|</p>

    <div class="divL">
      <img src="/public/IconLivro.png" alt="">
    <p>Mais vendidos</p>
    </div>

    </div>

   </section>

  <ProductList />

  </main>
</template>

<style scoped>
/* === Banner === */

section.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin: 70px 100px;
}

section.banner span.livroDestaque {
  border: 1px solid #a2d2c8;
  color: #27ae60;
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 3px;
}

section.banner h2.tituloDoLivro {
  font-size: 2.5rem;
  margin: 0 0 15px 0;
  color: #222;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 30px;
}

section.banner p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px;
}

section.banner button {
  color: #fff;
  background-color: #27ae60;
  padding: 12px 40px;
  font-size: 12px;
  border-radius: 3px;
}

section.banner button:hover {
  background-color: #017632;
}

/* === Informações === */

section.informacoes {
  border-top: 1px solid #3a8d87;
  border-bottom: 1px solid #3a8d87;
  padding: 20px 0;
}

section.informacoes div.conteudoInformacoes {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  flex: 1;
}

section.informacoes div.conteudoInformacoes p.paragrafo1,
p.paragrafo2 {
  color: #8b8b8b;
  font-size: 40px;
}

div.conteudoInformacoes div.divC {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

div.conteudoInformacoes div.divE {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

div.conteudoInformacoes div.divL {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
</style>
