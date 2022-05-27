import cellphone from '../public/assets/icons/IconPhoneNumber.svg';
import mail from '../public/assets/icons/IconMessage.svg';
import mapMark from '../public/assets/icons/IconUbication.svg';
import facebook from '../public/assets/icons/IconFacebook.svg';
import instagram from '../public/assets/icons/IconInstagram.svg';
import youtube from '../public/assets/icons/youtube.svg';
import whatsapp from '../public/assets/icons/IconTwitter.svg';


export const footerData = [
  {
    title: 'Contáctanos',
    items: [{ icon: mapMark, item: 'Bogotá - Colombia' },
            { icon: mail, item: 'info@fundmadre.com' },
            { icon: cellphone, item: '(+57) 320 2408953' }],
    alts: ['map mark icon', 'mail icon', 'cellphone icon'],
  },
]

export const footerSocial = [
  {
    title: 'Síguenos',
    items: [{ icon: facebook, item: null, href: 'https://www.facebook.com/fundmadre/' },
            { icon: instagram, item: null, href: 'https://www.instagram.com/fundmadre/?hl=es-la' },
            { icon: youtube, item: null, href: 'https://www.youtube.com/channel/UCS-u6qczV5lLw8qMxUbS79g' }],
    alts: ['facebook icon', 'instagram icon', 'twitter icon'],
  },
]

export const footerWe = [
  {
    title: 'Nosotros',
    items: [{ icon: null, item: '¿Quiénes somos?', href: '/quienes-somos' },
            { icon: null, item: '¿Comó ayudar?', href: '/como-ayudar' },
            { icon: null, item: 'Contáctanos', href: '/contactanos' }],
    alts: null,
    href: ["/quienes-somos", "/que-hacemos", "/contactanos"]
  }
]

export const copyright = [
  {
    text: "© 2022 Fundmadre, Fundacion vida, madre nuevas generaciones",
  }
]
