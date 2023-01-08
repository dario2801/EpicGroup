import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { AccordionDemo } from './accordion';
import { ReactComponent as Icon1 } from '../utils/undraw_educator_re_ju47.svg';
import { ReactComponent as Icon2 } from '../utils/undraw_sharing_knowledge_03vp.svg';
import { ReactComponent as Icon3 } from '../utils/undraw_adventure_re_ncqp.svg';
import { ReactComponent as Icon7 } from '../utils/undraw_vr_chat_re_s80u.svg';
import ElMundo from '../utils/el-mundo-press.ab3a0193991d6aa4e607.png';
import Diario from '../utils/diario-de-jerez-press.f460ef5d03d2093235a2.png';
import Emprendedores from '../utils/download.png';
import Sony from '../utils/Sony.png';
import SSI from '../utils/second-sponsor-image.dd9f40d36361c3f23df7.png';
import AINDER from '../utils/AINDER.png';
import IKEA from '../utils/IKEA.png';
import HUAWEI from '../utils/huawei.43bf19c2fe1b70b37da6.png';
import University from '../utils/universidad-cadiz.f1a02b779aa645aaa1c6.png';
import { FaAngleDown, FaBook, FaAlignLeft, FaUniversity,FaAngleDoubleDown } from "react-icons/fa";
import video from '../utils/epicgrouplab.381cbc871df726432483.mp4';
export default function MenuBar() {
    return (
        <React.Fragment>
            <div className="App">
                <section>
                    <div className='grid mx-0 h-auto min-h-screen surface-100 flex align-items-center justify-content-center'>
                        <div className='lg:col-8 mt-8 md:mt-1 col-12 max-w-30rem z-2 px-5 lg:px-8 md:px-5 mx-auto text-center'>
                            <h1 className='text-indigo-900 text-5xl' data-aos='fade-right'>Abre tu
                                mente y expande tus expectativas</h1>
                            <h4 data-aos='fade-right' data-aos-duration='800'>Epicgroup es una Ed-Tech nacida con el objetivo de llevar la educación sobre emprendimiento y tecnología al mercado de habla hispana en formato online, semipresencial y presencial.</h4>
                            <Link to='/enrollment' className='block no-underline'><Button label="Activate" className="mt-3 h-4rem bg-orange-500 border-orange-500" data-aos='fade-up-right' data-aos-duration='800' style={{ borderRadius: '50px', width: '250px' }} /></Link>
                        </div>
                        <div className='md:col-4 col-12 max-w-30rem mx-auto md:mt-0'>
                            <Icon1 className='w-full' data-aos='fade-left' data-aos-duration='1000' />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="grid mx-0 h-auto min-h-screen text-300 text-center flex align-items-center justify-content-center" style={{ background: "#2A293E" }}>
                        <div className="col-12">
                            <h4 className='mt-8' data-aos="fade-down">
                                <p>Curso  2022 - 2023</p>
                            </h4>
                            <h2 className="mt-3 text-orange-500" data-aos="fade-right">
                                ¡Plazas limitadas!
                            </h2>
                        </div>
                        <div className='col-12 md:col-6 mx-auto' data-aos="fade-right">
                            <Icon2 className="max-w-32 w-full" />
                        </div>
                        <div className="col-12 md:col-6 relative mb-8">
                            <h2 className='text-orange-500' data-aos="fade-down">
                                Matrículate ahora.<FaAngleDown className='mt-1 md:mt-2 absolute' />
                            </h2>
                            <h4 className="mt-3 px-3" data-aos="fade-up">
                                Aprende sobre emprendimiento y tecnología desde cualquier parte del mundo en nuestras escuelas internacionales.
                                Descubre tu ED-Tech EPIC más cercana y empieza a construir tu futuro como emprendedor.
                            </h4>
                            <h4 className="my-1" data-aos="fade-up">
                                Curso 2022-2023
                            </h4>
                            <a href='https://wa.me/12345678?text=Hola!%20me%20interesa%20ver%20una%20demo%20gratis' target='_blank' rel="noreferrer" className='block no-underline'><Button label="Solicita una clase demo gratis" className="mt-5 mb-3 h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px', width: 'auto' }} /></a>
                            <Link to='/onlinecourses' className='block no-underline' style={{ color: '#22AFE4' }}><h3>Cursos online</h3></Link>
                            <Link to='/onlinecourses' className='block no-underline' style={{ color: '#22AFE4' }}><h3>Cursos presenciales</h3></Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="grid mx-0 h-auto min-h-screen surface-100 flex align-items-center justify-content-center pb-7">
                        <div className="flex align-items-center justify-content-center col-12  max-w-30rem px-5 lg:plx-8 mx-auto text-center mt-7 md:mt-0">
                            <h2 className="text-indigo-900">
                                EpicGroup Lab es una ED-Tech internacional de emprendimiento y tecnología en el metaverso.
                            </h2>
                        </div>
                        <div className="col-12  md:col-6 h-auto surface-100 border-round-xl mt-3 md:mt-7 m-auto" data-aos='fade-up' data-aos-duration='1000'>
                            <div className='shadow-8'>
                                <video width="100%" height="100%" controls>
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                        </div>
                        <div className="col-12 mt-3" data-aos="fade-down">
                            <p className='text-right text-xl' style={{ marginRight: '32px', marginBottom: '50px' }}>
                                Un innovador proceso de<br></br>
                                <strong style={{ color: '#2A293E' }}><FaBook style={{ color: '#FA4917', marginRight: '10px' }} />aprendizaje emprendedor.</strong></p>
                        </div>
                        <div className="col-12" data-aos="fade-right">
                            <p className='text-left text-xl' style={{ marginLeft: '32px' }}>
                                Desarrollar sus<br></br>
                                <strong style={{ color: '#2A293E', marginRight: '10px' }}> “Soft Skills” o Habilidades Blandas.</strong><FaAlignLeft style={{ transform: 'rotate(-90deg)', color: '#FA4917' }} /></p>
                        </div>
                        <div className="col-12 " data-aos="fade-down">
                            <p className='text-right text-xl mb-5' style={{ marginRight: '32px', marginTop: '50px' }}>
                                Aprende <br></br>
                                <strong style={{ color: '#2A293E' }}><FaUniversity style={{ color: '#FA4917', marginRight: '10px' }} />Gamificando y Haciendo.</strong></p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="grid mx-0 h-auto min-h-screen text-center text-300 flex align-items-center justify-content-center" style={{ background: "#2A293E" }}>
                        <div className="col-12 md:col-6  mt-7 md:mt-0 mx-auto text-center">
                            <h1 className="text-orange-500" data-aos="fade-down" data-aos-duration='500'>
                                ¿A qué metaverso quieres viajar?
                            </h1>
                            <h4 className="my-3" data-aos="fade-up" data-aos-duration='1000'>
                                Bienvenido a nuestras escuelas
                                Solicita más información en el centro más cercano a ti.
                            </h4>
                            <div className='col-12 my-3 flex align-items-center justify-content-center'>
                            <FaAngleDoubleDown className='text-orange-500 text-7xl' />
                        </div>
                            <Link to='/information' className='block no-underline'><Button label="Informate" className="my-3 h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px', width: '250px' }} data-aos="fade-down" data-aos-duration='500' /></Link>
                        </div>
                        <div className="col-12 md:col-6 md:mt-7 text-center">
                            <h2 className='text-center ' data-aos='fade-down'>
                                ¿Quieres abrir tu propio centro?
                            </h2>
                            <div className='max-w-30rem  mx-auto' data-aos="fade-down" data-aos-duration='1000'>
                                <Icon3 className='w-full' />
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="grid mx-0  h-auto min-h-screen surface-100 text-center ">
                        <div className="col-12 md:col-6  mt-8 md:mt-0 mx-auto">
                            <h2 data-aos="fade-right" className="text-indigo-900 mt-3 md:mt-8 px-3">
                                Visita nuestras oficinas virtuales en el Metaverso Epic.
                            </h2>
                            <h4 className="mx-auto px-3" data-aos="fade-right">
                                Contacta con nosotros para visitar gratis nuestras oficinas en el metaverso EpicGroup Lab.
                            </h4>
                            <a href='https://wa.me/12345678?text=Hola!%20me%20interesa%20ver%20una%20demo%20gratis' target='_blank' rel="noreferrer" className='block no-underline'><Button label="Visita la oficina virtual" className="my-3 h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px', width: '250px' }} data-aos="fade-down" data-aos-duration='500' /></a>
                        </div>
                        <div className="col-12 md:col-6  mt-0 md:mt-3 mx-auto flex align-items-center justify-content-center" data-aos="fade-up">
                            <Icon7 className='w-full' />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="grid mx-0 h-auto min-h-screen text-300 text-center flex align-items-center justify-content-center" style={{ background: "#2A293E" }}>
                        <div className="col-12 md:col-6 mt-8 md:mt-8 px-3">
                            <h2 data-aos="fade-up" className='text-orange-500'>
                                Regístrate ahora!
                            </h2>
                            <h4 data-aos="fade-up">
                                Te esperamos en la siguiente dimensión de la educación, el futuro es hoy.
                            </h4>
                            <h3 data-aos="fade-up" className='text-orange-500'>
                                Curso Emprendimiento!
                            </h3>
                            <Link to='./onlinecourses' data-aos="fade-up" className='no-underline' style={{ color: '#22AFE4' }}><p>Conoce nuestro metaverso</p></Link>
                            <h3 data-aos="fade-up" className='text-orange-500'>
                                Curso Emprendimiento y Tecnología.
                            </h3>
                            <Link to='./onlinecourses' data-aos="fade-up" className='no-underline' style={{ color: '#22AFE4' }}><p>Conoce nuestro metaverso</p></Link>
                        </div>
                        <div className="col-12 md:col-6 mt-3 md:mt-8 px-3">
                            <div className='mx-auto shadow-8 border-round-xs mb-3' data-aos='fade-up' data-aos-duration='1000'>
                                <video width="100%" height="100%" controls>
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                            <Link to='./onlinecourses' className='block no-underline my-5 text-300'><p style={{ color: '#22AFE4' }}>UNETE A NUESTRA COMUNIDAD</p></Link>
                        </div>
                        <Link to='./enrollment' className='block no-underline'><Button label="Activate" className="mb-8 h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px', width: '250px' }} data-aos="fade-right" data-aos-duration='500' /></Link>
                    </div>
                </section>
                <section>
                    <div className="grid mx-0 h-auto min-h-screen surface-100 text-center flex align-items-center justify-content-center">
                            <h2 className='col-12 text-indigo-900  mt-5 md:mt-0 px-3'>
                                No estamos solos...<br></br>
                                ¡Nuestros colaboradores!
                            </h2>
                        <div className="col-12 md:col-2 mx-auto mt-3 md:mt-0">
                            <img src={Sony} alt='sony' className='max-w-10rem w-full'></img>
                        </div>
                        <div className="col-12 md:col-2 mx-auto md:mt-0">
                            <img src={SSI} alt='ssi.jpg' className='max-w-10rem w-full'></img>
                        </div>
                        <div className="col-12 md:col-2 mx-auto md:mt-0">
                            <img src={University} alt='university.jpg' className='max-w-10rem w-full'></img>
                        </div>
                        <div className="col-12 md:col-2 mx-auto md:mt-0">
                            <img src={IKEA} alt='ikea.jpg' className='max-w-10rem w-full'></img>
                        </div>
                        <div className="col-12 md:col-2 mx-auto md:mt-0">
                            <img src={HUAWEI} alt='huawei.jpg' className='max-w-10rem w-full'></img>
                        </div>
                        <div className="col-12 md:col-2 mx-auto my-8 md:mt-8 ">
                            <img src={AINDER} alt='ainder.jpg' className='max-w-10rem w-full'></img>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="grid mx-0 h-auto min-h-screen text-center text-300 flex align-items-center justify-content-center" style={{ background: "#2A293E" }}>
                        <div className="col-12 mt-6 md:mt-0" >
                            <h2 className='text-orange-500'>
                                ¡Y la prensa también habla de nosotros!
                            </h2>
                        </div>
                        <div className="col-12 md:col-4 lg:col-4  my-3 mx-auto max-w-18rem">
                            <img src={ElMundo} alt='elmundo.jpg' className='w-full'></img>
                            <p>“Raquel López Plaza, creadora de Epic Kids Lab, entre las 10 mujeres que han asaltado (y roto) el techo digital en España.”</p>
                        </div>
                        <div className="col-12 md:col-4 lg:col-4  my-3 mx-auto">
                            <img src={Diario} alt='elmundo.jpg' className='max-w-10rem'></img>
                            <p className="">“Los niños son muy creativos y muchas veces tienen grandes ideas de negocio, pero necesitan aprender a enfocar esas ideas y a desarrollarlas.”</p>
                        </div>
                        <div className="col-12 md:col-4 lg:col-4  mt-3 mb-8 mx-auto max-w-18rem">
                            <img src={Emprendedores} alt='elmundo.jpg' className='w-full md:h-10rem'></img>
                            <p>“Los niños son los protagonistas.”</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="grid mx-0 h-auto min-h-screen surface-100 text-center flex align-items-center justify-content-center" style={{ background: "#E2E6Ec", color: "#2A293E", height: "auto", minHeight: '80vh' }}>
                        <div className="col-12  mt-6">
                            <h2 className='text-indigo-900'>
                                Preguntas frecuentes.
                            </h2>
                            <h4 className='text-indigo-900 my-3'>¡Encuentra aquí la respuesta a las preguntas más frecuentes acerca de Epic!</h4>
                        </div>
                        <div className="col-12">
                            <AccordionDemo />
                        </div>
                        <div className="col-12 px-3">
                            <h4 className='text-indigo-900'>Si todavía tienes dudas, contacta con  nuestro equipo Epic. ¡Te responderemos lo antes posible!</h4>
                            <a href='https://wa.me/12345678?text=Hola!%20me%20interesa%20ver%20una%20demo%20gratis' target='_blank' rel="noreferrer" className='block no-underline'><Button label="Contactar" className="mt-4 mb-8 h-4rem bg-orange-500 border-orange-500" style={{ borderRadius: '50px', width: '250px' }} data-aos="fade-down" data-aos-duration='500' /></a>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}

