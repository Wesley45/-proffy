import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-areas:
    'proffy'
    'options';
  grid-template-rows: 1fr 30vh;
  grid-template-columns: 1fr;
`;

export const TopBarContainer = styled.header`
  align-items: center;
  color: var(--color-text-in-primary);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.6rem 0;
  width: 90%;

  img {
    height: 1.6rem;
  }

  a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const PageLandingContent = styled.div`
  background: var(--color-primary);
  color: var(--color-text-in-primary);
  grid-area: proffy;
  height: 100%;

  div img {
    width: 100%;
  }

  @media (min-width: 1100px) {
    > div {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: space-between;
      margin: auto;
      max-width: 110rem;
    }
  }
`;

export const PageLandingOptions = styled.div`
  align-items: center;
  display: grid;
  grid-area: options;
  grid-template-areas: 'welcome buttons';
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  height: 100%;
  max-width: 70rem;
  width: 100%;

  @media (min-width: 1100px) {
    margin: auto;
    max-width: 110rem;
  }
`;

export const WelcomeContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  div {
    height: 6rem;
    width: 20rem;

    h2 {
      font-size: 2rem;
      font-weight: 400;
      line-height: 3rem;

      span {
        color: var(--color-text-base);
        font-weight: 600;
        font-size: inherit;
        line-height: inherit;
      }
    }
  }

  div + div {
    height: 4rem;
    width: 16rem;
  }

  span {
    align-items: center;
    color: var(--color-text-complement);
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    line-height: 2rem;
    text-align: right;

    img {
      margin-left: 0.8rem;
    }
  }
`;

export const ButtonsContainer = styled.div``;
