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
    alt1: 'map mark icon',
    item2: 'info@fundmadre.com',
    icon2: mail,
    alt2: 'mail icon',
    item3: '(+57) 311 4717306',
    icon3: cellphone,
    alt3: 'cellphone icon'
  },
  {
    title: 'Nosotros',
    item1: '¿Quiénes somos?',
    icon1:  null,
    item2: '¿Qué hacemos?',
    icon2:  null,
    item3: 'Contáctanos',
    icon3:  null,
  },
  {
    title: 'Síguenos',
    item1: '/fundmadre',
    icon1: facebook,
    item2: '/fundmadre',
    icon2: instagram,
    item3: '@fundmadre',
    icon3: twitter,
  }
]