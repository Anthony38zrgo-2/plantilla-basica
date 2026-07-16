<template>
  <section
    id="services"
    class="relative z-10 bg-slate-900 py-16 shadow-[0_24px_48px_-16px_rgba(2,6,23,0.8)] sm:py-20"
  >
    <div class="page-container">
      <!-- Encabezado -->
      <div class="section-header">
        <span
          class="text-xs font-bold uppercase tracking-[0.2em] text-pink-300"
        >
          Nuestros servicios
        </span>

        <h2
          class="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Soluciones digitales para
          <span class="text-pink-400">pequeños negocios</span>
        </h2>

        <p
          class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
        >
          Herramientas simples y prácticas para atender mejor a tus clientes,
          presentar tus productos y fortalecer la presencia digital de tu
          negocio.
        </p>
      </div>

      <!-- Servicios -->
      <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <!-- WhatsApp Business -->
        <article
          class="group service-card-secondary"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500 text-white shadow-sm"
          >
            <span class="material-symbols-outlined text-3xl"> chat </span>
          </div>

          <p
            class="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-pink-600"
          >
            Atención al cliente
          </p>

          <h3 class="service-title">
            WhatsApp Business con IA
          </h3>

          <p class="service-description">
            Organiza las consultas de tus clientes y brinda respuestas más
            rápidas, claras y profesionales.
          </p>

          <ul class="feature-list text-slate-700">
            <li class="flex items-start gap-2">
              <span
                class="material-symbols-outlined mt-0.5 text-lg text-pink-600"
              >
                check_circle
              </span>
              Respuestas para consultas frecuentes
            </li>

            <li class="flex items-start gap-2">
              <span
                class="material-symbols-outlined mt-0.5 text-lg text-pink-600"
              >
                check_circle
              </span>
              Información comercial organizada
            </li>

            <li class="flex items-start gap-2">
              <span
                class="material-symbols-outlined mt-0.5 text-lg text-pink-600"
              >
                check_circle
              </span>
              Atención directa y eficiente
            </li>
          </ul>

          <a
            href="#contact"
            class="service-link text-pink-700"
          >
            Consultar servicio
            <span class="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </article>

        <!-- Página web -->
        <article
          class="group service-card-accent"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm"
          >
            <span class="material-symbols-outlined text-3xl"> language </span>
          </div>

          <p
            class="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-700"
          >
            Presencia digital
          </p>

          <h3 class="service-title">
            Página web con código QR
          </h3>

          <p class="service-description">
            Presenta tu negocio en una página moderna, rápida y preparada para
            verse correctamente desde celulares.
          </p>

          <ul class="feature-list text-slate-700">
            <li class="flex items-start gap-2">
              <span
                class="material-symbols-outlined mt-0.5 text-lg text-blue-700"
              >
                check_circle
              </span>
              Diseño adaptable a distintos dispositivos
            </li>

            <li class="flex items-start gap-2">
              <span
                class="material-symbols-outlined mt-0.5 text-lg text-blue-700"
              >
                check_circle
              </span>
              Acceso mediante enlace y código QR
            </li>

            <li class="flex items-start gap-2">
              <span
                class="material-symbols-outlined mt-0.5 text-lg text-blue-700"
              >
                check_circle
              </span>
              Información disponible en todo momento
            </li>
          </ul>

          <a
            href="#contact"
            class="service-link text-blue-700"
          >
            Consultar servicio
            <span class="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </article>

        <!-- Catálogo virtual -->
        <article
          class="group service-card-tertiary"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-sm"
          >
            <span class="material-symbols-outlined text-3xl">
              inventory_2
            </span>
          </div>

          <p
            class="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-violet-700"
          >
            Productos y presentación
          </p>

          <h3 class="service-title">
            Catálogo virtual e imágenes
          </h3>

          <p class="service-description">
            Exhibe tus productos de forma ordenada y atractiva mediante un
            catálogo fácil de consultar y compartir.
          </p>

          <ul class="feature-list text-slate-700">
            <li class="flex items-start gap-2">
              <span
                class="material-symbols-outlined mt-0.5 text-lg text-violet-700"
              >
                check_circle
              </span>
              Productos organizados por categorías
            </li>

            <li class="flex items-start gap-2">
              <span
                class="material-symbols-outlined mt-0.5 text-lg text-violet-700"
              >
                check_circle
              </span>
              Imágenes claras y consistentes
            </li>

            <li class="flex items-start gap-2">
              <span
                class="material-symbols-outlined mt-0.5 text-lg text-violet-700"
              >
                check_circle
              </span>
              Fácil de enviar a tus clientes
            </li>
          </ul>

          <a
            href="#contact"
            class="service-link text-violet-700"
          >
            Consultar servicio
            <span class="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </article>
      </div>

      <p class="mx-auto mt-9 max-w-2xl text-center text-sm text-slate-400">
        Puedes comenzar con un solo servicio o combinar los tres según las
        necesidades y el presupuesto de tu negocio.
      </p>
    </div>
  </section>
</template>
