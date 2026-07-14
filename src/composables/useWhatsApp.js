import { computed } from 'vue'
import { COMPANY_INFO } from '@/constants/company'

export function useWhatsApp() {
  const whatsappUrl = computed(() => {
    const phone = COMPANY_INFO.phone.replace(/\D/g, '')
    const message = encodeURIComponent(COMPANY_INFO.whatsappMessage)

    return `https://wa.me/${phone}?text=${message}`
  })

  return {
    whatsappUrl,
  }
}
