import React from 'react';
import './App.css';

import instagramIcon from './instagram.svg';
import facebookIcon from './facebook.svg';
import emailIcon from './gmail.png';

function App() {
  return (
    <div className="body">
        <h1 className="mainTitle">Live CO2</h1>
        <div className="intro">
            <p><b>Live CO2</b> nace en 2019 con el objetivo de valorar los árboles por su absorción de carbono.</p>
            <p>Para ello queremos <b>cuantificar, certificar y poner a disposición del mercado</b> las toneladas de CO2 absorbidas por los bosques.</p>
            <div className="spacedText">
                <p>Actualmente nuestro proyecto <b>esta en fase de desarrollo</b>, por lo que agradecemos tus ideas y sugerencias.</p>
                <p>Si quieres saber mas sobre nosotros, quieres colaborar aportando tus ideas o estas interesado en certificar el CO2 absobido por tus árboles, estaremos muy contentos de hablar contigo.</p>
            </div>
            <p className="subTitle">Contacta con nosotros</p>
            <div className="contact">
              <a href="https://instagram.com/live_co2" target="_blank" rel="noopener noreferrer">
                <img className="social-link" src={instagramIcon} alt="instagramIcon" />
              </a>
                <a href="https://www.facebook.com/liveco2/" target="_blank" rel="noopener noreferrer">
                    <img className="social-link" src={facebookIcon} alt="facebookIcon" />
                </a>
                <a href="mailto:team@liveco2.com"><img className="social-link" src={emailIcon} alt="envelopeIcon" /></a>
            </div>
        </div>
    </div>
  );
}

export default App;
