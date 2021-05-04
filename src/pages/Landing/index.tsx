import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from './../../services/api';

import logo from './../../assets/images/logo.svg';
import landingImg from './../../assets/images/landing.svg';

import studyIcon from './../../assets/images/icons/study.svg';
import giveClassesIcon from './../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from './../../assets/images/icons/purple-heart.svg';

import {
  PageLanding,
  TopBarContainer,
  PageLandingContent,
  PageLandingOptions,
  WelcomeContainer,
  ButtonsContainer,
} from './styles';

import './styles.css';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <PageLanding>
      <PageLandingContent>
        <TopBarContainer>
          <img src="https://avatars.githubusercontent.com/u/38232335?v=4" alt=""/>
          <Link to="/"></Link>
        </TopBarContainer>
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>

          <img src={landingImg} alt="Plataforma de estudos" />
        </div>
      </PageLandingContent>
      <PageLandingOptions>
        <WelcomeContainer>
          <div>
            <h2>
              Seja bem-vindo. <span>O que deseja fazer?</span>
            </h2>
          </div>
          <div>
            <span className="total-connections">
              Total de {totalConnections} conexões já realizadas{' '}
              <img src={purpleHeartIcon} alt="Coração roxo" />
            </span>
          </div>
        </WelcomeContainer>
        <ButtonsContainer>
          <div className="buttons-container">
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>

            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar aulas" />
              Dar aulas
            </Link>
          </div>
        </ButtonsContainer>
      </PageLandingOptions>
    </PageLanding>
  );
}

export default Landing;
