<script setup>
import { COMPANY_INFO } from '@/constants/company'
</script>

<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sobre Nosotros</h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Conoce más sobre nuestra historia, misión y valores.
        </p>
      </div>
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 class="text-2xl font-bold text-gray-900">¿Quiénes somos?</h3>
          <p class="mt-4 text-gray-600">
            Somos una empresa dedicada a brindar los mejores servicios y soluciones para nuestros clientes. En {{ COMPANY_INFO.name }} nos esforzamos por mantener los más altos estándares de calidad.
          </p>
          <p class="mt-4 text-gray-600">
            Ubicados en {{ COMPANY_INFO.address }}, atendemos con compromiso y profesionalismo cada uno de tus requerimientos.
          </p>
        </div>
        <div class="bg-gray-100 rounded-2xl h-64 flex items-center justify-center text-gray-400">
          [Imagen de la empresa]
        </div>
      </div>
    </div>
  </section>
</template>
