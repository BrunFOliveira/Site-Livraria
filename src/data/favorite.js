import { ref, computed } from 'vue'

export const wishlist = ref([])

export const wishlistCount = computed(() => wishlist.value.length)

export function toggleWishlist(produto) {
  const index = wishlist.value.findIndex(p => p.id === produto.id)
  if (index >= 0) {
    wishlist.value.splice(index, 1)
    return false
  } else {
    wishlist.value.push({
      id: produto.id,
      titulo: produto.titulo,
      capa: produto.capa
    })
    return true
  }
}

export function isFavorited(id) {
  return wishlist.value.some(p => p.id === id)
}
