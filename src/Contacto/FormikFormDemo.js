
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { CountryService } from './CountryService';
import '../App.css';

export const FormikFormDemo = () => {
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const countryservice = new CountryService();

    useEffect(() => {
        fetch('./countries.json').then((res) => { res.json().then((res) => setCountries(res)) }).catch((err) => console.log(err));
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: null,
            country: null,
            city: '',
            accept: false,
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Nombre es requerido.';
            }
            if (!data.city) {
                errors.city = 'Ciudad es requerida.';
            }
            if (!data.phone) {
                errors.phone = 'Telefono es requerido.';
            }

            if (!data.email) {
                errors.email = 'Email es requerido.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Direccion de correo invalida. Ejem: example@email.com';
            }

            if (!data.accept) {
                errors.accept = 'Debe estar de acuerdo con los terminos y condiciones.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    return (
        <section>
            <div className="form-demo">
                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="middle" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="flex align-items-center flex-column pt-6 px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Se ha registrado correctamente</h5>
                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                            Se ha registrado con el nombre de <b>{formData.name}</b>
                        </p>
                    </div>
                </Dialog>

                <div className="flex justify-content-center surface-100">
                    <div className="card my-8">
                        <h3 className="text-center text-orange-500 text-3xl">Contacto: Clase Demo</h3>
                        <form onSubmit={formik.handleSubmit} className="p-fluid">
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                    <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Nombre*</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                    <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Correo*</label>
                                </span>
                                {getFormErrorMessage('email')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="city" name="Ciudad" value={formik.values.city} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('city') })} />
                                    <label htmlFor="city" className={classNames({ 'p-error': isFormFieldValid('city') })}>Ciudad*</label>
                                </span>
                                {getFormErrorMessage('city')}
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <Dropdown id="country" name="country" value={formik.values.country} onChange={formik.handleChange} options={countries} optionLabel="name" />
                                    <label htmlFor="country">Pais*</label>
                                </span>
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <InputText id="phone" name="phone" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('phone') })} />
                                    <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid('phone') })}>Telefono*</label>
                                </span>
                                {getFormErrorMessage('phone')}
                            </div>
                            <div className="field-checkbox">
                                <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                                <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>Estoy de acuerdo con los terminos y condiciones*</label>
                            </div>

                            <Button type="submit" label="Suscribirme" className="my-3 bg-orange-500 border-orange-500" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
