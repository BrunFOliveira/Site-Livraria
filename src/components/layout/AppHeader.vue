<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const searchQuery = ref('')
const cartCount = ref(0)
const wishlistCount = ref(3)

const handleClick = (page) => {
  toast.error(`Página "${page}" em desenvolvimento!`, {
    id: `error-${page}`,
  })
}
</script>

<template>
  <header class="bg-white border-b-2 border-green-600 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center gap-8">
      <RouterLink to="/" class="flex items-center gap-3 shrink-0 cursor-pointer select-none">
        <span class="text-black text-xl font-semibold pr-3 border-r-2 border-green-600">
          IFbooks
        </span>
        <span class="text-green-600 text-xs leading-tight font-medium">
          Apreço à<br />leitura
        </span>
      </RouterLink>

      <div class="flex items-center border border-gray-300 rounded-md overflow-hidden flex-1 max-w-sm">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Pesquisar"
          class="px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none w-full bg-white"
        />
        <button class="px-3 py-2 text-gray-500 hover:text-green-600 transition-colors bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </button>
      </div>

      <nav class="flex items-center gap-7 ml-auto">
        <a href="#" @click.prevent="handleClick('Termos')" class="text-sm text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer">
          Termos
        </a>
        <a href="#" @click.prevent="handleClick('Equipe')" class="text-sm text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer">
          Equipe
        </a>
        <a href="#" @click.prevent="handleClick('Envio')" class="text-sm text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer">
          Envio
        </a>
        <a href="#" @click.prevent="handleClick('Devoluções')" class="text-sm text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer">
          Devoluções
        </a>
      </nav>
      <div class="flex items-center gap-1 shrink-0">
        <RouterLink to="/cart" class="relative p-2 text-green-600 hover:text-green-700 transition-colors cursor-pointer">
          <img src="/cart.png" alt="Carrinho" class="w-6 h-6" />
          <span v-if="cartCount > 0" class="absolute -top-0.5 -right-0.5 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {{ cartCount }}
          </span>
        </RouterLink>
        <span class="text-gray-300 text-lg select-none">|</span>
        <a href="#" @click.prevent="handleClick('Favoritos')" class="relative p-2 text-green-600 hover:text-green-700 transition-colors cursor-pointer">
          <img src="/heart.png" alt="Favoritos" class="w-6 h-6" />
          <span v-if="wishlistCount > 0" class="absolute -top-0.5 -right-0.5 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {{ wishlistCount }}
          </span>
        </a>
        <span class="text-gray-300 text-lg select-none">|</span>
        <a href="#" @click.prevent="handleClick('Perfil')" class="p-2 text-green-600 hover:text-green-700 transition-colors cursor-pointer">
          <img src="/user.png" alt="Perfil" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  font-family: 'Segoe UI', sans-serif;
}
</style>
