<script setup>
import { ref } from 'vue'
import { animate } from 'motion-v'
import { toggleWishlist } from '@/data/favorite'

const favoritar = ref(false)
const btnRef = ref(null)

function handleClick() {
  favoritar.value = !favoritar.value

  // Atualiza o contador da wishlist
  toggleWishlist(favoritar.value)

  // Bounce com motion-v
  animate(btnRef.value, { scale: [1, 1.3, 1] }, { duration: 0.4, ease: 'easeInOut' })
}
</script>

<template>
  <button ref="btnRef" @click="handleClick" class="btn">
    <svg viewBox="0 0 24 24" class="heart-icon" :class="{ liked: favoritar }">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  </button>
</template>

<style scoped>
.btn {
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
  line-height: 0;
}

.btn:active {
  transform: scale(0.9);
  transition: transform 0.1s;
}

.heart-icon {
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: #d1d5db;
  stroke-width: 2;
  transition: fill 0.3s ease, stroke 0.3s ease;
}

.heart-icon.liked {
  fill: #ef4444;
  stroke: #ef4444;
}
</style>
