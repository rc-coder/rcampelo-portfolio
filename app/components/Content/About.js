import { useState } from 'react';
import { AboutContainer, ArrowContainer } from './aboutElements';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';

export const About = () => {
  const [showArrow, setshowArrow] = useState(true);
  //js para scroll horizontal, para usarlo se usa el evento onMouseEnter
  //No aplicado por no encajar en el diseño
  // const handleScroll = () => {
  //   const slider = document.getElementById('horizontalSlide');

  //   slider.addEventListener('wheel', (event) => {
  //     event.preventDefault();
  //     slider.scrollLeft += event.deltaY;
  //   });
  // };

  const slideLeft = () => {
    const slider = document.getElementById('horizontalSlide');
    slider.scrollLeft -= 1000;
    slider.scrollLeft == slider.scrollWidth
      ? setshowArrow(false)
      : setshowArrow(true);
  };

  const slideRight = () => {
    const slider = document.getElementById('horizontalSlide');
    slider.scrollLeft += 1000;

    slider.scrollLeft < slider.scrollWidth
      ? setshowArrow(false)
      : setshowArrow(true);
  };

  return (
    <>
      <ArrowContainer>
        <span onClick={slideLeft} className={showArrow ? '' : 'show moveL'}>
          <HiChevronLeft />
        </span>
        <AboutContainer id="horizontalSlide">
          <div>
            <h2>Sobre mi </h2>
            <br />
            <p>
              Soy Ricardo, un chef, sushiman y gamer con una pasión por la
              tecnología y el aprendizaje, por eso hace un par de años decidí
              dar un giro a mi vida y carrera profesional aventurandome en el
              mundo de la programación, si, se que puede parecer una combinación
              extraña pero sé que tengo las habilidades y pasión necesarias para
              triunfar en este campo.
            </p>
            <br />
            <p>
              Me encanta crear platos deliciosos y originales, y también me
              gusta resolver problemas lógicos y aprender nuevos lenguajes. He
              estado estudiando por mi cuenta algunos cursos de programación
              online, y he aprendido los fundamentos de HTML, CSS, JavaScript y
              Java. Tengo experiencia en frameworks como React, NextJS, Spring y
              Angular y he creado algunos proyectos personales.
            </p>
            <br />
            <p>
              Soy una persona creativa, resolutiva y con capacidad de
              aprendizaje, siempre estoy en busqueda de conocimiento y no me
              limito. Estoy dispuesto a enfrentarme a cualquier reto que se me
              presente, y a demostrar que puedo programar tan bien como cocino.
            </p>
          </div>
          <div>
            <p>
              Una de mis aficiones favoritas es jugar videojuegos. Si no me
              encuentras en la cocina o en la pc probando alguna nueva
              tecnología, me encontraras en recorriendo Hyrule, disparando en el
              planeta Zebes o a veces perdiendo la paciencia en Runeterra, todo
              esto con un soundtrack de la mejor musica rara, indie y
              alternativa de fondo.
            </p>
            <br />
            <p>
              Los videojuegos me ayudan a relajarme, a desarrollar mi
              creatividad y a mejorar mis habilidades cognitivas. Creo son una
              forma de expresión artística y cultural que enriquece mi vida.
            </p>
            <br />
            <p>
              Una de mis aspiraciones, siempre ha sido crear un videojuego y
              considero que todo lo que he aprendido en estos años me ayudaran a
              lograrlo.
            </p>
          </div>
        </AboutContainer>
        <span onClick={slideRight} className={showArrow ? 'show moveR' : ''}>
          <HiChevronRight />
        </span>
      </ArrowContainer>
    </>
  );
};
