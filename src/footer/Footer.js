import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
    return (
        <section>
            <div className="grid mx-0 h-auto text-center" style={{ background: "#188A94" }}>
                <div className=" lg:col-6 md:col-6 sm:col-12 mt-6 mx-auto">
                    <h3 style={{ color: '#2A293E', textAlign: 'center' }}>
                        Contactanos justo aqui.
                    </h3>
                    <span style={{ fontSize: '50px' }}>
                        <a href='./' className='text-300 no-underline'><FaFacebookF className='col-3' /></a>
                        <a href='./' className='text-300 no-underline'><FaWhatsapp className='col-3' /></a>
                        <a href='./' className='text-300 no-underline'><FaTwitter className='col-3' /></a>
                        <a href='./' className='text-300 no-underline'><FaInstagram className='col-3' /></a>
                    </span>
                </div>
                <div className="px-3 md:px-0 mt-3 md:mt-8 md:col-6 col-12">
                        <a href='./' className='no-underline' style={{ color: "#DAD7CD" }}>hola@epicgrouplab.com</a><a href='./' style={{ color: "#DAD7CD", textDecoration: 'none' }}> expansion@epicgrouplab.com</a>
                        <br></br>
                        <Link to='./onlinecourses' className='block no-underline text-indigo-900'>Conoce nuestros cursos</Link>
                        <Link to='./onlinecourses' className='block no-underline text-indigo-900'>Conoce nuestros centros</Link>
                        <a href='./' className='no-underline' style={{ color: "#DAD7CD" }}> Aviso Legal /</a> <a href='./' style={{ color: "#DAD7CD", textDecoration: 'none' }}> Política de Privacidad</a>
                        <br></br>
                        <a href='./' className='no-underline' style={{ color: "#DAD7CD" }}>Política de Cookies /</a><a href='./' style={{ color: "#DAD7CD", textDecoration: 'none' }}> Condiciones de venta</a>
                        <Link to='./enrollment' className='block no-underline' style={{ color: '#22AFE4' }}><Button label="Activate" className="my-5 h-4rem " style={{ width: '150px', borderRadius: '50px', backgroundColor: '#2A293E', borderColor: '#2A293E' }} /></Link>
                </div>
            </div>
        </section>
    );
}