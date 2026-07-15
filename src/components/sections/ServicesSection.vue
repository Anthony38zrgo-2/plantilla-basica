<template>
  <section
    id="services"
    class="relative z-10 bg-slate-900 py-16 shadow-[0_24px_48px_-16px_rgba(2,6,23,0.8)] sm:py-20"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="mx-auto max-w-3xl text-center">
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
          class="group flex h-full flex-col rounded-3xl border border-pink-200 bg-pink-50 p-7 text-blue-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl"
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

          <h3 class="mt-2 text-2xl font-black leading-tight">
            WhatsApp Business con IA
          </h3>

          <p class="mt-4 text-sm leading-6 text-slate-600">
            Organiza las consultas de tus clientes y brinda respuestas más
            rápidas, claras y profesionales.
          </p>

          <ul class="mt-6 space-y-3 text-sm text-slate-700">
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
            class="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-pink-700 transition hover:gap-3 hover:text-blue-950"
          >
            Consultar servicio
            <span class="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </article>

        <!-- Página web -->
        <article
          class="group flex h-full flex-col rounded-3xl border border-blue-200 bg-blue-50 p-7 text-blue-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
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

          <h3 class="mt-2 text-2xl font-black leading-tight">
            Página web con código QR
          </h3>

          <p class="mt-4 text-sm leading-6 text-slate-600">
            Presenta tu negocio en una página moderna, rápida y preparada para
            verse correctamente desde celulares.
          </p>

          <ul class="mt-6 space-y-3 text-sm text-slate-700">
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
            class="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-blue-700 transition hover:gap-3 hover:text-blue-950"
          >
            Consultar servicio
            <span class="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </article>

        <!-- Catálogo virtual -->
        <article
          class="group flex h-full flex-col rounded-3xl border border-violet-200 bg-violet-50 p-7 text-blue-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
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

          <h3 class="mt-2 text-2xl font-black leading-tight">
            Catálogo virtual e imágenes
          </h3>

          <p class="mt-4 text-sm leading-6 text-slate-600">
            Exhibe tus productos de forma ordenada y atractiva mediante un
            catálogo fácil de consultar y compartir.
          </p>

          <ul class="mt-6 space-y-3 text-sm text-slate-700">
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
            class="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-violet-700 transition hover:gap-3 hover:text-blue-950"
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
