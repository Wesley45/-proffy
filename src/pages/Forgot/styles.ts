import styled from 'styled-components';

import Background from '../../assets/images/squared-background.svg';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'proffy'
    'forgot';
  grid-template-rows: 40vh 1fr;
  height: 100vh;
  width: 100vw;

  @media (min-width: 900px) {
    grid-template-areas: 'forgot proffy';
    grid-template-columns: 50% 50%;
    grid-template-rows: 100vh;
  }
`;

export const ForgotContainer = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  height: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const BackContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 900px) {
    max-width: 70%;
  }
`;

export const FormContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  form {
    width: 100%;
  }

  fieldset {
    border: 0;

    legend {
      margin-bottom: 1.4rem;

      h1 {
        color: var(--color-text-title);
        font: 700 2.2rem Poppins;
        line-height: 3.4rem;
        width: 100%;
      }
    }

    span {
      color: #6a6180;
      display: block;
      font: 400 1.4rem Poppins;
      line-height: initial;
      margin-bottom: 1.4rem;
      width: 100%;
    }
  }

  @media (min-width: 900px) {
    form {
      max-width: 70%;
    }

    fieldset {
      legend {
        margin-bottom: 2.1rem;

        h1 {
          font: 700 3.6rem Poppins;
          width: 26rem;
        }
      }

      span {
        font: 400 1.6rem Poppins;
        line-height: 2.6rem;
        margin-bottom: 2rem;
      }
    }
  }
`;

export const InputBlock = styled.div`
  position: relative;

  &:focus-within::before {
    background: var(--color-primary-light);
    border-radius: 8px;
    content: '';
    height: calc(100% - 1.6rem);
    position: absolute;
    top: 0.8rem;
    bottom: 0.8rem;
    width: 2px;
  }

  &:first-of-type input {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  &:last-of-type input {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }

  &:last-of-type input {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    padding: 0 2.65em 0 1.6rem;
  }

  &:last-of-type a {
    display: block;
    position: absolute;
    background: none;
    border: 0px;
    right: 16px;
    top: 55%;
    transform: translateY(-50%);
    transition: opacity 0.2s ease 0s;
    cursor: pointer;
  }

  input {
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0;
    border-bottom: 0;
    color: var(--color-text-complement);
    font: 1.6rem Archivo;
    height: 5.6rem;
    outline: 0;
    margin: 0;
    padding: 0 1.6rem;
    width: 100%;
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: var(--color-secundary);
  border: 1px solid var(--color-secundary);
  border-radius: 0.8rem;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font: 600 1.6rem Archivo;
  height: 5.6rem;
  justify-content: center;
  margin-top: 1.4rem;
  outline: 0;
  transition: background-color 0.2s;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: var(--color-secundary-dark);
  }

  @media (min-width: 900px) {
    margin-top: 3rem;
  }
`;

export const ProffyLogo = styled.div`
  align-items: center;
  background: url(${Background}) no-repeat;
  background-position: center center;
  background-size: contain;
  display: flex;
  justify-content: center;
  height: 100%;

  img {
    height: auto;
    width: 16rem;
  }

  h2 {
    color: var(--color-text-in-primary);
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2rem;
    width: 14rem;
  }

  @media (min-width: 900px) {
    img {
      height: 9.7rem;
      width: 33.4rem;
    }

    h2 {
      font-size: 2rem;
      line-height: initial;
      height: 5.6rem;
      width: 22.9rem;
    }
  }
`;

export const ProffyContainer = styled.div`
  background: var(--color-primary);
  grid-area: proffy;
`;
