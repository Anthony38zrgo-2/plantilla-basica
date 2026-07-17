<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useWhatsApp } from "@/composables/useWhatsApp";

const { createWhatsAppUrl, whatsappUrl } = useWhatsApp();
const isOpen = ref(false);
const widget = ref(null);
const whatsappButton = ref(null);

const services = [
  {
    label: "Necesito ayuda con WhatsApp Business",
    message:
      "Hola, necesito ayuda con WhatsApp Business. Quisiera obtener más información sobre este servicio.",
  },
  {
    label: "Quiero una página web",
    message:
      "Hola, quiero una página web. Quisiera obtener más información sobre este servicio.",
  },
  {
    label: "Quiero un catálogo virtual",
    message:
      "Hola, quiero un catálogo virtual. Quisiera obtener más información sobre este servicio.",
  },
  {
    label: "Necesito otro servicio digital",
    message:
      "Hola, necesito otro servicio digital. Quisiera contarles mi idea y recibir más información.",
  },
].map((service) => ({
  ...service,
  href: createWhatsAppUrl(service.message),
}));

function handleWhatsAppButtonClick() {
  if (!isOpen.value) {
    isOpen.value = true;
    return;
  }

  isOpen.value = false;
  window.open(whatsappUrl.value, "_blank", "noopener,noreferrer");
}

function closeMenu({ restoreFocus = false } = {}) {
  isOpen.value = false;

  if (restoreFocus) {
    whatsappButton.value?.focus();
  }
}

function handleOutsideClick(event) {
  if (isOpen.value && !widget.value?.contains(event.target)) {
    closeMenu();
  }
}

function handleKeydown(event) {
  if (event.key === "Escape" && isOpen.value) {
    closeMenu({ restoreFocus: true });
  }
}

onMounted(() => {
  document.addEventListener("pointerdown", handleOutsideClick);
  document.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", handleOutsideClick);
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div ref="widget" class="whatsapp-widget">
    <aside
      id="whatsapp-services"
      :class="['whatsapp-menu', { 'is-open': isOpen }]"
      aria-label="Servicios disponibles por WhatsApp"
      :aria-hidden="!isOpen"
    >
      <div class="whatsapp-menu-header">
        <div>
          <p class="whatsapp-menu-title">¡Contacta con nosotros!</p>
          <p class="whatsapp-menu-description">
            Haz clic en el servicio sobre el que deseas obtener más información.
          </p>
        </div>

        <button
          type="button"
          class="whatsapp-close-button"
          aria-label="Cerrar opciones de WhatsApp"
          title="Cerrar"
          @click="closeMenu({ restoreFocus: true })"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <nav class="whatsapp-service-list" aria-label="Seleccionar un servicio">
        <a
          v-for="service in services"
          :key="service.label"
          :href="service.href"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-service-option"
        >
          <span>{{ service.label }}</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m9 18 6-6-6-6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </nav>
    </aside>

    <button
      ref="whatsappButton"
      type="button"
      :aria-label="
        isOpen
          ? 'Abrir conversación en WhatsApp'
          : 'Mostrar opciones de WhatsApp'
      "
      :aria-expanded="isOpen"
      aria-controls="whatsapp-services"
      :title="
        isOpen
          ? 'Abrir conversación en WhatsApp'
          : 'Mostrar opciones de WhatsApp'
      "
      class="whatsapp-floating-button"
      @click="handleWhatsAppButtonClick"
    >
      <svg
        class="h-7 w-7"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 7.021 2.91 9.825 9.825 0 0 1 2.897 7.027c-.003 5.45-4.437 9.884-9.922 9.884"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.whatsapp-widget {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 9999;
}

.whatsapp-menu {
  position: absolute;
  right: 0;
  bottom: calc(100% + 0.75rem);
  width: min(22rem, calc(100vw - 2rem));
  overflow: hidden;
  border: 1px solid rgb(226 232 240);
  border-radius: 1.25rem;
  background: white;
  box-shadow: 0 20px 45px rgb(15 23 42 / 0.2);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(0.75rem) scale(0.96);
  transform-origin: bottom right;
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 180ms ease;
}

.whatsapp-menu.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.whatsapp-menu-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem;
  color: white;
  background: linear-gradient(135deg, #16a34a, #22c55e);
}

.whatsapp-close-button {
  display: flex;
  width: 2rem;
  height: 2rem;
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  color: white;
  background: rgb(20 83 45 / 0.35);
  transition: background-color 150ms ease, transform 150ms ease;
}

.whatsapp-close-button:hover,
.whatsapp-close-button:focus-visible {
  background: rgb(20 83 45 / 0.7);
  outline: 2px solid white;
  outline-offset: 2px;
  transform: scale(1.08);
}

.whatsapp-close-button svg {
  width: 1rem;
  height: 1rem;
}

.whatsapp-menu-title {
  font-size: 1rem;
  font-weight: 800;
}

.whatsapp-menu-description {
  margin-top: 0.35rem;
  font-size: 0.8rem;
  line-height: 1.25rem;
  color: rgb(240 253 244);
}

.whatsapp-service-list {
  display: grid;
  gap: 0.5rem;
  padding: 0.75rem;
}

.whatsapp-service-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 0.9rem;
  border-radius: 0.8rem;
  color: rgb(30 41 59);
  font-size: 0.83rem;
  font-weight: 700;
  line-height: 1.15rem;
  transition: background-color 150ms ease, color 150ms ease;
}

.whatsapp-service-option:hover,
.whatsapp-service-option:focus-visible {
  color: rgb(20 83 45);
  background: rgb(220 252 231);
  box-shadow: inset 0 0 0 2px rgb(34 197 94);
  outline: none;
}

.whatsapp-service-option svg {
  width: 1rem;
  height: 1rem;
  flex: none;
  transition: transform 150ms ease;
}

.whatsapp-service-option:hover svg,
.whatsapp-service-option:focus-visible svg {
  transform: translateX(0.2rem);
}

@media (min-width: 640px) {
  .whatsapp-widget {
    right: 1.75rem;
    bottom: 1.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .whatsapp-menu,
  .whatsapp-close-button,
  .whatsapp-service-option,
  .whatsapp-service-option svg {
    transition: none;
  }
}
</style>
