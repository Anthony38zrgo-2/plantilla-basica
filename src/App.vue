<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import WhatsAppButton from "./components/ui/WhatsAppButton.vue";
</script>

<template>
  <div class="page-shell">
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>

    <AppFooter />
    <WhatsAppButton />
  </div>
</template>
