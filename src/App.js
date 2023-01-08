import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './MenuBar/MenuBar';
import MenuBar from './menu/Menu';
import Matriculate from './matricula/SesionMatricula.js';
import ConoceCursosOnlineEnlace from './ConoceCursosOnline/ConoceCursosOnlineEnlace';
import Informate from './Informate/Informate';
import Footer from './footer/Footer';
import Error404 from './PageNotFound/Error';
import Mentores from './mentores/mentores';
// import Contacto from './Contacto/FormikFormDemo';
import {FormikFormDemo as Contacto} from './Contacto/FormikFormDemo';

export default function App() {
  AOS.init();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MenuBar />} />
        <Route exact path="/enrollment" element={<Matriculate />} />
        <Route exact path="/onlinecourses" element={<ConoceCursosOnlineEnlace />} />
        <Route exact path="/information" element={<Informate />} />
        <Route exact path="/teachers" element={<Mentores />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
    // <FormikFormDemo/>
  );
}

