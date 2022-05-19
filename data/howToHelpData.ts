import WhatDoWeDoImg from '../public/assets/sliders/informative-slider/values_1.jpg';
import Kit1Photo from '../public/assets/kitPhoto/Kit1.png'
import kit2Photo from '../public/assets/kitPhoto/Kit2.png'
import KitMama from '../public/assets/kitPhoto/KitMama.png'
import PadrinoMamayBebe from '../public/assets/godfatherPhoto/Padrinos-mamá-y-bebé.png'
import PaddrinoFundMadre from '../public/assets/godfatherPhoto/Padrinos-fundmadre.png'


export const godfatherData = [
    {
        title: 'Plan padrinos',
        text: 'La primera es "Padrinos Mamá y Bebé", en este, el padrino y/o madrina dará un acompañamiento a la madre gestante que será asignada por la fundación y la apoyará desde el momento que se asigna, hasta que el bebé haya cumplido dos años de edad. El compromiso inicia donando a la madre gestante un Kit de nacimiento para el bebé, con los siguientes elementos sugeridos:',
        image: PadrinoMamayBebe
    },
    {
        title: null,
        text: 'La segunda Opción, es "Padrinos Fundmadre"; está, tiene como finalidad, respaldar a la fundación para la realización de sus programas de formacion y acompañamiento, así como proveer de elementos esenciales a las madres que aun no tiene padrinos. El aporte será distribuido a discreción y criterio de la fundación dependiendo de las necesidades que mensualmente se vayan presentando.',
        image: PaddrinoFundMadre
    }
]

export const kitData = [
    {
        title: "Kit's",
        subTitle: 'Kit 1 de nacimiento bebé',
        value: '$ 100.000 contiene:',
        text: '(Primera muda, pañales 1, pañitos, toalla cuerpo).',
        image: Kit1Photo,
        button: 'Conoce más',
        href: 'https://api.whatsapp.com/send/?phone=573202408953&text&app_absent=0&text=Hola%2C%20escribo%20desde%20la%20web%20de%20FundaMadre%20por%20los%20informacion%20sobre%20los%20kits%201',
    },
    {
        title: null,
        subTitle: 'Kit 2 de nacimiento bebé',
        value: '$ 150.000 contiene: ',
        text: '(Primera muda, pañales 1, pañitos, toalla cuerpo, cobija, pijama).',
        image: kit2Photo,
        button: 'Conoce más',
        href: 'https://api.whatsapp.com/send/?phone=573202408953&text&app_absent=0&text=Hola%2C%20escribo%20desde%20la%20web%20de%20FundaMadre%20por%20los%20informacion%20sobre%20los%20kits%202',
    },
    {
        title: null,
        subTitle: 'Kit Nacimiento mamá',
        value: '$ 120.000 contiene:',
        text: 'Elementos únicamente para la madre gestante (toalla cuerpo, toallas maternas, lactinosotras, bata y/o pijama y chanclas).',
        image: KitMama,
        button: 'Conoce más',
        href: 'https://api.whatsapp.com/send/?phone=573202408953&text&app_absent=0&text=Hola%2C%20escribo%20desde%20la%20web%20de%20FundaMadre%20por%20los%20informacion%20sobre%20los%20kits%20mama',
    }
]