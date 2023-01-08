import { ReactComponent as Icon14 } from '../utils/undraw_teaching_re_g7e3.svg';
import { FaAngleDoubleDown } from "react-icons/fa";
export default function ConoceCursosOnlineEnlace() {
    return (
        <div className='w-full'>
            <section>
                <div className='grid mx-0 surface-100 h-auto min-h-screen  flex align-items-center justify-content-center'>
                    <div className='mt-8 md:col-6 col-12 max-w-30rem px-3 mx-auto text-center'>
                        <h1 className='text-indigo-900 text-5xl' data-aos='fade-down'>¡Conoce a nuestros mentores de la comunidad Epic!</h1>
                        <h4 data-aos='fade-down' data-aos-duration='200'>Contamos con mentores especializados en cada campo y en todas las tecnologías empleadas en los cursos de EpicGroup Lab.</h4>
                    </div>
                    <div className=' md:px-5 my-8 px-3 md:col-6 col-12 mx-auto max-w-screen' data-aos='fade-right' data-aos-duration='1000'>
                        <Icon14 className='w-full h-16rem md:h-full' />
                    </div>
                </div>
            </section>
            <section>
                <div className='grid mx-0  h-auto min-h-screen relative ' style={{ background: '#2A293E' }} >
                    <div className='mt-8 md:col-6 col-12 max-w-30rem px-3 md:px-5 z-1 mx-auto text-center '>
                        <h2 className='text-orange-500' data-aos='fade-up'>¡Conócelos a todos!</h2>
                        <h4 className='text-300' data-aos='fade-up'>Descubre a los mentores de la comunidad especializados que te formarán para construir el futuro que sueñas.</h4>
                    </div>
                    <div className='md:px-5 px-3 md:col-6 col-12 mx-auto max-w-screen z-1' data-aos='fade-up' data-aos-duration='1000'>
                        <Icon14 className='w-full' />
                        imagen
                    </div>
                    <div className='md:px-5 px-3 md:col-6 col-12 mx-auto max-w-screen z-1' data-aos='fade-up' data-aos-duration='1000'>
                        <Icon14 className='w-full' />
                        imagen
                    </div>
                    <div className='md:px-5 px-3 md:col-6 col-12 mx-auto max-w-screen z-1' data-aos='fade-up' data-aos-duration='1000'>
                        <Icon14 className='w-full' />
                        imagen
                    </div>
                    <div className='md:px-5 px-3 md:col-6 col-12 mx-auto max-w-screen z-1' data-aos='fade-up' data-aos-duration='1000'>
                        <Icon14 className='w-full' />
                        imagen
                    </div>
                    <div className='pt-8 md:col-6 col-12 max-w-30rem px-3 md:px-5 mx-auto text-center text-300 mb-8 md:mb-0'>
                        <h2 className='text-orange-500 ' data-aos='fade-down'>¿Quieres ser mentor Epic?</h2>
                        <p data-aos='fade-down' data-aos-duration='200'>¡Envíanos tu CV a nuestro correo y nos pondremos en contacto contigo!</p>
                        <div className='col-12 my-3 flex align-items-center justify-content-center'>
                            <FaAngleDoubleDown className='text-orange-500 text-3xl' />
                        </div>
                        <a className='block no-underline' href='./' style={{ color: '#22AFE4' }}><h3>hola@epicgrouplab.com</h3></a>
                    </div>
                </div>
            </section>
        </div>
    );
}