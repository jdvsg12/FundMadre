import BackgroundContact from '../public/assets/backgroundImg/backgrounContact.jpg'
import iconoMessage from '../public/assets/icons/IconMessage.svg'
import iconPhoneNumber from '../public/assets/icons/IconPhoneNumber.svg'
import iconWhatsapp from '../public/assets/icons/whatsapp.svg'
import Bancolombia from '../public/assets/DonateIcons/Bancolombia.png'
import DaviPlata from '../public/assets/DonateIcons/Daviplata.png'
import Nequi from '../public/assets/DonateIcons/Nequi.png'

export const contactBackground = {
    image: BackgroundContact
}
export const titleContactData = [
    {
        title: 'Contáctanos',
    },
    {
        title: 'Datos'
    },
    {
        title: 'Donaciones'
    }
]
export const contactData = [
    {
        icon: iconWhatsapp,
        data: '(+57) 320 2408953'
    },
    {
        icon: iconPhoneNumber,
        data: '(+57) 311 4717306'
    },
    {
        icon: iconoMessage,
        data: 'info@fundmadre.com',
    }
]

export const formContactData = [

    {
        type: 'text',
        text: 'Nombre y apellido',
        name: 'fullName'
    },
    {
        type: 'email',
        text: 'Correo',
        name: 'email'
    },
    {
        type: 'text',
        text: 'Asunto',
        name: 'asunto'
    },
]

export const ImageDonateBanks = [
    {
        image: Bancolombia,
        text: 'Cuenta: ahorros #932-000194-30, Fundación vida Madre de nuevas'
    },
    {
        image: DaviPlata,
        text: '311 471 17306'
    },
    {
        image: Nequi,
        text: '350 630 1554'
    },
]