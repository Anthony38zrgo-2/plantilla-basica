<script setup>
import { COMPANY_INFO } from '@/constants/company'
</script>

<template>
  <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="font-bold text-xl text-indigo-600">{{ COMPANY_INFO.name }}</span>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <a href="#hero" class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Inicio</a>
        <a href="#about" class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Nosotros</a>
        <a href="#services" class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Servicios</a>
        <a href="#contact" class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Contacto</a>
      </nav>
    </div>
  </header>
</template>
