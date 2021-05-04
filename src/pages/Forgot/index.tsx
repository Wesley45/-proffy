import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ProffyContainer,
  ProffyLogo,
  ForgotContainer,
  BackContainer,
  FormContainer,
  InputBlock,
  Button,
} from './styles';

import Logo from './../../assets/images/logo.svg';
import BackIcon from './../../assets/images/icons/backIcon.svg';

const Forgot = () => {
  return (
    <Container>
      <ForgotContainer>
        <BackContainer>
          <Link to="/">
            <img src={BackIcon} alt="Voltar" />
          </Link>
        </BackContainer>
        <FormContainer>
          <form action="">
            <fieldset>
              <legend>
                <h1>Eita, esqueceu sua senha?</h1>
              </legend>
              <span>Não esquenta, vamos dar um jeito nisso.</span>
              <InputBlock>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
              </InputBlock>
              <Button>Enviar</Button>
            </fieldset>
          </form>
        </FormContainer>
      </ForgotContainer>
      <ProffyContainer>
        <ProffyLogo>
          <div>
            <img src={Logo} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </ProffyLogo>
      </ProffyContainer>
    </Container>
  );
};

export default Forgot;
