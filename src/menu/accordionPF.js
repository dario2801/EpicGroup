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
                        <AccordionTab header="¿Qué necesito para tener mi propia escuela?" >
                            <p>No se requiere experiencia previa en la enseñanza, pero sí es necesario tener una fuerte vocación empresarial para gestionar tu propio negocio.
                                No es imprescindible que tengas un alto nivel de inglés, ni que domines varios idiomas, ya que diferenciaos entre la dirección de la franquicia y la parte pedagógica.</p>
                        </AccordionTab>
                        <AccordionTab header="¿Necesito un local para ser franquiciado?">
                            <p>Sólo si quieres abrir tu propia escuela, en EpicGroup Lab tenemos dos modelos de negocio:
                                ·Con el modelo EPIC LICENSE no necesitas local, ni realizar una gran inversión, ya que trabajarás desarrollando nuestras actividades para niños en colegios y centros educativos.
                                ·Con el modelo EPIC CENTER necesitarás un local a partir de 60 m2 en el que abrir tu escuela.</p>
                        </AccordionTab>
                        <AccordionTab header="¿Qué población mínima se requiere para abrir una escuela?">
                            <p>Con los dos modelos recomendamos localidades a partir de 20.000 habitantes para garantizar la rentabilidad de tu inversión.</p>
                        </AccordionTab>
                        <AccordionTab header="¿Qué formación recibiré por parte de Epic?">
                            <p>Como franquiciado es fundamental que domines todas las áreas del negocio, por lo que recibirás una amplia formación desde el principio.
                                Te formaremos a nivel comercial, metodológico, técnico y laboral para que puedas gestionar y dirigir tu escuela. Además, tus mentores recibirán formación pedagógica continuada para trabajar con nuestra metodología.</p>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        )
    }
}