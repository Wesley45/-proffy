import styled from 'styled-components';

import Background from '../../assets/images/squared-background.svg';
import Check from '../../assets/images/icons/check.svg';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'proffy'
    'login';
  grid-template-rows: 40vh 1fr;
  height: 100vh;
  width: 100vw;

  @media (min-width: 900px) {
    grid-template-areas: 'proffy login';
    grid-template-columns: 50% 50%;
    grid-template-rows: 100vh;
  }
`;

export const LoginContainer = styled.div`
  background: var(--color-primary);
  grid-area: proffy;
`;

export const ProffyLogo = styled.div`
  align-items: center;
  background: url(${Background}) no-repeat;
  background-position: center center;
  background-size: contain;
  display: flex;
  height: 100%;
  justify-content: center;

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

export const FormContainer = styled.div`
  align-items: center;
  display: flex;
  grid-area: login;
  height: 100%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  width: 100%;

  form {
    width: 100%;

    fieldset {
      border: 0;

      legend {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.4rem;
        width: 100%;

        h2 {
          color: var(--color-text-title);
          font: 600 2.2rem Poppins;
          line-height: 3.4rem;
        }

        a {
          color: var(--color-primary);
          display: block;
          font: 400 1.2rem Poppins;
          transition: color 0.2s;
          text-align: right;
          text-decoration: none;
        }

        a:hover {
          color: var(--color-primary-dark);
        }
      }

      button {
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
        margin-top: 2rem;
        outline: 0;
        transition: background-color 0.2s;
        text-decoration: none;
        width: 100%;

        &:hover {
          background-color: var(--color-secundary-dark);
        }

        &:disabled {
          background: #dcdce6;
          border: 1px solid #dcdce6;
          color: #9c98a6;
        }
      }
    }
  }

  @media (min-width: 900px) {
    form {
      max-width: 70%;

      fieldset {
        legend {
          margin-bottom: 4rem;

          h2 {
            font-size: 3.6rem;
          }

          a {
            display: none;
          }
        }

        button {
          margin-top: 3rem;
        }
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
    padding: 0 2.65em 0 1.6rem;
  }

  &:last-of-type {
    position: relative;
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

export const LoginTools = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
  width: 100%;

  span input {
    position: absolute;
    opacity: 0;
  }

  span label {
    color: #9c98a6;
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding: 0;
    position: relative;
  }

  span label::before {
    content: '';
    box-sizing: border-box;
    margin-top: -2px;
    margin-right: 8px;
    display: inline-block;
    vertical-align: text-top;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.8rem;
    border: 1px solid #e6e6f0;
    background: #fafafc;
  }

  span input:checked + label::before {
    background: #04d361;
    border: 2px solid #04d361;
  }

  span input:focus + label::before,
  span input:hover + label::before {
    border: 2px solid #04d361;
  }

  span input:checked + label::after {
    content: url('${Check}');
    position: absolute;
    left: 7px;
    top: -4px;
    width: 2px;
    height: 2px;
  }

  a {
    color: #9c98a6;
    font: 400 1.2rem Poppins;
    line-height: 2.4rem;
    text-align: right;
    text-decoration: none;
  }

  @media (min-width: 900px) {
    div label {
      font-size: 1.4rem;
    }

    a {
      font-size: 1.4rem;
    }
  }
`;

export const LoginFooter = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    margin-top: 8rem;
    width: 100%;

    div {
      color: #6a6180;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 1.6rem;
      line-height: 2.6rem;

      a {
        color: var(--color-primary-dark);
        font-weight: 700;
      }
    }

    span {
      color: var(--color-text-complement);
      font: 400 1.2rem Poppins;
      line-height: 2rem;
      text-align: right;
    }
  }
`;
