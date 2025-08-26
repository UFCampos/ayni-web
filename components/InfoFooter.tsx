import Logo from '@/public/logo.png'
import Image from 'next/image'
import IconSocial from './IconSocial'
import { useLanguage } from '@/app/languageProvider'

const InfoFooter = (): JSX.Element => {
  const year = new Date().getFullYear()
  const { language } = useLanguage()
  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Abya Yala DAO',
      es: 'Abya Yala DAO',
      pt: 'Abya Yala DAO'
    },
    2: {
      en: 'Abya Yala DAO | All rights reserved',
      es: 'Abya Yala DAO | Todos los derechos reservados',
      pt: 'Abya Yala DAO | Todos os direitos reservados'
    },
    3: {
      en: 'Legal Compliance',
      es: 'Cumplimiento Legal',
      pt: 'Conformidade Legal'
    },
    4: {
      en: 'Privacy policy',
      es: 'Política de Privacidad',
      pt: 'Política de Privacidade'
    },
    5: {
      en: 'Terms & Conditions',
      es: 'Términos y Condiciones',
      pt: 'Termos e Condições'
    },
    6: {
      en: 'Connect with us',
      es: 'Conecta con nosotros',
      pt: 'Conecte-se conosco'
    }
  }
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 place-items-center">
        <div className="flex items-center gap-4 order-1">
          <div className="relative">
            <Image
              className="h-12 w-12 rounded-full shadow-lg shadow-white/20"
              src={Logo}
              alt="Abya Yala DAO logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <h1 className="text-2xl font-bold drop-shadow-[0px_0px_7px_rgba(255,255,255,0.8)]">{text[1][language]}</h1>
        </div>

        <nav className="order-2 md:order-2" aria-label="Social media links">
          <IconSocial className="[&_svg]:fill-black drop-shadow-[0px_0px_7px_rgba(255,255,255,0.8)]" />
        </nav>

        <div className="flex flex-col items-center space-y-2 text-center drop-shadow-lg order-3 md:order-3">
          <p className="text-sm md:text-base">
            © {year} {text[2][language]}
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm" aria-label="Legal links">
            <a
              href="#"
              className="transition-colors hover:text-blue-200"
              aria-label="View legal compliance information"
            >
              {text[3][language]}
            </a>
            <span className="text-white/60">|</span>
            <a href="#" className="transition-colors hover:text-blue-200" aria-label="View privacy policy">
              {text[4][language]}
            </a>
          </nav>

          <a
            className="text-xs md:text-sm transition-colors hover:text-blue-200"
            href="#"
            aria-label="View terms and conditions"
          >
            {text[5][language]}
          </a>
          <a
            className="text-xs md:text-sm transition-colors hover:text-blue-200 font-semibold"
            href="https://www.shambhala.eu.com "
            aria-label="Connect with us"
            target="_blank"
            rel="noreferrer"
          >
            {text[6][language]}
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoFooter
