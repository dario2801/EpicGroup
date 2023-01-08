import React, { Component } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import '../App.css';
export class AccordionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: null
        }
    }

    onClick(itemIndex) {
        let activeIndex = this.state.activeIndex ? [...this.state.activeIndex] : [];

        if (activeIndex.length === 0) {
            activeIndex.push(itemIndex);
        }
        else {
            const index = activeIndex.indexOf(itemIndex);
            if (index === -1) {
                activeIndex.push(itemIndex);
            }
            else {
                activeIndex.splice(index, 1);
            }
        }

        this.setState({ activeIndex });
    }

    render() {
        return (
            <div className="accordion-demo">
                <div className="card" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                {/* activeIndex={0} */}
                    <Accordion  >
                        <AccordionTab header="¿Qué es EpicGroup Lab?" >
                            <p>Somos la primera escuela que se centra en el desarrollo de habilidades blandas mediante el conocimiento en emprendimiento, los negocios y las nuevas tecnologías.
                                ¿Sabías que el 80% de que te acepten para un puesto de trabajo en un proceso de selección depende del desarrollo de las habilidades del candidato?
                                El mundo no está cambiando, el mundo HA CAMBIADO y hoy se valora más QUÉ SABES HACER CON LO QUE SABES, que cuánto sabes. El conocimiento se adquiere, pero las habilidades se desarrollan. No podemos educar a las nuevas generaciones como nos educaron a nosotros, no porque esté mal, si no, porque ese mundo ya no existe y no volverá. Hay que educar enfocados en el futuro y en dotar de las herramientas necesarias a nuestras generaciones, para que puedan crear la vida de sus sueños. ¿Es que acaso, no es ese el objetivo de cualquier padre o madre?
                                Como una sacudida a la educación, EpicGroup nació con un propósito, innovar y colocar en el centro del aprendizaje al alumno, siendo el protagonista, como lo es en su vida diaria, solo tú puedes vivir tu propia vida. Desde España, hace 4 años, hemos construido una comunidad internacional con alumnos en más de 14 países y hoy tenemos presencia física en 3 continentes.</p>
                        </AccordionTab>
                        <AccordionTab header="¿Qué ofrece EpicGroup Lab y por qué no lo vas a encontrar en otro lugar?">
                            <p>Nos enfrentamos a una de las generaciones más increíbles que haya existido. La mayoría han vivido infinidad de situaciones que no han provocado ellos y aun así demuestran ser una generación autodidacta, con infinitas inquietudes, concienciadas con el entorno, el medioambiente y ganas infinitas de conocer el mundo. Saben, como nosotros, que el futuro es DIGITAL Y GLOBAL.

                                En Epic trabajamos 3 pilares fundamentales para afrontar el futuro.

                                1: Desarrollo de habilidades blandas: creatividad, trabajo en equipo, empatía, tolerancia, resolución de conflictos, responsabilidad, trabajo sin supervisión constante, cultura del esfuerzo, la importancia del fracaso para el éxito…

                                2: Emprendimiento y nuevos negocios: ¿Y no es el emprendedor el que desarrolla todas estas actitudes y aptitudes persiguiendo su propio sueño? El emprendimiento es una de las herramientas, no solo para desarrollarse como persona, si no, para construir el futuro con unas bases solidas. Contamos con un programa empresarial que evoluciona a la vez que los negocios y eso permite tener a nuestros alumnos actualizados con las últimas herramientas. Además contamos con un programa adaptado a todos los públicos, para facilitar su aprendizaje. El objetivo del mismo, es CREAR UN NEGOCIO, y así es como nos garantizamos el aprendizaje y desarrollo del alumno. Le acompañamos desde el desarrollo de la idea, hasta la búsqueda de financiación en un ecosistema empresarial global.

                                3: Tecnología: Un sector que evoluciona por minutos y nos permite actualizar los conocimientos más disruptivos e innovadores en nuestros alumnos. Desde programar un videojuego, una web hasta crear espacios en el metaverso, diseñar NFT, construir chatbot con inteligencia artificial y aprender sobre el nuevo internet, la WEB 3.0. Gracias a nuestro modelo de aprendizaje, los alumnos aprenden HACIENDO, y los resultados se ven desde la primera clase.</p>
                        </AccordionTab>
                        <AccordionTab header="¿Cómo son las clases en EpicGroup Lab?">
                            <p>Nuestras clases son virtuales. Nuestros alumnos eligen primero, el CURSO:
                                1. Curso: Emprendimiento, es una hora a la semana, de lunes a viernes. 69 dólares/mes.
                                2. Curso 2: Emprendimiento y Teconología, 2 horas semanales de lunes a viernes. 89 dólares/mes

                                Paso 2: Eligen el horario en función a su beneficio. (COMPROBANDO CON LA DISPONIBILIDAD Y PLAZAS, grupos máximo de 15 alumnos por hora y mentor). En el caso de no disponer del horario, se aperturarán nuevos grupos siempre y cuando exista un mínimo de 5 alumnos.

                                Paso 3: Todos nuestros alumnos tienen acceso a una plataforma de contenidos y un mentor asignado, que es quién le acompaña durante todo el programa. Una vez registrado recibirá un correo con el usuario, la contraseña y el link de la plataforma.

                                Dispondrá de un enlace para acceder a sus clases en directo con su grupo y mentor, para los días seleccionados, además de una carpeta con acceso al contenido visto.
                                Al suscribirse al curso, además está adquiriendo el acceso a la comunidad internacional, clases en directo de infinitas disciplinas como: programación, diseño gráfico, cocina, ajedrez, videojuegos e construcción de espacios virtuales… Un espacio multidisciplinar de más de 80 clases mensuales en directo, con e equipo de central, dónde aprender, relacionarse y crear. Un espacio para aprender todas las oportunidades que te ofrece la tecnología y el pertenecer a un grupo internacional.</p>
                        </AccordionTab>
                        <AccordionTab header="¿Qué les aporta EpicGroup a los alumnos?">
                            <p>Confianza, nuevas relaciones personales de valor con las mismas metas, un uso productivo de la tecnología, aaprovechar la oportunidad de esta herramienta para formarte desde las bases.</p>
                        </AccordionTab>
                        <AccordionTab header="¿Por qué somos la mejor opción para el futuro de tus hijos y no hay una extraescolar que les aporte más valor?">
                            <p>Porque siempre estamos a la vanguardia para enseñar a nuestros alumnos, todo lo que necesitan para conseguir el futuro al que aspiran, el futuro con el que sueñan. Facilitamos el trabajo de las familias en cuanto a la nueva era educativa y conseguimos crear a los líderes del mañana.
                                El futuro es hoy. La suerte se trabaja y los sueños se construyen. Si perteneces al 20% de los padres que quiere potenciar el talento de su hijo, proporcionarle las herramientas necesarias y cree en su futuro, entonces, reserva tu plaza ya.</p>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        )
    }
}