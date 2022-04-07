import cellphone from '../public/assets/icons/IconPhoneNumber.svg';
import mail from '../public/assets/icons/IconMessage.svg';
import mapMark from '../public/assets/icons/IconUbication.svg';
import facebook from '../public/assets/icons/IconFacebook.svg';
import instagram from '../public/assets/icons/IconInstagram.svg';
import twitter from '../public/assets/icons/IconTwitter.svg';

export const footer = [
  {
    title: 'Contáctanos',
    item1: 'Bogota, Colombia',
    icon1: mapMark,
    href1: null,
    alt1: 'map mark icon',
    item2: 'info@fundmadre.com',
    icon2: mail,
    href2: null,
    alt2: 'mail icon',
    item3: '(+57) 311 4717306',
    icon3: cellphone,
    href3: null,
    alt3: 'cellphone icon'
  },
  {
    title: 'Nosotros',
    item1: '¿Quiénes somos?',
    icon1:  null,
    href1: "/quienes-somos",
    item2: '¿Qué hacemos?',
    icon2:  null,
    href2: "/que-hacemos",
    item3: 'Contáctanos',
    icon3:  null,
    href3: "/contactanos",
  },
  {
    title: 'Síguenos',
    item1: '/fundmadre',
    icon1: facebook,
    href1: "https://www.facebook.com/fundmadre/",
    item2: '/fundmadre',
    icon2: instagram,
    href2: "https://www.instagram.com/fundmadre/?hl=es-la",
    item3: '@fundmadre',
    icon3: twitter,
    href3: "https://www.facebook.com/fundmadre/",

  }
]