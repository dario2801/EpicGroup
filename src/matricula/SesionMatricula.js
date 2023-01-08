import { Button } from 'primereact/button';
import { FaSearchLocation, FaAngleRight, FaAngleDown, FaAngleDoubleDown } from "react-icons/fa";
import { Card } from 'primereact/card';
import { ReactComponent as Icon4 } from '../utils/undraw_experience_design_re_dmqq.svg';
import { ReactComponent as Icon5 } from '../utils/undraw_engineering_team_a7n2.svg';

export default function SesionMatricula() {
    return (
        <div className='w-full'>
            <section>
                <div className='grid mx-0 h-auto min-h-screen surface-100 flex align-items-center justify-content-center'>
                    <div className='lg:col-6 mt-8 md:col-6 sm:col-12 max-w-30rem z-2 px-5 lg:px-8 md:px-5 mx-auto'>
                        <h1 className='text-indigo-900 text-5xl text-center'>Selecciona tu centro y empieza a construir tu futuro</h1>
                        <h3>¡Bienvenido a nuestros centros!
                            El primer paso es seleccionar tu centro. Busca la ciudad en la siguiente lista. Si no encuentras tu ubicación, tu lugar es Central.</h3>
                        <ul className='mt-3'>
                            <li className='list-none' data-aos='fade-right' data-aos-duration='200'>
                                <FaSearchLocation style={{ color: '#FA4917', marginRight: '10px' }} /><a href='./' className='no-underline' style={{ color: '#2A293E' }}>EpicGroup LAB Central. <FaAngleRight style={{ color: '#FA4917', marginRight: '10px' }} /></a>
                            </li>
                            <li className='list-none' data-aos='fade-right' data-aos-duration='400'>
                                <FaSearchLocation style={{ color: '#FA4917', marginRight: '10px' }} /><a href='./' className='no-underline' style={{ color: '#2A293E' }}>EpicGroup LAB Peru.. <FaAngleRight style={{ color: '#FA4917', marginRight: '10px' }} /></a>
                            </li>
                            <li className='list-none' data-aos='fade-right' data-aos-duration='600'>
                                <FaSearchLocation style={{ color: '#FA4917', marginRight: '10px' }} /><a href='./' className='no-underline' style={{ color: '#2A293E' }}>EpicGroup LAB Houston. <FaAngleRight style={{ color: '#FA4917', marginRight: '10px' }} /></a>
                            </li>
                            <li className='list-none' data-aos='fade-right' data-aos-duration='800'>
                                <FaSearchLocation style={{ color: '#FA4917', marginRight: '10px' }} /><a href='./' className='no-underline' style={{ color: '#2A293E' }}>EpicGroup LAB Santa Fe. <FaAngleRight style={{ color: '#FA4917', marginRight: '10px' }} /></a>
                            </li>
                            <li className='list-none' data-aos='fade-right' data-aos-duration='1000'>
                                <FaSearchLocation style={{ color: '#FA4917', marginRight: '10px' }} /><a href='./' className='no-underline' style={{ color: '#2A293E' }}>EpicGroup LAB Quito. <FaAngleRight style={{ color: '#FA4917', marginRight: '10px' }} /></a>
                            </li>
                            <li className='list-none' data-aos='fade-right' data-aos-duration='1100'>
                                <FaSearchLocation style={{ color: '#FA4917', marginRight: '10px' }} /><a href='./' className='no-underline' style={{ color: '#2A293E' }}>EpicGroup LAB Santa Fe. <FaAngleRight style={{ color: '#FA4917', marginRight: '10px' }} /></a>
                            </li>
                            <li className='list-none' data-aos='fade-right' data-aos-duration='1200'>
                                <FaSearchLocation style={{ color: '#FA4917', marginRight: '10px' }} /><a href='./' className='no-underline' style={{ color: '#2A293E' }}>EpicGroup LAB Quito. <FaAngleRight style={{ color: '#FA4917', marginRight: '10px' }} /></a>
                            </li>
                        </ul>
                    </div>
                    <div className='md:mt-8 px-3 md:col-6 col-12 max-w-screen' data-aos='fade-right' data-aos-duration='1000'>
                        <h2 className='text-center text-indigo-900 md:mt-8 mt-0'>Visita las oficinas</h2>
                        {/* el espacio en blanco es x la imagen svg de arriba y abajo */}
                        <Icon4 className='w-full h-16rem md:h-full mt-0 md:mt-3' />
                        <div className='w-16rem mx-auto' data-aos='fade-right' data-aos-duration='300'>
                            <Button label="Visita la oficina virtual" className="mt-3 mb-8 h-4rem bg-orange-500 border-orange-500 border-ra" style={{ borderRadius: '50px', width: '250px' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="grid mx-0 h-auto min-h-screen relative mx-auto " style={{ background: "#2A293E" }}>
                    <Icon5 className='z-0 mt-8 w-full opacity-20' />
                    <div className="col-12 absolute z-1  px-3  md:px-5 mx-auto">
                        <h2 className="mt-8 text-center text-orange-500" data-aos="fade-up">
                            ¡Matricúlate ahora!
                        </h2>
                        <p className='mt-8 text-center text-300 ' data-aos="fade-up">
                            Matricúlate en nuestros cursos online y empieza en camino hacia tu futuro como emprendedor.
                        </p>
                        <p className='mt-3 text-center text-300' data-aos="fade-up">
                            Aprende sobre emprendimiento y tecnología en el Metaverso, y pertenece a la comunidad Epic.
                        </p>
                        <div className='col-12 mt-8 flex align-items-center justify-content-center'>
                            <FaAngleDoubleDown className='text-orange-500 text-7xl' />
                        </div>
                    </div>

                    {/* <div className="col-12 px-5 lg:px-8 md:px-5 mx-auto"> */}
                    <div className='w-16rem mx-auto' data-aos='fade-right' data-aos-duration='300'>
                        <a href='https://wa.me/12345678?text=Hola!%20me%20interesa%20ver%20una%20demo%20gratis' target='_blank' rel="noreferrer" className='block no-underline'><Button label="Solicita una demo gratis" className="md:mb-8 mb-5 h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px', width: '250px' }} /></a>
                    </div>
                    {/* </div> */}
                </div>
            </section>
            <section>
                <div className="grid mx-0 h-auto min-h-screen relative mx-auto surface-100 flex align-items-center justify-content-center">
                    <div className="col-12">
                        <h2 className='text-center text-indigo-900 relative mt-8' data-aos="fade-down" >
                            Cursos disponibles.<FaAngleDown className='absolute mt-1 md:mt-2'/>
                        </h2>
                    </div>
                    <div className='col-12 text-center px-3 md:px-5 mx-auto h-auto mb-3'>
                        <h4 data-aos="fade-down">
                            En EpicGroup Lab contamos con un curso de emprendimiento y otro de emprendimiento + tecnología.
                        </h4>
                        <h4 data-aos="fade-down">
                            Si te activas mediante el pago trimestral...¡No tendrás que pagar matrícula!
                        </h4>
                    </div>
                    <div className='w-full'>
                        <div className='grid mx-0'>
                            <div className='lg:col-3 md:col-6 sm:col-12'>
                                <Card className="m-2 sm:h-auto md:h-full shadow-8" title="Curso Emprendimiento Online" subTitle="Matrícula" data-aos="fade-up-right" data-aos-duration="500">
                                    <p>Esta llave te dará acceso anual a la comunidad y el pase VIP para eventos virtuales de Epic.</p>
                                    <p style={{ color: '#FA4917' }}>Valor</p>
                                    <h2>69 € pago único</h2>
                                    <hr />
                                    <p style={{ color: '#2A293E', fontWeight: '600', fontSize: '23px' }}>
                                        Curso
                                    </p>
                                    <p>El curso de emprendimiento online incluye las clases semanales de la comunidad.</p>
                                    <p style={{ color: '#FA4917' }}>Valor</p>
                                    <h2>69 € pago mensual</h2>
                                    <a href='./' className='col-12 relative' style={{ color: '#FA4917', fontSize: '23px', textDecoration: 'none', display: 'block' }}>Conoce el plan trimestral <FaAngleRight  className='absolute md:mt-1 md:ml-1'/></a>
                                    <Button label="Matricularse" className="mt-5 mb-3 w-full h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px' }} />
                                </Card>
                            </div>
                            <div className='lg:col-3 md:col-6 sm:col-12'>
                                <Card className='m-2 sm:h-auto md:h-full shadow-8' title='Curso Emprendimiento Online' subTitle="Curso" data-aos="fade-up-right" data-aos-duration="1000">
                                    El curso de emprendimiento online incluye una clase a la semana.
                                    <p style={{ color: '#FA4917' }}>Valor</p>
                                    <h2>207 € pago trimestral</h2>
                                    <p style={{ color: '#FA4917' }}>Pago trimestral</p>
                                    <a href='./' className='col-12 relative' style={{ color: '#FA4917', fontSize: '23px', textDecoration: 'none', display: 'block' }}>Conoce el plan trimestral <FaAngleRight className=' absolute md:mt-1 md:ml-1'/></a>
                                    <Button label="Matricularse" className="mt-5 mb-3 w-full h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px' }} />
                                </Card>
                            </div>
                            <div className='lg:col-3 md:col-6 col-12 md:mb-8'>
                                <Card className='m-2 sm:h-auto md:h-full shadow-8' title='Curso Emprendimiento y Tecnología Online' subTitle="Curso" data-aos="fade-up-right" data-aos-duration="1200">
                                    <p>El curso de emprendimiento y tecnología online incluye las clases semanales de la comunidad.</p>
                                    <p style={{ color: '#FA4917' }}>Valor</p>
                                    <h2>267 € pago trimestral</h2>
                                    <a href='./' className='col-12 relative' style={{ color: '#FA4917', fontSize: '23px', textDecoration: 'none', display: 'block' }}>Conoce el plan trimestral <FaAngleRight className='absolute md:mt-1 md:ml-1'/></a>
                                    <Button label="Matricularse" className="mt-5 mb-3 w-full h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px' }} />
                                </Card>
                            </div>
                            <div className='lg:col-3 md:col-6 col-12 md:mb-8 mb-7'>
                                <Card className='m-2 sm:h-auto md:h-full shadow-8' title='Curso Emprendimiento Online' subTitle="Matrícula" data-aos="fade-up-right" data-aos-duration="1400">
                                    <p>Esta llave te dará acceso anual a la comunidad y el pase VIP para eventos virtuales de Epic.</p>
                                    <p style={{ color: '#FA4917' }}>Valor</p>
                                    <h2>89 € pago único</h2>
                                    <hr />
                                    <p style={{ color: '#2A293E', fontWeight: '600', fontSize: '23px' }}>
                                        Curso
                                    </p>
                                    <p>El curso de emprendimiento online incluye las clases semanales de la comunidad.</p>
                                    <p style={{ color: '#FA4917' }}>Valor</p>
                                    <h2>89 € pago mensual</h2>
                                    <a href='./' className='col-12 relative' style={{ color: '#FA4917', fontSize: '23px', textDecoration: 'none', display: 'block' }}>Conoce el plan trimestral <FaAngleRight className='absolute md:mt-1 md:ml-1'/></a>
                                    <Button label="Matricularse" className="mt-5 mb-3 w-full h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px' }} />
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}