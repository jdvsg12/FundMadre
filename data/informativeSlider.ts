import psychology1 from '../public/assets/sliders/informative-slider/psychology-1.jpg';
import psychology2 from '../public/assets/sliders/informative-slider/psychology-2.png';
import iconoPsychology from '../public/assets/icons/psychology.svg';
import entrepreneurship1 from '../public/assets/sliders/informative-slider/entrepreneurship-1.jpg';
import entrepreneurship2 from '../public/assets/sliders/informative-slider/entrepreneurship-2.jpg';
import entrepreneurship3 from '../public/assets/sliders/informative-slider/entrepreneurship-3.jpg';
import iconoEntrepreneurship from '../public/assets/icons/entrepreneurship.svg'
import values1 from '../public/assets/sliders/informative-slider/values_1.jpg';
import values2 from '../public/assets/sliders/informative-slider/values_2.jpg';
import values3 from '../public/assets/sliders/informative-slider/values_3.jpg';
import values4 from '../public/assets/sliders/informative-slider/values_4.jpg';
import iconoValueSpirituality from '../public/assets/icons/valueSpirituality.svg'
import postpartum1 from '../public/assets/sliders/informative-slider/postpartum-1.jpg';
import postpartum2 from '../public/assets/sliders/informative-slider/postpartum-3.jpg';
import postpartum3 from '../public/assets/sliders/informative-slider/postpartum-2.jpg';
import iconoCarePostpartum from '../public/assets/icons/carePostpartum.svg'


export const informativeTabSlider = [
  {
    titleBtn: 'Psicología',
    tabName: 'Tab1',
    icon: iconoPsychology,
    alt: 'psychology',
    images: [psychology1, psychology2],
    text: 'Las acompañamos en procesos Psicológicos y emocionales que les permita construir bases sólidas para la crianza ética y moral de sus hijos.',
  },
  {
    titleBtn: 'Emprendimiento',
    tabName: 'Tab2',
    icon: iconoEntrepreneurship,
    alt: 'Entrepreneurship',
    images: [entrepreneurship1, entrepreneurship2, entrepreneurship3],
    text: 'La fundación vida, ofrece talleres gratuitos de capacitación en Marketing, servicio al cliente, fotografía, gestión de inventarios, logística, gastronomía, nutrición, didáctica para la primera instancia y manualidades. Permitiéndoles un empoderamiento como madres trabajadoras y líderes de su hogar.',
  },
  {
    titleBtn: 'Espiritualidad y valores',
    tabName: 'Tab3',
    icon: iconoValueSpirituality,
    alt: 'ValueSpirituality',
    images: [values1, values2, values3, values4],
    text: ' Queremos redescubrir el principio del Amor  en familia, para que asuman la maternidad con fortaleza y esperanza',
  },
  {
    titleBtn: 'Post-parto',
    tabName: 'Tab4',
    icon: iconoCarePostpartum,
    alt: 'Postpartum',
    images: [postpartum1, postpartum2, postpartum3],
    text: 'Les bridamos las herramientas necesarias para un buen desarrollo físico  de la madre y su bebe.',
  }
]
