import ImagFundmadre from '../public/assets/logo/logo-name.png';
import PerfilImages from '../public/assets/icons/PhotoProfile.svg';
import PerfilReinaldo from '../public/assets/sliders/tiem-perfil/Reinaldo.png'
import PerfilMarisol from '../public/assets/sliders/tiem-perfil/Marisol.png'
import PerfilAndrea from '../public/assets/sliders/tiem-perfil/Andrea.png'
import PerfilKaren from '../public/assets/sliders/tiem-perfil/Karen.png'
import PerfilAngela from '../public/assets/sliders/tiem-perfil/Angela.png'
import PerfilAndres from '../public/assets/sliders/tiem-perfil/Andres.png'


export const aboutData = {

    title: '¿Quiénes somos?',
    text: 'La Fundación Vida madre de nuevas generaciones (Fundmadre), entidad sin ánimo de Lucro nace para mejorar la calidad de vida de mujeres gestantes vulnerables en Bogotá y las periferias, a través de su modelo de acompañamiento en psicología, enfermería, emprendimiento, espiritualidad y valores. Busca fracturar los ciclos de pobreza generados por el desplazamiento, la migración, el abandono y la falta de oportunidades.',
    image: ImagFundmadre,
}

export const ourTeamData = {
    title: 'Nuestro equipo',
    text: 'Fundmadre cuenta con un talento humano conformado por:',
}

// TODO: Use english names EG "profile" instead of "perfil"

export const teamData = [
    {
        perfil: PerfilReinaldo,
        name: 'Reinaldo Echavarria',
        position: 'Fundador',
        degree: 'Auditor General'
    },
    {
        perfil: PerfilMarisol,
        name: 'Ingrid Marisol Llano',
        position: 'Fundadora',
        degree: 'Directora'
    },
    {
        perfil: PerfilAngela,
        name: 'Angela Mora Ibáñez',
        position: null,
        degree: 'Docente'
    },
    {
        perfil: PerfilAndrea,
        name: 'Andrea Echavarría Ll.',
        position: null,
        degree: 'Directora Académica de Programas'
    },
    {
        perfil: PerfilAndres,
        name: 'Andrés Pulido',
        position: null,
        degree: 'Docente'
    },
    {
        perfil: PerfilKaren,
        name: 'Karen Echavarria Ll.',
        position: null,
        degree: 'Psicóloga Clinica'
    },
]

// TODO: Use "Volunteer" instead of "Voluntary"
export const voluntaryData = 
    {
        text: 'Los inivitarmos a ser servidores voluntarios de FundMadre.' ,
        button: ' Contáctanos'
    }
