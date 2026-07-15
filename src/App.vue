<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800">
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>
