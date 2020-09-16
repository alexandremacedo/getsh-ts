import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
`;

export const Header = styled.header`
  margin-top: 30px;
  padding: 12px 0;
`;

export const HeaderContent = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a{
    img{
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 600px){
    max-width: 400px;
  }
`;

export const Content = styled.main`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px){
    max-width: 345px;
  }
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0.1;
    transform: translateX(-30px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SectionOne = styled.section`
  height: calc(100vh - 210px);
  display: flex;

  > div {
    margin: auto 0;
    animation: ${appearFromLeft} 0.9s;

    h1 {
      font-size: 68px;
      line-height: 1.4;
      font-weight: 900;
      letter-spacing: -.8px;
    }

    > div {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
    }

  }

  @media (max-width: 600px){
    > div{
      min-width: 100%;
      h1 {
        font-size: 40px;
        line-height: 1.4;
        display: flex;
        justify-content: center;
      }

      > div {
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (max-width: 1200px) and (min-width: 800.5px){
    > div{
      min-width: 100%;
      padding: 0 10px;
      h1 {
        font-size: 56px;
        line-height: 1.4;
        display: flex;
      }

    }
  }

`;

export const ButtonAndroid = styled.button`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  height: 54px;
  width: 220px;
  border-radius: 35px;
  transition: all 0.45s;
  background-image: linear-gradient(-133deg,#27AF9A,#29ccb6);

  &:hover {
    box-shadow: 0 2px 12px rgba(39,21,102,.3);
  }

  @media (max-width: 600px){
    font-size: 13px;
    height: 40px;
    width: 160px;
  }
`;

export const ButtonIos = styled.button`
  color: #27AF9A;
  font-weight: 600;
  width: 220px;
  font-size: 16px;
  height: 54px;
  border-radius: 35px;
  margin-left: 20px;
  transition: all 0.45s;
  background: #fff;

  border: 3px solid #27AF9A;

  &:hover {
    box-shadow: 0 2px 12px rgba(39,21,102,.3);
  }

  @media (max-width: 600px){
    font-size: 13px;
    height: 40px;
    width: 160px;
  }

`;

export const SectionWhatIs = styled.section`
  margin-top: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;

  > a {
    pointer-events: none;


    img {
      z-index: -5;
      top: -50px;
      left: -130px;
      width: 540px;
      position: absolute;
    }
  }

  > div{
    height: 500px;
    max-width: 500px;
    h2 {
      font-size: 48px;
      font-weight: 600;
    }

    p {
      margin-top: 20px;
      color: #526173;
      font-size: 24px;
    }
  }

  @media (max-width: 600px){
    > a {
      display: none;
    }

    > div{
      height: 370px;
      h2 {
        font-size: 36px;
        font-weight: 600;
      }

      p {
        margin-top: 20px;
        color: #526173;
        font-size: 20px;
        line-height: 2rem;
      }
    }

  }

  @media (max-width: 1200px) and (min-width: 800.5px){
    > a {
      img {
        top: -50px;
        left: 0px;
        width: 440px;
        position: absolute;
      }
    }
    > div{
      height: 370px;
      max-width: 470px;
      padding-right: 50px;

      h2 {
        font-size: 42px;
        font-weight: 600;
      }

      p {
        margin-top: 20px;
        color: #526173;
        font-size: 21px;
        line-height: 2rem;
      }
    }
  }

`;

export const SectionWhy = styled.section`
  margin-top: 130px;
  justify-content: initial;

  h2 {
    font-size: 48px;
    font-weight: 600;
  }

  @media (max-width: 600px){
    margin-top: 20px;
    justify-content: initial;

    h2 {
      font-size: 36px;
      font-weight: 600;
    }
  }

  @media (max-width: 1200px) and (min-width: 800.5px){
    h2 {
      font-size: 42px;
    }
  }

`;

export const CardContainer = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 600px){
    margin-top: 20px;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: auto;
  width: 345px;

  > div:first-child{
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      pointer-events: none;

      img{
        z-index: -5;
        position: relative;
        width: 250px;
      }
      @media (max-width: 600px){
        display: none;
      }
    }
  }

  > div:last-child {
    padding: 25px;
    h3 {
      font-size: 28px;
      line-height: 39px;
      letter-spacing: -.2px;
      font-weight: 700;
    }

    p {
      margin-top: 23px;
      line-height: 30px;
      letter-spacing: -.1px;
      color: #526173;
    }

    margin-bottom: auto;
  }
`;

export const Footer = styled.footer`
  margin-top: 200px;

  > div:first-child {
    background-image: linear-gradient(-133deg,#27AF9A,#29ccb6);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    padding: 0 350px;
    position: relative;
    min-height: calc(100vh - 150px);

    h1 {
      font-size: 68px;
      line-height: 1.4;
      font-weight: 900;
      letter-spacing: -.8px;
      color: #fff;
    }

    p {
      margin-top: 20px;
      line-height: 32px;
      letter-spacing: -.2px;
      color: #fff;
      font-size: 19px;
    }

  }

  @media (max-width: 600px){
    margin-top: 100px;

    > div:first-child {
      padding: 0 20px;
      h1{
        font-size: 45px;
      }
      p {
        font-size: 16px;
        line-height: 1.4rem;
      }
    }
  }

  @media (max-width: 1200px) and (min-width: 800.5px){
    margin-top: 100px;

    > div:first-child {
      padding: 0 150px;
      h1{
        font-size: 56px;
      }
      p {
        font-size: 18px;
        line-height: 1.4rem;
      }
    }
  }

`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    background-color: #27303b;
    opacity: 0.95;

    > a {
      img {
        width: 50px;
      }
    }

  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background-color: #27303b;

    h4 {
      color: #f5f7f9;
      opacity: 0.8;
      font-size: 14px;
    }
  }

`;
