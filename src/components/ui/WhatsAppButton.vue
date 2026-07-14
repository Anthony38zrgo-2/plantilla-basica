<script setup>
import { useWhatsApp } from '@/composables/useWhatsApp'

const { whatsappUrl } = useWhatsApp()
</script>

<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    class="inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Contactar por WhatsApp
  </a>
</template>
