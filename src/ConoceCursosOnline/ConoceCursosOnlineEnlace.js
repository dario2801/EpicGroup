import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { ReactComponent as Icon7 } from '../utils/undraw_augmented_reality_re_f0qd.svg';
import { ReactComponent as Icon13 } from '../utils/undraw_people_re_8spw.svg';

export default function ConoceCursosOnlineEnlace() {
    return (
        <div className='w-full'>
            <section>
                <div className='grid mx-0 surface-100 h-auto min-h-screen flex align-items-center justify-content-center' >
                    <div className='mt-8 md:col-6 col-12 max-w-30rem z-1 px-3 lg:px-8 md:px-5 text-center'>
                        <h1 className='text-indigo-900 text-5xl' data-aos='fade-right' data-aos-duration='500'>Conoce nuestros cursos online y presenciales</h1>
                        <h4 data-aos='fade-up' data-aos-duration='1000'>Aprende sobre emprendimiento y tecnología en nuestros cursos en el Metaverso Epic.</h4>
                        <h4 data-aos='fade-up' data-aos-duration='1200'>¡Únete a la comunidad más innovadora y empieza a construir tu futuro como emprendedor!</h4>
                        <div className='w-16rem mx-auto' data-aos='fade-right' data-aos-duration='500'>
                        <Link to='/enrollment' className='block no-underline' style={{ color: '#22AFE4' }}><Button label="Activate" className="mt-3 md:mb-8 h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px', width: '250px' }} /></Link>
                        </div>
                    </div>
                    <div className='px-3 md:col-6 col-12 mx-auto my-0 max-w-screen'>
                        <Icon7 className='w-full h-16rem md:h-full  mb-7 md:mb-0' data-aos='fade-left' data-aos-duration='800' />
                    </div>
                </div>
            </section>
            <section>
                <div className='grid mx-0 h-auto min-h-screen pb-8' style={{ background: '#2A293E' }}>
                    <div className="md:px-5 px-3 md:col-6 col-12 mx-auto my-0 max-w-screen">
                        <h2 className="mt-8 text-center text-orange-500" data-aos="fade-up">
                            Curso de emprendimiento
                        </h2>
                        <h4 className='my-3 text-center text-white ' data-aos="fade-up">
                            Conoce el programa trimestral del curso de emprendimiento.
                        </h4>
                        <Card className="mt-3 surface-100 h-auto md:h-auto  text-indigo-900" title="Primer trimestre" subTitle="Objetivo" data-aos="fade-up" data-aos-duration="500">
                            <h2>Desarrollo de la idea de negocio.</h2>
                            <ul>
                                <li>
                                    <span>
                                        Espíritu emprendedor
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Ikigai y los 7 hábitos de la gente altamente efectiva
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Identificar problemas y Design Thinking
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Empresas y StartUps
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Modelos de negocio
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Definir mi propia idea de negocio
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Océanos rojos y azules (competencia directa e indirecta)
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Propuesta de valor y DAFO
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Misión, visión y valores e imagen corporativa
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Lean Startup, vivir en Fase Beta, ciclo de mejora continua
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Bussines Model Canvas
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Los primeros números de mi empresa y Pitch emprendedor
                                    </span>
                                </li>
                            </ul>
                            <hr className='my-3' />
                            <h2>Segundo trimestre</h2>
                            <h4 className='text-600 font-normal'>Objetivo</h4>
                            <h4>Creación del PMV, marketing y ventas</h4>
                            <ul>
                                <li>
                                    <span>
                                        Iniciación al blockchain, ¿qué es, para qué y cómo se utiliza?
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Creación de videojuegos como estrategia de marketing
                                    </span>
                                </li>
                            </ul>
                            <hr className='mt-5' />
                            <h2>Tercer trimestre</h2>
                            <h4 className='text-600 font-normal'>Objetivo</h4>
                            <h4>Finanzas y Deck. Ronda de inversión</h4>
                            <ul>
                                <li>
                                    <span>
                                        Ayuda al emprendimiento
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Cómo funciona el mercado
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Autofinanciación y métodos de inversión
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Excel
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Ingresos Vs beneficios, aliados, balance, crear verticales y deck
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Preparación del proyecto final
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Proyecto final
                                    </span>
                                </li>
                            </ul>
                            <Link to='./enrollment' className='block no-underline' style={{ color: '#22AFE4' }}> <Button label="Actívate" className="my-3 w-full h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px' }} /></Link>
                        </Card>
                    </div>
                    <div className="md:px-5 px-3 md:col-6 col-12 mx-auto my-0 max-w-screen">
                        <h2 className="mt-8 text-center text-orange-500" data-aos="fade-up">
                            Curso de tecnología
                        </h2>
                        <h4 className='mt-3 text-center text-white' data-aos="fade-up">
                            Conoce el programa trimestral del curso de tecnología.
                        </h4>
                        <Card className="mt-3 surface-100 h-auto md:h-auto text-indigo-900" title="Primer trimestre" subTitle="Objetivo" data-aos="fade-right" data-aos-duration="500">
                            <h2>Desarrollo de la idea de negocio.</h2>
                            <h3 className='font-medium'>1 Desarrollo web. Mobile First</h3>
                            <ul>
                                <li>
                                    <span>
                                        Maquetando con HTML5
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Estilos con Css
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Lógica con JavaScript
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Formularios
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Publicando en Internet
                                    </span>
                                </li>
                            </ul>
                            <h3 className='font-medium'>2 Iniciación a la creación de espacios en blender</h3>
                            <ul>
                                <li>
                                    <span>
                                        Introducción al modelaje
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Familiariozación de interfaz
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Aprender a crear objetos
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Uso de atajos con el teclado
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Experimentando el uso de materiales (texturas)
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Shading y propiedades
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        LCreando estructuras
                                    </span>
                                </li>
                            </ul>
                            <hr className='my-3' />
                            <h2>Segundo trimestre</h2>
                            <h4 className='text-600 font-normal'>Objetivo</h4>
                            <h4>Creación del PMV, marketing y ventas</h4>
                            <ul>
                                <li>
                                    <span>
                                        Iniciación al blockchain, ¿qué es, para qué y cómo se utiliza?
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Creación de videojuegos como estrategia de marketing
                                    </span>
                                </li>
                            </ul>
                            <hr className='my-3' />
                            <h2>Tercer trimestre</h2>
                            <h4 className='text-600 font-normal'>Objetivo</h4>
                            <h4>Finanzas y Deck. Ronda de inversión</h4>
                            <ul>
                                <li>
                                    <span>
                                        Iniciación a la IA con Dialogoflow o IBM Watson
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Creación de OBS y streaming
                                    </span>
                                </li>
                            </ul>
                            <Link to='./enrollment' className='block no-underline' style={{ color: '#22AFE4' }}><Button label="Actívate" className="md:mt-7 my-3 w-full h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px' }} /></Link>
                        </Card>
                    </div>
                </div>
            </section>
            <section>
                <div className='grid mx-0 surface-100 h-auto min-h-screen flex align-items-center justify-content-center pb-8 md:pb-0' >
                    <div className='md:col-6 col-12 max-w-30rem px-5 mx-auto text-center'>
                        <h2 className='text-indigo-900 mt-6 md:mt-0' data-aos='fade-right' data-aos-duration='500'>Nuestra comunidad</h2>
                        <h4 data-aos='fade-up' data-aos-duration='1000'>Con la matrícula de cualquiera de nuestros cursos online o presenciales consigues la llave a la comunidad de Epic,
                            además del pase VIP a eventos virtuales de EpicGroup Lab.</h4>
                        <h4 data-aos='fade-up' data-aos-duration='1300'>Disfruta de todas estas clases cada semana dentro de la comunidad educativa más innovadora.</h4>
                    </div>
                    <div className='md:col-6 md:px-5 py-3 border-round-2xl col-12 mx-auto my-0 max-w-screen bg-orange-400  md:h-auto h-30rem  shadow-6 flex justify-content-center flex-wrap card-container'>
                        <div className=' align-items-center justify-content-center bg-orange-500 py-1 px-1 border-round-xl relative m-auto border-orange-900 shadow-8 lg:h-auto md:h-auto h-28rem' data-aos='fade-up' data-aos-duration='1000'>
                             {/* margin1pxWrong */}
                            <h1 className='z-1 absolute right-0 bg-orange-900 py-1 px-2 text-white border-round-xl shadow-8 scalein animation-duration-2000 animation-iteration-infinite animation-ease-in-out' style={{ rotate: '10deg' }}>Epic comunidad</h1>
                            <Icon13 className='w-full md:h-auto h-27rem' />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='grid mx-0 h-auto min-h-screen pb-8' style={{ background: '#2A293E' }}>
                    <div className='col-12 text-center px-3 md:px-5 mt-8 md:mt-6'>
                        <h2 className='text-orange-500'>Categorías Epic</h2>
                        <h4 className='text-white'>En Epic ofrecemos cursos para todas las edades, desde los 7 hasta los 99 años. Queremos que todas las personas puedan construir su futuro y cumplir sus sueños laborales.</h4>
                        <p className='text-red-500'>¡Descubre las categorías de alumnos para saber a qué grupo perteneces!</p>
                    </div>
                    <div className='lg:col-6 md:col-6 sm:col-12 max-w-30rem px-5 lg:px-8 md:px-5  mx-auto z-1'>
                        <div className="border-circle w-19rem h-19rem bg-indigo-300 text-900 text-center flex align-items-center justify-content-center shadow-8" data-aos='fade-right'>
                            <div className='p-2'>
                                <h1 className='text-900 text-center'>
                                    EpicKids
                                </h1>
                                <p className='text-900 text-center font-medium px-5'>
                                    Un espacio destinado a <span className='text-white'>niños y niñas desde 7 hasta 12 años</span> en España: fundaciones del Cádiz CF, Real Betis Balompié CF, Leganés CF y Getafe CF.
                                </p>
                            </div>
                        </div>
                        <div className="border-circle w-19rem h-19rem bg-indigo-300 text-900 text-center flex align-items-center justify-content-center shadow-8 mt-8" data-aos='fade-right' data-aos-duration='500'>
                            <div>
                                <h1 className='text-900 text-center'>
                                    OldSchool
                                </h1>
                                <p className='text-900 text-center font-medium px-5 text-sm '>
                                    Creemos firmemente que <span className='text-white'>LA EDAD</span>, no define la persona que eres.Oldschool realza la labor de los
                                    mayores, y es por ello, que hemos creado un <span className='text-white'>espacio destinado a seguir aprendiendo, a seguir creciendo,
                                        a crear un nuevo círculo de relaciones</span> y sobre todo, un espacio para <span className='text-white'>seguir soñando.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-6 md:col-6 sm:col-12 max-w-30rem px-5 lg:px-8 md:px-5  mx-auto mt-8 z-1'>
                        <div className="border-circle w-19rem h-19rem bg-indigo-300 text-900 text-center flex align-items-center justify-content-center shadow-8" data-aos='fade-up'>
                            <div className='p-2'>
                                <h1 className='text-900 text-center'>
                                    EpicGenuine
                                </h1>
                                <p className='text-900 text-center font-medium px-3 text-sm'>
                                    ¡El futuro es para todos!
                                    En Epic, llevamos dos años, colaborando con algunos de los <span className='text-white'>equipos Genuine de la Liga de fútbol Santander</span> en España: fundaciones del Cádiz CF, Real Betis Balompié CF, Leganés CF y Getafe CF.
                                </p>
                            </div>
                        </div>
                        <div className="border-circle w-19rem h-19rem bg-indigo-300 text-900 text-center flex align-items-center justify-content-center shadow-8 mt-8" data-aos='fade-up' data-aos-duration='500'>
                            <div className='p-5'>
                                <h1 className='text-900 text-center'>
                                    Next Generation
                                </h1>
                                <p className='text-900 text-center font-medium text-sm'><span className='text-lg'>Jóvenes emprendedores</span><br></br><span className='text-white'>Creando, construyendo y enfrentándose a los retos</span> que conlleva el emprendimiento, conseguirán <span className='text-white'>convertirse en líderes y sobre todo, encontrar la felicidad</span> constante para ser increbrantables jamás.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}