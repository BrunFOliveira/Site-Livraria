<script setup>
import { ref } from 'vue'
import { animate } from 'motion-v'
import { motion } from 'motion-v'
import { toggleWishlist } from '@/data/favorite'

const favoritar = ref(false);
const btnRef = ref(null)
const state = ref(false)

function handleClick() {
  favoritar.value = !favoritar.value
  state.value = true
  toggleWishlist(favoritar.value)
  animate(btnRef.value, { scale: [1, 1.3, 1] }, { duration: 0.4, ease: 'easeInOut' })
  setTimeout(()=>{
    state.value = false
  }, 400)
}
</script>

<template>

  <button
    ref="btnRef"
    @click="handleClick"
    class="bg-transparent border-none p-2 leading-none cursor-pointer active:scale-90 active:transition-transform active:duration-100 outline-none focus-visible:outline-none"
  >
    <motion.svg
      :animate="{
      translateY: state ? -10 : 0,
      scale: state ? 1.2 : 1
      }"
      :transition="{
        duration: 0.4,
        ease: 'easeInOut'
      }"
      viewBox="0 0 24 24"
      :class="[
        'w-6 h-6 stroke-2',
        favoritar
          ? 'fill-(--cor_base_verde) stroke-(--cor_base_verde)'
          : 'fill-transparent stroke-gray-400'
      ]"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </motion.svg>
  </button>
</template>
