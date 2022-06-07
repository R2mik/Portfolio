import blank from '../../assets/Images/testImg/blank.png'
import m1SNB from '../../assets/Images/snb/m1SNB.png'
import p1SNB from '../../assets/Images/snb/p1SNB.png'
import p2SNB from '../../assets/Images/snb/p2SNB.png'
import p3SNB from '../../assets/Images/snb/p3SNB.png'
import t1SNB from '../../assets/Images/snb/t1SNB.png'
import t2SNB from '../../assets/Images/snb/t2SNB.png'
import m1Cubes from '../../assets/Images/cubes/monitorCubes.png'
import t1Cubes from '../../assets/Images/cubes/tabletVerCubes.png'
import p1Cubes from '../../assets/Images/cubes/telefonCubes.png'
import m1DH from '../../assets/Images/DH/monitor1DH.png'
import t1DH from '../../assets/Images/DH/tablet1DH.png'
import t2DH from '../../assets/Images/DH/tablet2DH.png'
import t3DH from '../../assets/Images/DH/tablet3DH.png'
import p1DH from '../../assets/Images/DH/telefon1DH.png'
import p2DH from '../../assets/Images/DH/telefon2DH.png'
import m1Portfolio from '../../assets/Images/portfolio/monitor1Portfolio.png'
import t1Portfolio from '../../assets/Images/portfolio/tablet1Portfolio.png'
import t2Portfolio from '../../assets/Images/portfolio/tablet2Portfolio.png'
import p2Portfolio from '../../assets/Images/portfolio/phone1Portfolio.png'

export const PDetails = [
    {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        technologies: [''],
        imgIphone1: blank,
        imgIphone2: blank,
        imgIphone3: blank,
        imgTablet1: blank,
        imgTablet2: blank,
        imgTablet3: blank,
        imgMonitor1: blank,
        imgMonitor2: blank,
        imgMonitor3: blank,

    },
    {
        number: '01',
        projectName: 'Dream House',
        projectDesc: 'Webpage of construction company',
        projectType: 'WEB APP',
        technologies: ['React', 'Sass', 'JavaScript'],
        page: 'www.dreamhouse.com',
        imgIphone1: p1DH,
        imgTransXP1: '-10vw',
        imgTransYP1: '-5vw',
        imgIphone2: p2DH,
        imgTablet1: t1DH,
        imgTablet2: t2DH,
        imgTablet3: t3DH,
        imgMonitor1: m1DH,
    },
    {
        number: '02',
        projectName: 'Snowboard Reunion',
        projectDesc: 'Event that have beautifull coutdown timer to reunion in Alpes',
        projectType: 'WEB APP',
        technologies: ['JavaScript', 'Bootstrap'],
        page: 'www.SNB.com',
        imgIphone1: p1SNB,
        imgIphone2: p2SNB,
        imgIphone3: p3SNB,
        imgTablet1: t1SNB,
        imgTablet2: t2SNB,
        imgMonitor1: m1SNB,
    },
    {
        number: '03',
        projectName: '3D woobeling cubes',
        projectDesc: 'Messing with @react-three/fiber library',
        projectType: '3D pages',
        technologies: ['@react-three/fiber', 'react-three/drei'],
        page: 'www.woobelingcubes.com',
        imgIphone1: p1Cubes,
        imgIphone2: blank,
        imgIphone3: blank,
        imgTablet1: t1Cubes,
        imgTablet2: blank,
        imgMonitor1: m1Cubes,
        imgMonitor2: blank,
        imgMonitor3: blank,
    },
    {
        number: '04',
        projectName: 'Portfolio',
        projectDesc: 'My own portfolio, which I am proud of and showing my progress with programming and UI design',
        projectType: 'WEB APP',
        technologies: ['React', 'Sass', 'JavaScript'], 
        page: 'www.portfolio.com',
        imgIphone2: p2Portfolio,
        imgTablet1: t1Portfolio,
        imgTablet2: t2Portfolio,
        imgMonitor1: m1Portfolio,
    },
    {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        technologies: [''],
        imgIphone1: blank,
        imgIphone2: blank,
        imgIphone3: blank,
        imgTablet1: blank,
        imgTablet2: blank,
        imgTablet3: blank,
        imgMonitor1: blank,
        imgMonitor2: blank,
        imgMonitor3: blank,
    },
]