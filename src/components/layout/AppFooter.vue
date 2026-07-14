<script setup>
import { COMPANY_INFO } from '@/constants/company'
</script>

<template>
  <footer class="bg-gray-50 border-t border-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="text-center md:text-left">
        <p class="font-bold text-gray-900">{{ COMPANY_INFO.name }}</p>
        <p class="text-sm text-gray-500 mt-1">{{ COMPANY_INFO.description }}</p>
      </div>
      <div class="text-center md:text-right text-sm text-gray-500">
        <p>{{ COMPANY_INFO.address }}</p>
        <p class="mt-1">{{ COMPANY_INFO.email }} | {{ COMPANY_INFO.phone }}</p>
        <p class="mt-4 text-xs">&copy; {{ new Date().getFullYear() }} {{ COMPANY_INFO.name }}. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>
