import React from 'react';
import '../styles/global.css'; //Todas importações de CSS ou Imagem, vão partir sempre de arquivos tsx ou jsx e não pelo HTML 
import '../styles/pages/landing.css';
import { Link } from 'react-router-dom'

import logoImg from '../images/logo.svg';
import {FiArrowRight} from 'react-icons/fi'


function Landing() {
    return(

        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy" />
  
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
  
          <div className="location">
            <strong>Fortaleza</strong>
            <span>Ceará</span>
          </div>
  
          <Link to ="/app" className="enter-app">
            <FiArrowRight  size={26} color="rgba(0, 0, 0.6)" />
          </Link>
  
  
        </div>
      </div>

    );
}

export default Landing;