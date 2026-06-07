<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { wishlist, wishlistCount } from '@/data/favorite'

const toast = useToast()

const searchQuery = ref('')
const cartCount = ref(0)
const showWishlist = ref(false)

const handleClick = (page) => {
  toast.error(`Página "${page}" em desenvolvimento!`, {
    id: `error-${page}`,
  })
}

function toggleWishlistMenu() {
  showWishlist.value = !showWishlist.value
}
</script>

<template>
  <header class="bg-white border-b-2 border-(--cor_base_verde) shadow-sm">
    <div class="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center gap-3 md:gap-8">
      <RouterLink to="/" class="flex items-center gap-2 md:gap-3 shrink-0 cursor-pointer select-none">
        <span class="text-black text-base md:text-xl font-semibold pr-2 md:pr-3 border-r-2 border-(--cor_base_verde)">
          IFbooks
        </span>
        <span class="text-(--cor_base_verde) text-[10px] md:text-xs leading-tight font-medium">
          Apreço à<br />leitura
        </span>
      </RouterLink>

      <div class="flex items-center border border-gray-300 rounded-md overflow-hidden flex-1 max-w-35 sm:max-w-50 md:max-w-sm">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Pesquisar"
          class="px-2 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-gray-700 placeholder-gray-400 outline-none w-full bg-white"
        />
        <button class="px-2 md:px-3 py-1.5 md:py-2 text-gray-500 hover:text-(--cor_base_verde) transition-colors bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </button>
      </div>

      <div class="flex-1"></div>

      <nav class="hidden md:flex items-center gap-7">
        <a href="#" @click.prevent="handleClick('Termos')" class="text-sm text-gray-700 hover:text-(--cor_base_verde) transition-colors whitespace-nowrap cursor-pointer">
          Termos
        </a>
        <a href="#" @click.prevent="handleClick('Equipe')" class="text-sm text-gray-700 hover:text-(--cor_base_verde) transition-colors whitespace-nowrap cursor-pointer">
          Equipe
        </a>
        <a href="#" @click.prevent="handleClick('Envio')" class="text-sm text-gray-700 hover:text-(--cor_base_verde) transition-colors whitespace-nowrap cursor-pointer">
          Envio
        </a>
        <a href="#" @click.prevent="handleClick('Devoluções')" class="text-sm text-gray-700 hover:text-(--cor_base_verde) transition-colors whitespace-nowrap cursor-pointer">
          Devoluções
        </a>
      </nav>
      <div class="flex items-center gap-0.5 md:gap-1 shrink-0">
        <RouterLink to="/cart" class="relative p-1.5 md:p-2 text-(--cor_base_verde) hover:text-(--cor_base_verde) transition-colors cursor-pointer">
          <img src="/cart.png" alt="Carrinho" class="w-5 h-5 md:w-6 md:h-6" />
          <span v-if="cartCount > 0" class="absolute -top-0.5 -right-0.5 bg-(--cor_base_verde) text-white text-[10px] md:text-xs rounded-full w-3.5 h-3.5 md:w-4 md:h-4 flex items-center justify-center">
            {{ cartCount }}
          </span>
        </RouterLink>
        <span class="text-gray-300 text-base md:text-lg select-none">|</span>

        <div class="relative">
          <a href="#" @click.prevent="toggleWishlistMenu" class="relative inline-flex p-1.5 md:p-2 text-(--cor_base_verde) hover:text-(--cor_base_verde) transition-colors cursor-pointer">
            <img src="/heart.png" alt="Favoritos" class="w-5 h-5 md:w-6 md:h-6" />
            <span v-if="wishlistCount > 0" class="absolute -top-1 -right-1 bg-(--cor_base_verde) text-white text-[10px] md:text-xs rounded-full min-w-4.5 h-4.5 md:min-w-5 md:h-5 flex items-center justify-center px-1 leading-none font-bold shadow-sm">
              {{ wishlistCount }}
            </span>
          </a>

          <Transition name="dropdown">
            <div v-if="showWishlist" class="dropdown-wishlist">
              <p v-if="wishlist.length === 0" class="dropdown-vazio">
                favorite algo pão duro
              </p>
              <div v-else class="dropdown-lista">
                <div
                  v-for="item in wishlist"
                  :key="item.id"
                  class="dropdown-item"
                >
                  <img :src="item.capa" :alt="item.titulo" class="dropdown-capa" />
                  <span class="dropdown-nome">{{ item.titulo }}</span>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <span class="text-gray-300 text-base md:text-lg select-none">|</span>
        <a href="#" @click.prevent="handleClick('Perfil')" class="p-1.5 md:p-2 text-(--cor_base_verde) hover:text-(--cor_base_verde) transition-colors cursor-pointer">
          <img src="/user.png" alt="Perfil" class="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  font-family: 'Segoe UI', sans-serif;
}

.dropdown-wishlist {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 260px;
  max-width: 320px;
  max-height: 280px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  z-index: 50;
}

.dropdown-vazio {
  padding: 24px 20px;
  text-align: center;
  color: #9ca3af;
  font-size: 14px;
  font-style: italic;
}

.dropdown-lista {
  display: flex;
  flex-direction: column;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-bottom: 1px solid #f3f4f6;
  transition: background 0.15s;
  cursor: default;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #f9fafb;
}

.dropdown-capa {
  width: 36px;
  height: 52px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
}

.dropdown-nome {
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
