import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ProffyContainer,
  ProffyLogo,
  SignContainer,
  FormContainer,
  InputBlock,
  Button,
  BackContainer,
} from './styles';

import logo from './../../assets/images/logo.svg';
import backIcon from './../../assets/images/icons/backIcon.svg';
import EveIcon from '../../assets/images/icons/eye-icon.svg';

const Signup = () => {
  return (
    <Container>
      <SignContainer>
        <BackContainer>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
        </BackContainer>
        <FormContainer>
          <form action="">
            <fieldset>
              <legend>
                <h2>Cadastro</h2>
              </legend>
              <span>Preencha os dados abaixo para começar.</span>
              <InputBlock>
                <input type="text" name="name" id="name" placeholder="Nome" />
              </InputBlock>
              <InputBlock>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Sobrenome"
                />
              </InputBlock>
              <InputBlock>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
              </InputBlock>
              <InputBlock>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Senha"
                />
                <a>
                  <img src={EveIcon} alt="" />
                </a>
              </InputBlock>
              <Button>Concluir cadastro</Button>
            </fieldset>
          </form>
        </FormContainer>
      </SignContainer>
      <ProffyContainer>
        <ProffyLogo>
          <div>
            <img src={logo} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </ProffyLogo>
      </ProffyContainer>
    </Container>
  );
};

export default Signup;
