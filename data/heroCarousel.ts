import planPadrinos from '../public/assets/sliders/main-slider/Portada_3.jpg';
import kitDeMadres from '../public/assets/sliders/main-slider/Portada_1.jpg';
import siguenos from '../public/assets/sliders/main-slider/Portada_2.jpg'
import contacteConNosotros from '../public/assets/sliders/main-slider/Portada_5.jpg'

const carouselImages = [
  {
    title: 'Plan padrinos',
    image: planPadrinos,
    message: 'Conoce más sobre nuestro plan padrinos dando click en el botón',
    href: 'https://api.whatsapp.com/send/?phone=573202408953&text&app_absent=0&text=Hola%2C%20escribo%20desde%20la%20web%20de%20FundaMadre%20por%20el%20plan%20padrinos',
    textBtn: 'Conoce más'
  },
  {
    title: 'Kit de madres',
    image: kitDeMadres,
    message: 'Conoce más sobre nuestros kit de ayuda a madres',
    href: 'https://api.whatsapp.com/send/?phone=573202408953&text&app_absent=0&text=Hola%2C%20escribo%20desde%20la%20web%20de%20FundaMadre%20por%20los%20informacion%20sobre%20los%20kits',
    textBtn: 'Conoce más'
  },
  {
    title: 'Siguenos',
    image: siguenos,
    message: 'Siguenos para saber más de nuestro trabajo',
    href: 'https://www.instagram.com/fundmadre',
    textBtn: 'Conoce más'
  },
  {
    title: 'Conectate con nostros',
    image: contacteConNosotros,
    message: 'Siguenos para saber más de nuestro trabajo',
    href: 'https://www.youtube.com/watch?v=HB9K9Uo8kXM',
    textBtn: 'Conoce más'
  },
];

export const forms = {

  GropMothersTab: [
    {
      message: 'Queremos Apoyar, Acompañar y Asesorar a más madres Embarazadas.  DONA!',
      title: "Pon tu granito de arena",
    }
  ],

  firstInputsRow: [
    {
      type: 'button',
      text: '$10.000',
      value: '$10.000',
    },
    {
      type: 'button',
      text: '$20.000',
      value: '$20.000',
    },
    {
      type: 'button',
      text: '$30.000',
      value: '$30.000',
    },
    {
      type: 'button',
      text: 'Otra cantidad',
      value: 'Otra cantidad',
    },
  ],
  secondRow: [
    {
      type: 'text',
      placeholder: 'Name',
      value: '',
    }
  ],
  VoluntaryTab: [
    {
      message: 'Voluntariado ipsum dolor sit amet, consectetur adipiscing elit.',
      title: "Ayúdanos"
    }
  ],

  VoluntaryFirstInputsRow: [
    {
      type: 'text',
      placeholder: 'Full Name',
      value: '',
    },
    {
      type: 'text',
      placeholder: 'Profession',
      value: '',
    }
  ],
  KitTab: [
    {
      message: 'kit Lorem ipsun Dolor sit amet, consectetur adipiscing elit.',
      title: 'Apoya a una madre'
    }
  ],
  KitfirstInputsRow: [
    {
      type: 'button',
      text: 'Kit 1',
      value: 'Kit 1',
    },
    {
      type: 'button',
      text: 'Kit 2',
      value: 'Kit 2',
    },
    {
      type: 'button',
      text: 'Kit 3',
      value: 'Kit 3',
    },
  ],
  KitSecondInputRow: [
    {
      type: 'text',
      placeholder: 'Full name',
      value: '',
    }
  ]
}

export const heroCarousel = {
  carouselImages,
  donationForm: forms,
}