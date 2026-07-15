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
      class="pointer-events-none absolute inset-0 opacity-[0.06]"
      style="
        background-image: radial-gradient(
          circle at center,
          white 1px,
          transparent 1px
        );
        background-size: 28px 28px;
      "
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-pink-400/50 hover:bg-white/10 hover:text-pink-300"
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
          class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-left backdrop-blur-sm transition hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/10"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500 text-white shadow-md shadow-pink-950/20"
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
          class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-left backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-950/20"
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
          class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-left backdrop-blur-sm transition hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/10"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500 text-white shadow-md shadow-pink-950/20"
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
    <div class="absolute inset-x-0 bottom-0 flex h-1">
      <div class="w-2/3 bg-pink-500"></div>
      <div class="w-1/3 bg-blue-600"></div>
    </div>
  </section>
</template>

<style scoped>
@keyframes hero-banner-float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-7px) rotate(0.25deg);
  }
}

@keyframes hero-banner-saturation {
  0%,
  100% {
    filter: saturate(1.1) contrast(1);
    transform: scale(1);
  }

  50% {
    filter: saturate(1.28) contrast(1.02);
    transform: scale(1.012);
  }
}

@keyframes hero-banner-glow {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.98);
  }

  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

@keyframes hero-banner-shine {
  0% {
    transform: translateX(-220%) skewX(-18deg);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  45% {
    transform: translateX(420%) skewX(-18deg);
    opacity: 1;
  }

  55%,
  100% {
    transform: translateX(420%) skewX(-18deg);
    opacity: 0;
  }
}

.hero-banner__shine {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 28%;

  background: linear-gradient(
    90deg,
    transparent,
    rgb(255 255 255 / 0.14),
    transparent
  );

  animation: hero-banner-shine 7s ease-in-out infinite;
  will-change: transform, opacity;
}

.hero-banner {
  animation: hero-banner-float 6s ease-in-out infinite;
  will-change: transform;
}

.hero-banner__frame {
  transform: translateZ(0);
}

.hero-banner__image {
  animation: hero-banner-saturation 5s ease-in-out infinite;
  will-change: filter, transform;
}

.hero-banner__glow {
  animation: hero-banner-glow 5s ease-in-out infinite;
  will-change: opacity, transform;
}

.hero-banner__shine {
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent,
    rgb(255 255 255 / 0.12),
    transparent
  );
  animation: hero-banner-shine 7s ease-in-out infinite;
}

/* Interacción adicional en escritorio */
.hero-banner:hover {
  animation-play-state: paused;
  transform: translateY(-5px);
}

.hero-banner:hover .hero-banner__image {
  animation-play-state: paused;
  filter: saturate(1.3) contrast(1.03);
  transform: scale(1.018);
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .hero-banner,
  .hero-banner__image,
  .hero-banner__glow,
  .hero-banner__shine {
    animation: none;
  }

  .hero-banner__image {
    filter: saturate(1.15);
    transform: none;
  }

  .hero-banner:hover {
    transform: none;
  }
}
</style>
