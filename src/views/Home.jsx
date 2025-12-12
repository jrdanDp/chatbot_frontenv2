<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Common/Footer';
import InfoCard from '../components/Home/InfoCard';
import Testimonial from '../components/Home/Testimonial';
import '../styles/home.css';
=======
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> 3ba1d143ba0c1fdab7309cb55ed369554f725765

const Home = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  return (
    <div className="home-view">
      
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Tu espacio seguro para hablar</h1>
            <p className="hero-subtitle">
              Confidencial, anónimo y un puente hacia ayuda profesional.
            </p>
            <p className="hero-description">
              SerenBot es tu compañero terapéutico digital. Un espacio libre de juzgamientos 
              donde puedas expresar tus pensamientos y emociones sin reservas.
            </p>
            <button 
              className="button button-primary button-lg"
              onClick={() => navigate('/chat')}
            >
              Comenzar Chat
            </button>
          </div>
          <div className="hero-illustration">
            <div className="illustration-placeholder">
              🌱
            </div>
          </div>
        </div>
      </section>

      <section className="info-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Un espacio diseñado con cuidado para tu bienestar</h2>
          </div>

          <div className="info-grid">
            <InfoCard 
              icon="🔒"
              title="Anonimato total"
              description="Completa privacidad en todas tus conversaciones. Nadie sabrá que estuviste aquí."
            />
            <InfoCard 
              icon="🤝"
              title="Puente hacia profesionales"
              description="Cuando lo necesites, encuentra orientación hacia ayuda profesional de calidad."
            />
            <InfoCard 
              icon="🌱"
              title="Confianza y calma"
              description="Un espacio libre de juzgamientos donde puedas expresarte sin restricciones."
            />
          </div>
        </div>
      </section>

      <Testimonial />

      <Footer hideBackground={false} />
=======
 
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="color-home">SerenBot</h1>
        <p className="subtitle">Tu compañero terapéutico digital</p>
        <p className="description">
          Un espacio seguro para expresar tus pensamientos y emociones. 
          Por favor completa nuestro breve formulario antes de comenzar.
        </p>
      </header>

      <div className="cta-section">
 
        
        <button 
          className={`button primary-button large-button`}
          onClick={  () => navigate('/chat') }
        >
          Probar SerenBot
        </button>
      </div>
>>>>>>> 3ba1d143ba0c1fdab7309cb55ed369554f725765
    </div>
  );
};

export default Home;