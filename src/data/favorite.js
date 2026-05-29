import { ref, computed } from 'vue'

export const wishlistCount = ref(0)

export function toggleWishlist(adicionar) {
  if (adicionar) {
    wishlistCount.value++
  } else {
    wishlistCount.value = Math.max(0, wishlistCount.value - 1)
  }
}
