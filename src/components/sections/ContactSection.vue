<script setup>
import { COMPANY_INFO } from "@/constants/company";
</script>

<template>
  <section
    id="contact"
    class="relative isolate overflow-hidden bg-blue-950 py-20 sm:py-24"
  >
    <!-- Fondo decorativo -->
    <div
      class="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl"
    ></div>
    <div
      class="dot-pattern pointer-events-none absolute inset-0 opacity-[0.05]"
    ></div>

    <div class="section-container">
      <div class="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <!-- Mensaje principal -->
        <div class="text-center lg:text-left">
          <h2
            class="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Tu negocio puede dar el
            <span class="text-pink-400">siguiente paso digital</span>
          </h2>

          <p
            class="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg lg:mx-0"
          >
            Cuéntanos qué necesitas y te ayudaremos a encontrar una solución
            clara, funcional y adaptada a tu negocio.
          </p>
        </div>

        <!-- Tarjeta de contacto -->
        <div
          class="relative overflow-hidden rounded-3xl border border-white/15 bg-white p-6 shadow-2xl shadow-blue-950/40 sm:p-8"
        >
          <!-- Línea superior -->
          <div class="absolute inset-x-0 top-0 flex h-1.5">
            <div class="w-2/3 bg-pink-500"></div>
            <div class="w-1/3 bg-blue-600"></div>
          </div>

          <!-- Encabezado compacto -->
          <div class="border-b border-slate-100 pb-5">
            <p
              class="text-xs font-bold uppercase tracking-[0.2em] text-pink-500"
            >
              Contacto directo
            </p>

            <h3 class="mt-2 text-xl font-black text-blue-950 sm:text-2xl">
              Escríbenos o llámanos
            </h3>

            <p class="mt-2 text-sm leading-6 text-slate-500">
              Elige el medio que te resulte más cómodo para contarnos sobre tu
              negocio.
            </p>
          </div>

          <!-- Contactos principales -->
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <!-- Teléfono -->
            <a
              :href="`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`"
              class="group contact-option-secondary"
            >
              <div
                class="contact-option-icon bg-pink-500"
              >
                <span class="material-symbols-outlined text-2xl"> call </span>
              </div>

              <p
                class="contact-option-label text-pink-600"
              >
                Teléfono
              </p>

              <p class="mt-2 text-xl font-black tracking-tight text-blue-950">
                <span class="mr-1 text-pink-600">+51</span>
                {{
                  COMPANY_INFO.phone
                    .slice(2)
                    .replace(/\s/g, "")
                    .replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3")
                }}
              </p>

              <p class="contact-option-description">
                Atención directa para consultas sobre nuestros servicios.
              </p>

              <span
                class="contact-option-link text-pink-700"
              >
                Llamar ahora

                <span class="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </span>
            </a>

            <!-- Correo -->
            <a
              :href="`mailto:${COMPANY_INFO.email}`"
              class="group contact-option-accent"
            >
              <div
                class="contact-option-icon bg-blue-600"
              >
                <span class="material-symbols-outlined text-2xl"> mail </span>
              </div>

              <p
                class="contact-option-label text-blue-700"
              >
                Correo
              </p>

              <p
                class="mt-2 break-all text-lg font-black leading-6 text-blue-950"
              >
                {{ COMPANY_INFO.email }}
              </p>

              <p class="contact-option-description">
                Envíanos los detalles de tu proyecto o una consulta comercial.
              </p>

              <span
                class="contact-option-link text-blue-700"
              >
                Enviar correo

                <span class="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </span>
            </a>
          </div>

          <!-- Dirección secundaria -->
          <div
            class="mt-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-950 text-white"
            >
              <span class="material-symbols-outlined text-xl">
                location_on
              </span>
            </div>

            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.16em] text-slate-400"
              >
                Ubicación
              </p>

              <p class="mt-1 text-sm font-bold text-blue-950">
                {{ COMPANY_INFO.address }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
