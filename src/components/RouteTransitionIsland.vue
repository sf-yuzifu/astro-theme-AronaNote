<template>
  <div style="display: none"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const LEAVE_MS = 260
const ENTER_MS = 560

const beforeSwapHandler = (event: Event) => {
  const transitionEvent = event as Event & { swap?: () => void }
  if (!transitionEvent.swap) return

  const originalSwap = transitionEvent.swap
  transitionEvent.swap = () => {
    const root = document.documentElement
    root.classList.add('route-leaving')

    window.setTimeout(() => {
      originalSwap()
      root.classList.remove('route-leaving')
      root.classList.add('route-entering')
      window.setTimeout(() => {
        root.classList.remove('route-entering')
      }, ENTER_MS)
    }, LEAVE_MS)
  }
}

onMounted(() => {
  document.addEventListener('astro:before-swap', beforeSwapHandler)
})

onUnmounted(() => {
  document.removeEventListener('astro:before-swap', beforeSwapHandler)
})
</script>
