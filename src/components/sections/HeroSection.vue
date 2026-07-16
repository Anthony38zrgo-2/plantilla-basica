<script setup>
import { COMPANY_INFO } from "@/constants/company";
import heroBanner from "@/assets/images/banner.png";
</script>

<template>
  <section
    id="hero"
    class="relative isolate overflow-hidden bg-blue-950 py-20 sm:py-24 lg:py-28"
  >
    <!-- Fondos decorativos -->
    <div
      class="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
    ></div>

    <div
      class="dot-pattern pointer-events-none absolute inset-0 opacity-[0.06]"
    ></div>

    <div class="section-container">
      <!-- Contenido principal -->
      <div
        class="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
      >
        <!-- Texto -->
        <div class="text-center lg:text-left">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-300 backdrop-blur-sm"
          >
            <span class="material-symbols-outlined text-base">
              rocket_launch
            </span>

            Soluciones digitales para tu negocio
          </div>

          <h1
            class="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
          >
            Lleva tu negocio al

            <span
              class="block bg-gradient-to-r from-pink-400 via-pink-500 to-pink-300 bg-clip-text text-transparent lg:inline"
            >
              mundo digital
            </span>
          </h1>

          <p
            class="mx-auto mt-7 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg md:text-xl lg:mx-0"
          >
            {{ COMPANY_INFO.description }}
          </p>

          <div
            class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#services"
              class="btn-outline hover:border-pink-400/50 hover:text-pink-300"
            >
              <span class="material-symbols-outlined text-xl"> grid_view </span>

              Ver servicios
            </a>
          </div>
        </div>

        <!-- Imagen animada -->
        <div class="hero-banner relative mx-auto w-full max-w-xl lg:max-w-none">
          <!-- Resplandor animado -->
          <div
            class="hero-banner__glow absolute -inset-3 rounded-[2rem] bg-pink-500/15 blur-2xl"
          ></div>

          <div
            class="hero-banner__frame relative overflow-hidden rounded-[2rem] border border-white/10 bg-blue-900 shadow-2xl shadow-blue-950/50"
          >
            <img
              :src="heroBanner"
              alt="Oso polar trabajando en una laptop junto a servicios digitales"
              class="hero-banner__image aspect-[4/3] h-full w-full object-cover object-center"
              loading="eager"
              fetchpriority="high"
            />

            <!-- Brillo sutil -->
            <div
              class="hero-banner__shine pointer-events-none absolute inset-0"
              aria-hidden="true"
            ></div>

            <!-- Borde inferior -->
            <div class="absolute inset-x-0 bottom-0 flex h-1">
              <div class="w-2/3 bg-pink-500"></div>
              <div class="w-1/3 bg-blue-500"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Beneficios -->
      <div class="mt-20 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-16">
        <div
          class="group hero-benefit-secondary"
        >
          <div
            class="hero-benefit-icon bg-pink-500 shadow-pink-950/20"
          >
            <span class="material-symbols-outlined text-2xl"> chat </span>
          </div>

          <div>
            <p class="text-sm font-bold text-white">Atención directa</p>

            <p class="mt-1 text-xs leading-5 text-blue-200">
              Comunicación por WhatsApp
            </p>
          </div>
        </div>

        <div
          class="group hero-benefit-accent"
        >
          <div
            class="hero-benefit-icon bg-blue-600 shadow-blue-950/20"
          >
            <span class="material-symbols-outlined text-2xl">
              design_services
            </span>
          </div>

          <div>
            <p class="text-sm font-bold text-white">Diseño personalizado</p>

            <p class="mt-1 text-xs leading-5 text-blue-200">
              Adaptado a tu negocio
            </p>
          </div>
        </div>

        <div
          class="group hero-benefit-secondary"
        >
          <div
            class="hero-benefit-icon bg-pink-500 shadow-pink-950/20"
          >
            <span class="material-symbols-outlined text-2xl"> devices </span>
          </div>

          <div>
            <p class="text-sm font-bold text-white">Soluciones modernas</p>

            <p class="mt-1 text-xs leading-5 text-blue-200">
              Web, catálogos e IA
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Transición -->
    <div class="decorative-stripe">
      <div class="w-2/3 bg-pink-500"></div>
      <div class="w-1/3 bg-blue-600"></div>
    </div>
  </section>
</template>
