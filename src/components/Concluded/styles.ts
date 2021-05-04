import styled from 'styled-components';

import SuccessBackground from '../../assets/images/success-background.svg';

export const Container = styled.div`
  background: var(--color-primary);
  height: 100vh;
  width: 100vw;
`;

export const ConcludedContainer = styled.div`
  align-items: center;
  background: url(${SuccessBackground}) no-repeat;
  background-size: contain;
  background-position: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  h1 {
    color: #ffffff;
    font-family: Archivo;
    font-weight: 700;
    line-height: 4.2rem;
    text-align: center;
  }

  p {
    color: #d4c2ff;
    font: 400 1.6rem Poppins;
    line-height: 2.6rem;
    text-align: center;
    margin-bottom: 8rem;
    margin-top: 2rem;
    max-width: 40rem;
  }

  a {
    align-items: center;
    background-color: var(--color-secundary);
    border: 1px solid var(--color-secundary);
    border-radius: 0.8rem;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font: 600 1.6rem Archivo;
    justify-content: center;
    line-height: 2.6rem;
    padding: 1.5rem 4rem;
    outline: 0;
    transition: background-color 0.2s;
    text-decoration: none;
    width: 100%;

    &:hover {
      background-color: var(--color-secundary-dark);
    }

    @media (min-width: 900px) {
      max-width: 20rem;
      margin: auto;
    }
  }
`;

export const IconSuccess = styled.div`
  align-items: center;
  border: 6px solid var(--color-secundary);
  border-radius: 2.3rem;
  display: flex;
  height: 9rem;
  justify-content: center;
  margin-bottom: 4rem;
  width: 9rem;

  i {
    color: var(--color-secundary);
    font-size: 2.5rem;
  }
`;
