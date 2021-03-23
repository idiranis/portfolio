import React, { useContext, useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { LiquidDistortionText } from 'react-text-fun';
import Typist from 'react-typist';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            links: {
              enable: false,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: 'images',
              image: [
                {
                  src: 'https://img.icons8.com/color/100/000000/github--v1.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/html-5.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/android-os.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/css3.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/javascript.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/linux.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/50/000000/react-native.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/mongodb.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/mysql.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/nodejs.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/npm.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/officel/100/000000/react.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/typescript.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/symfony.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/bootstrap.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/windows/100/000000/git-squared.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/docker-container.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/source-code.png',
                  height: 100,
                  width: 100,
                },
                {
                  src: 'https://img.icons8.com/color/100/000000/material-ui.png',
                  height: 100,
                  width: 100,
                },
              ],
            },
            size: {
              random: false,
              value: 20,
              anim: {
                enable: true,
                speed: 20,
                size_min: 8,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || '{  Hi, my name is'}{' '}
            <LiquidDistortionText
              className="hero-title"
              text="AnisIDIR"
              paddingTop={28}
              fill="#0e0147"
              fontSize={120}
              speed={0.6}
              volatility={0.02}
            />
            <Typist>{subtitle || "I'm a Web & Mobile developer } ;"} </Typist>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
