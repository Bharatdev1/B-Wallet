import React from 'react'
import { useTranslation } from "react-i18next";
import './About.css'
const About = () => {
  const { t } = useTranslation();
  return (
    <div className='container'>

       <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 HeaderImage" src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg" alt="First slide"/>
    </div>
  </div>

      <h1>{t('BuyHeading')}</h1>
      <h3>{t('HeadText')}</h3>
    </div>
  )
}

export default About