<script setup>
import { COMPANY_INFO } from '@/constants/company'
import WhatsAppButton from '@/components/ui/WhatsAppButton.vue'
</script>

<template>
  <section id="hero" class="relative bg-gray-50 py-20 md:py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
        Bienvenido a <span class="text-indigo-600">{{ COMPANY_INFO.name }}</span>
      </h1>
      <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
        {{ COMPANY_INFO.description }}
      </p>
      <div class="mt-10">
        <WhatsAppButton />
      </div>
    </div>
  </section>
</template>
