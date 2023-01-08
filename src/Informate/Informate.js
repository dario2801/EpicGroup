import { Button } from 'primereact/button';
import { ReactComponent as Icon8 } from '../utils/undraw_education_f8ru.svg';
import { ReactComponent as Icon9 } from '../utils/undraw_to_the_moon_re_q21i.svg';
import { ReactComponent as Icon10 } from '../utils/undraw_connected_world_wuay.svg';
import { ReactComponent as Icon11 } from '../utils/undraw_virtual_reality_re_yg8i.svg';
import { ReactComponent as Icon12 } from '../utils/undraw_my_universe_803e.svg';
import { FaHeart, FaMedal, FaRocket, FaMoneyBillAlt } from "react-icons/fa";
import { AccordionDemo } from '../menu/accordionPF';
export default function ConoceCursosOnlineEnlace() {
    return (
        <div className='w-full'>
            <section>
                <div className='grid mx-0 surface-100 h-auto min-h-screen flex align-items-center justify-content-center'>
                    <div className='mt-8 md:col-6 col-12 max-w-30rem px-3  md:px-5 mx-auto text-center'>
                        <h1 className='text-indigo-900 text-5xl px-3' data-aos='fade-down'>Lleva la educación al siguiente nivel</h1>
                        <h4 data-aos='fade-down' data-aos-duration='200'>EpicGroup Lab cuenta con la oferta educativa más innovadora del mercado para unaprendizaje inmersivo adaptado a todas las edades.</h4>
                        <h4 data-aos='fade-down'>Ponemos la innovación al servicio de la educación y desarrollamos internamente todas nuestras actividades para que se adapten a cada edad y etapa de desarrollo. Un modelo educativo únicoque nos hace líderes a nivel mundial.</h4>
                        <div className='w-16rem mx-auto' data-aos='fade-right' data-aos-duration='300'>
                            <Button label="Contactar" className="my-3 md:mt-3 md:mb-7 h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px', width: '250px' }} />
                        </div>
                    </div>
                    <div className='md:px-5 px-3 md:col-6 col-12 mx-auto md:mb-7 md:mt-8 max-w-screen' data-aos='fade-right' data-aos-duration='1000'>
                        <Icon8 className=' w-full h-18rem md:h-full' />
                    </div>
                </div>
            </section>
            <section>
                <div className='grid mx-0  h-auto min-h-screen relative flex align-items-center justify-content-center' style={{ background: '#2A293E' }} >
                    <div className='mt-7 md:col-6 col-12 max-w-30rem px-3 md:px-5  mx-auto text-center '>
                        <h2 className='text-orange-500' data-aos='fade-up'>¡Escoge el metaverso al que quieras viajar!</h2>
                        <h4 className='text-300 my-3' data-aos='fade-up'>Bienvenido a nuestras escuelas
                            Solicita más información en el centro más cercano a ti</h4>
                        <div className='w-16rem mx-auto' data-aos='fade-up'>
                            <Button label="Contactar" className="mb-3 h-4rem bg-orange-500 border-orange-500" data-aos='fade-up' style={{ borderRadius: '50px', width: '250px' }} />
                        </div>
                    </div>
                    <div className='md:px-5 px-3 md:col-6 col-12 mx-auto max-w-screen z-1' data-aos='fade-up' data-aos-duration='1000'>
                        <Icon9 className='w-full' />
                    </div>
                    <div className='col-12 px-5 md:px-5 mx-auto mb-7 md:mb-8'>
                        <h2 className='text-200 col-4 inline-block text-center' data-aos='fade-up' data-aos-duration='800'>+1500<br></br>
                            alumnos</h2>
                        <h2 className='text-200 col-4 inline-block text-center' data-aos='fade-up' data-aos-duration='1000'>+08<br></br>
                            escuelas</h2>
                        <h2 className='text-200 col-4 inline-block text-center' data-aos='fade-up' data-aos-duration='1200'>+02<br></br>
                            modelos</h2>
                    </div>
                    <div className='col-12 lg:px-8 md:px-5 px-3 mx-auto  z-0 absolute opacity-10'>
                        <Icon10 className='w-full' />
                    </div>
                </div>
            </section>
            <section>
                <div className='grid mx-auto surface-100 h-auto z-1 relative' >
                    {/* <div className='col-6 h-18rem'>
                        <div className='col-6 relative'>
                            <div className="border-circle w-6rem h-6rem top-100 mt-8 ml-5 bg-orange-500 text-900 flex align-items-center justify-content-center  shadow-8 absolute ">
                                <div className='p-5'>
                                    <h1 className='text-900 text-center'>
                                        02
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 relative'>
                            <div className="border-circle w-6rem h-6rem right-0 bg-orange-500 text-900 flex align-items-center justify-content-center  shadow-8 absolute">
                                <div className='p-5'>
                                    <h1 className='text-900 text-center'>
                                        01
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='col-12 absolute z-2 absolute top-50'>
                        <div className='col-4 relative'>
                            <div className="border-circle w-6rem h-6rem  ml-5 bg-orange-500 text-900 flex align-items-center justify-content-center  shadow-8 absolute " style={{translate:'100%'}}>
                                <div className='p-5'>
                                    <h1 className='text-900 text-center'>
                                        03
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 relative ml-8'>
                            <div className="border-circle w-6rem h-6rem  top-100 mt-8 right-0 bg-orange-500 text-900 flex align-items-center justify-content-center  shadow-8 absolute">
                                <div className='p-5'>
                                    <h1 className='text-900 text-center'>
                                        04
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 relative ml-8'>
                            <div className="border-circle w-6rem h-6rem left-100  ml-8 bg-orange-500 text-900 flex align-items-center justify-content-center  shadow-8 absolute" style={{translate:'120%'}}>
                                <div className='p-5'>
                                    <h1 className='text-900 text-center'>
                                        05
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='col-12 mx-auto mt-7 text-center px-3 md:px-5'>
                        <h2 className='text-indigo-900 ' data-aos='fade-up'>
                            Pasos a seguir
                        </h2>
                        <h4 data-aos='fade-up' data-aos-duration='1000'>
                            Para abrir un centro Epic, necesitas seguir los siguientes pasos. En todo momento te acompañaremos y te ayudaremos con cada uno de los retos.
                        </h4>
                        <h4 data-aos='fade-up' data-aos-duration='1200'>
                            Descubre qué se esconde detrás de cada paso, recorre todo el camino con nosotros y abre uncentro innovador y único.
                        </h4>
                    </div>
                    {/* <div className='grid mx-0 lg:px-8 md:px-5 px-3 mt-8 lg:mt-5 md:mt-5 '> */}
                    <div className='md:col-6 col-12 md:my-8 text-center mx-auto'>
                        <h2 className='text-indigo-900 ' data-aos='fade-right'>
                            ¿Qué perfil buscamos?
                        </h2>
                        <p data-aos='fade-up' data-aos-duration='500'>
                            Nuestro proyecto está en continuo crecimiento. Para ello buscamos personas emprendedoras con perfiles muy diferentes.
                        </p>
                        <p data-aos='fade-up' data-aos-duration='1000'>
                            Además, buscamos emprendedores que tengan las siguientes cualidades fundamentales:
                        </p>
                    </div>
                    <div className='md:col-6 col-12 md:px-5 px-3 mx-auto max-w-screen ' data-aos='fade-up' data-aos-duration='1000'>
                        <Icon11 className='w-full  md:mb-8' />
                    </div>
                    <div className='grid md:px-5 px-3 mx-0 max-w-screen w-full mb-8'>
                        <div className='col-3 text-center' data-aos='fade-down' data-aos-duration='500'>
                            <FaHeart className='text-7xl' style={{ color: '#FA4917' }} />
                            <h6>
                                Pasión por la enseñanza
                                y los idiomas, porque
                                queremos que disfrutes
                                con tu trabajo.
                            </h6>
                        </div>
                        <div className='col-3 text-center' data-aos='fade-down' data-aos-duration='1000'>
                            <FaMedal className='text-7xl' style={{ color: '#FA4917' }} />
                            <h6>
                                Compromiso con la
                                escuela para el
                                correcto desarrollo
                                de la actividad.
                            </h6>
                        </div>
                        <div className='col-3 text-center' data-aos='fade-down' data-aos-duration='1500'>
                            <FaRocket className='text-7xl' style={{ color: '#FA4917' }} />
                            <h6>
                                Vocación empresarial y
                                habilidades comerciales para
                                trabajar de cara
                                al público.
                            </h6>
                        </div>
                        <div className='col-3 text-center' data-aos='fade-down' data-aos-duration='2500'>
                            <FaMoneyBillAlt className='text-7xl' style={{ color: '#FA4917' }} />
                            <h6>
                                Vocación empresarial y
                                habilidades comerciales para
                                trabajar de cara
                                al público.
                            </h6>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </section>
            <section>
                <div className="grid mx-0 relative  h-auto min-h-screen text-300" style={{ background: '#2A293E' }}>
                    <div className="col-12  mt-8 md:px-5 px-3 text-center" >
                        <h2 className='text-orange-500' data-aos='fade-down'>
                            Preguntas frecuentes.
                        </h2>
                        <h3 data-aos='fade-down' data-aos-duration='500'>¡Encuentra aquí la respuesta a las preguntas más frecuentes acerca de Epic!</h3>
                    </div>
                    <div className=' col-12 w-full px-3 md:px-5 z-1' data-aos='fade-right' data-aos-duration='1000'>
                        <AccordionDemo />
                    </div>
                    <div className='md:px-5 px-3 md:col-6 col-12 mx-auto max-w-screen absolute z-0 right-0 opacity-20  overflow-hidden'>
                        <Icon12 className='w-auto' />
                    </div>
                    <div className="col-12 md:px-5 px-3 text-center text-300 mb-8">
                        <h4 className='text-300' data-aos='fade-right' data-aos-duration='1000'>Si todavía tienes dudas, contacta con nuestro equipo Epic. ¡Te responderemos lo antes posible!</h4>
                        <div className='w-16rem mx-auto' data-aos='fade-right' data-aos-duration='300'>
                            <Button label="Contactar" className="my-3 h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px', width: '250px' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}