<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ProductList from '@/components/products/ProductList.vue'

const urlImage = ref('https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg')
</script>

<template>
  <main>
    <section class="banner">
      <div>
        <span class="livroDestaque">Livro Destaque</span>
        <h2 class="tituloDoLivro">Clean Code</h2>
        <p>
          Neste guia de engenharia de Robert C. Martin, conheça as boas práticas e os padrões de
          arquitetura do desenvolvimento de software, com seus refatoramentos, padrões de projeto e
          testes automatizados que sustentam sistemas robustos do mundo inteiro. Obra de referência
          na indústria da tecnologia, Código Limpo apresenta um dos mais eficazes ecossistemas de
          desenvolvimento e manutenção de código do século XXI.
        </p>
        <button>
          <RouterLink to="/" class="botao-link"> Acessar página do livro </RouterLink>
        </button>
      </div>
      <div>
        <img :src="urlImage" alt="Capa do livro Clean Code" />
      </div>
    </section>

    <section class="informacoes">
      <div class="conteudoInformacoes">
        <div class="divC">
          <img src="/IconCaminhão.png" alt="" />
          <p>Frete grátis para SC</p>
        </div>

        <p class="paragrafo1">|</p>

        <div class="divE">
          <img src="/IconEstrela.png" alt="" />
          <p>Livros recomendados</p>
        </div>

        <p class="paragrafo2">|</p>

        <div class="divL">
          <img src="/IconLivro.png" alt="" />
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
  cursor: pointer;
}

section.banner button:hover {
  background-color: #017632;
}

section.banner img {
  max-width: 100%;
  height: auto;
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

/* === Responsivo === */

@media (max-width: 1024px) {
  section.banner {
    margin: 50px 40px;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  section.banner {
    flex-direction: column;
    text-align: center;
    margin: 40px 24px;
    gap: 24px;
  }

  section.banner h2.tituloDoLivro {
    font-size: 1.8rem;
    margin-top: 20px;
  }

  section.banner p {
    max-width: 100%;
    font-size: 14px;
  }

  section.banner button {
    padding: 10px 32px;
  }

  section.informacoes div.conteudoInformacoes {
    flex-direction: column;
    gap: 20px;
    padding: 20px 16px;
  }

  section.informacoes div.conteudoInformacoes p.paragrafo1,
  p.paragrafo2 {
    display: none;
  }

  div.conteudoInformacoes div.divC,
  div.conteudoInformacoes div.divE,
  div.conteudoInformacoes div.divL {
    justify-content: center;
    width: 100%;
  }

  section.banner img {
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  section.banner {
    margin: 24px 12px;
    gap: 16px;
  }

  section.banner h2.tituloDoLivro {
    font-size: 1.4rem;
    margin-top: 16px;
  }

  section.banner p {
    font-size: 13px;
  }

  section.banner button {
    padding: 8px 24px;
    font-size: 11px;
  }

  section.banner img {
    max-width: 200px;
  }

  section.informacoes div.conteudoInformacoes {
    gap: 12px;
    padding: 16px 12px;
  }
}
</style>
