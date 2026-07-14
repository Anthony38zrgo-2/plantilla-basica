<script setup>
import { COMPANY_INFO } from '@/constants/company'
import WhatsAppButton from '@/components/ui/WhatsAppButton.vue'
</script>

<template>
  <section id="contact" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contáctanos</h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          ¿Tienes alguna pregunta o estás listo para comenzar? Ponte en contacto con nosotros.
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Detalles de Contacto</h3>
        <div class="space-y-4 text-gray-600 mb-8">
          <p><strong>Dirección:</strong> {{ COMPANY_INFO.address }}</p>
          <p><strong>Teléfono:</strong> {{ COMPANY_INFO.phone }}</p>
          <p><strong>Email:</strong> {{ COMPANY_INFO.email }}</p>
        </div>
        <div>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  </section>
</template>
