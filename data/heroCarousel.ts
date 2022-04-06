import mothersGroup from '../public/assets/sliders/main-slider/picture-1.jpg';
import voluntaryGroup from '../public/assets/sliders/main-slider/picture-2.jpg';
import kitGroup from '../public/assets/sliders/main-slider/picture-3.jpg'

const carouselImages = [
  {
    title: 'grupo de madres',
    image: mothersGroup,
  },
  {
    title: 'Voluntariado',
    image: voluntaryGroup,
  },
  {
    title: 'Kit de madres ',
    image: kitGroup,
  },
];

export const forms = {

  GropMothersTab: [
    {
      message: 'Queremos Apoyar, Acompañar y Asesorar a MÁS Madres Embarazadas.  DONA!',
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