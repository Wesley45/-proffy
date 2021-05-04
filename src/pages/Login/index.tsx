import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  LoginContainer,
  ProffyLogo,
  FormContainer,
  InputBlock,
  LoginTools,
  LoginFooter,
} from './styles';

import logo from './../../assets/images/logo.svg';
import heart from './../../assets/images/icons/purple-heart.svg';
import EveIcon from '../../assets/images/icons/eye-icon.svg';

function Login() {
  return (
    <Container>
      <LoginContainer>
        <ProffyLogo>
          <div>
            <img src={logo} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </ProffyLogo>
      </LoginContainer>

      <FormContainer>
        <form action="">
          <fieldset>
            <legend>
              <h2>Fazer login</h2>
              <Link to="/signup">Criar uma conta</Link>
            </legend>
            <div>
              <div className="page-login__login-container__form">
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
              </div>
              <LoginTools>
                <span>
                  <input type="checkbox" name="remember_me" id="remember_me" />
                  <label htmlFor="remember_me">Lembrar-me</label>
                </span>
                <Link to="/forgot">Esqueci minha senha</Link>
              </LoginTools>
              <button type="button" className="page-login__button">
                Entrar
              </button>
            </div>
          </fieldset>
          <LoginFooter>
            <div>
              <p>Não tem conta?</p>
              <Link to="/signup">Cadastre-se</Link>
            </div>
            <span>
              {' '}
              É de graça <img src={heart} alt="Purple Heart" />
            </span>
          </LoginFooter>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Login;
