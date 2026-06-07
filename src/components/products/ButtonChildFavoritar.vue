<script setup>
import { ref, computed } from 'vue'
import { toggleWishlist, isFavorited } from '@/data/favorite'

const props = defineProps(['produto'])
const state = ref(false)

const favoritar = computed(() => isFavorited(props.produto.id))

function handleClick() {
  toggleWishlist(props.produto)

  state.value = true

  setTimeout(() => {
    state.value = false
  }, 400)
}
</script>

<template>
  <button
    @click="handleClick"
    :class="[
      'bg-transparent border-none p-2 md:p-2.5 leading-none cursor-pointer outline-none focus-visible:outline-none transition-transform duration-200',
      state ? 'scale-125' : 'active:scale-90'
    ]"
  >
    <svg
      viewBox="0 0 24 24"
      :class="[
        'w-5 h-5 md:w-6 md:h-6 stroke-2 transition-all duration-300 ease-in-out',
        state ? '-translate-y-2 scale-110' : 'translate-y-0 scale-100',
        favoritar
          ? 'fill-[var(--cor_base_verde)] stroke-[var(--cor_base_verde)]'
          : 'fill-transparent stroke-gray-400'
      ]"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  </button>
</template>
