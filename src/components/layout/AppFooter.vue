<script setup>
import { COMPANY_INFO } from "@/constants/company";
</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950 py-12">
    <div
      class="page-container flex flex-col items-center justify-between gap-8 md:flex-row"
    >
      <div class="max-w-xl text-center md:text-left">
        <p class="text-lg font-black text-white">
          {{ COMPANY_INFO.name }}
        </p>

        <p class="mt-2 text-sm leading-6 text-slate-300">
          {{ COMPANY_INFO.description }}
        </p>
      </div>

      <div class="text-center text-sm text-slate-300 md:text-right">
        <p class="font-semibold text-white">
          {{ COMPANY_INFO.address }}
        </p>

        <div
          class="mt-2 flex flex-col items-center gap-1 font-bold text-pink-400 sm:flex-row sm:justify-center sm:gap-2 md:justify-end"
        >
          <a
            :href="`mailto:${COMPANY_INFO.email}`"
            class="footer-link"
          >
            {{ COMPANY_INFO.email }}
          </a>

          <span class="hidden text-slate-700 sm:inline">|</span>

          <a
            :href="`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`"
            class="footer-link"
          >
            {{ COMPANY_INFO.phone }}
          </a>
        </div>

        <p class="mt-4 text-xs text-slate-500">
          &copy; {{ new Date().getFullYear() }} {{ COMPANY_INFO.name }}. Todos
          los derechos reservados.
        </p>
      </div>
    </div>

    <div class="mx-auto mt-9 flex h-1 max-w-7xl overflow-hidden rounded-full">
      <div class="w-1/3 bg-blue-500"></div>
      <div class="w-2/3 bg-pink-500"></div>
    </div>
  </footer>
</template>
