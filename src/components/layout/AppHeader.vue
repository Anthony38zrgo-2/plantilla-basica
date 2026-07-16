<script setup>
import { COMPANY_INFO } from "@/constants/company";
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-blue-900 bg-blue-950/95 shadow-sm backdrop-blur-md"
  >
    <div
      class="page-container flex h-16 items-center justify-between"
    >
      <!-- Marca -->
      <a
        href="#hero"
        class="flex items-center gap-3"
        :aria-label="`Ir al inicio de ${COMPANY_INFO.name}`"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-black text-pink-500 shadow-md shadow-blue-950/40 transition hover:scale-105 hover:bg-pink-50"
        >
          ED
        </div>

        <div class="flex flex-col leading-none">
          <span
            class="text-xl font-black tracking-tight text-white sm:text-2xl"
          >
            {{ COMPANY_INFO.name }}
          </span>

          <span
            class="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400"
          >
            Servicios web
          </span>
        </div>
      </a>

      <!-- Navegación de escritorio -->
      <nav
        class="hidden items-center gap-2 md:flex"
        aria-label="Navegación principal"
      >
        <a
          href="#hero"
          class="nav-link"
        >
          Inicio
        </a>

        <a
          href="#about"
          class="nav-link"
        >
          Nosotros
        </a>

        <a
          href="#services"
          class="nav-link"
        >
          Servicios
        </a>

        <a
          href="#contact"
          class="btn-light ml-2 px-5 py-2.5 text-sm font-bold shadow-md shadow-blue-950/40 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Contacto
        </a>
      </nav>

      <!-- Botón móvil -->
      <a
        href="#contact"
        class="btn-light px-4 py-2 text-sm font-bold md:hidden"
      >
        Contacto
      </a>
    </div>

    <!-- Línea inferior decorativa -->
    <div class="flex h-1">
      <div class="w-2/3 bg-blue-600"></div>
      <div class="w-1/3 bg-pink-500"></div>
    </div>
  </header>
</template>
