<script setup>
import { COMPANY_INFO } from "@/constants/company";
</script>

<template>
  <section id="about" class="bg-pink-50 py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="grid items-center gap-10 rounded-[2rem] border border-pink-100 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <!-- Contenido -->
        <div>
          <div
            class="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-600"
          >
            <span class="material-symbols-outlined text-base">
              storefront
            </span>

            Pensado para pequeños negocios
          </div>

          <h2
            class="mt-5 max-w-2xl text-3xl font-black tracking-tight text-blue-950 sm:text-4xl"
          >
            Tecnología simple para hacer crecer tu
            <span class="text-pink-500">negocio</span>
          </h2>

          <p class="mt-5 max-w-2xl text-base leading-7 text-blue-900/70">
            En {{ COMPANY_INFO.name }} ayudamos a pequeñas empresas,
            emprendimientos y comercios a mejorar su presencia digital sin
            procesos complicados ni soluciones innecesarias.
          </p>

          <p class="mt-4 max-w-2xl text-base leading-7 text-blue-900/70">
            Creamos herramientas claras, modernas y adaptadas a cada negocio,
            para que puedas mostrar tus productos, responder mejor a tus
            clientes y generar nuevas oportunidades de venta.
          </p>

          <div class="mt-7 flex flex-wrap gap-3">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-950"
            >
              <span class="material-symbols-outlined text-lg text-blue-600">
                check_circle
              </span>
              Atención directa
            </span>

            <span
              class="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-bold text-blue-950"
            >
              <span class="material-symbols-outlined text-lg text-pink-500">
                check_circle
              </span>
              Soluciones a medida
            </span>

            <span
              class="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-950"
            >
              <span class="material-symbols-outlined text-lg text-blue-600">
                check_circle
              </span>
              Fácil de administrar
            </span>
          </div>
        </div>

        <!-- Bloque diferencial -->
        <aside
          class="relative overflow-hidden rounded-3xl bg-blue-950 p-7 text-white sm:p-9"
        >
          <div
            class="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-pink-500"
          ></div>

          <div class="relative z-10">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500 text-white"
            >
              <span class="material-symbols-outlined text-3xl">
                trending_up
              </span>
            </div>

            <h3 class="mt-6 text-2xl font-black">
              Más presencia, más oportunidades
            </h3>

            <p class="mt-4 text-sm leading-6 text-blue-100">
              Una buena presencia digital permite que más personas encuentren tu
              negocio, conozcan tus productos y se comuniquen contigo
              fácilmente.
            </p>

            <div class="mt-7 space-y-4">
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined mt-0.5 text-pink-400">
                  visibility
                </span>

                <div>
                  <p class="font-bold text-white">Mejor presentación</p>
                  <p class="mt-1 text-sm text-blue-200">
                    Tu negocio se ve más profesional y confiable.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined mt-0.5 text-pink-400">
                  forum
                </span>

                <div>
                  <p class="font-bold text-white">Contacto más rápido</p>
                  <p class="mt-1 text-sm text-blue-200">
                    Tus clientes pueden escribirte sin complicaciones.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined mt-0.5 text-pink-400">
                  shopping_bag
                </span>

                <div>
                  <p class="font-bold text-white">Más posibilidades de venta</p>
                  <p class="mt-1 text-sm text-blue-200">
                    Tus productos y servicios están disponibles en todo momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
