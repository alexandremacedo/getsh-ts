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
`;

export const Content = styled.main`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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

    a {
      button {
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        margin-top: 40px;
        height: 54px;
        padding: 0 35px;
        border-radius: 30px;
        transition: all 0.45s;
        background-image: linear-gradient(-133deg,#24b39d,#29ccb6);

        &:hover {
          box-shadow: 0 2px 12px rgba(39,21,102,.3);
        }
      }
    }

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

`;

export const SectionWhy = styled.section`
  margin-top: 130px;

  h2 {
    font-size: 48px;
    font-weight: 600;
  }
`;

export const CardContainer = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  /* box-shadow: 0 0 6px 0 rgba(30,45,62,.1); */
  /* transition: box-shadow .2s; */
  margin: 0 15px;

  /*
  &:hover {
    box-shadow: 0 0 17px 0 rgba(30,45,62,.09);
  } */

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
  }
`;

export const Footer = styled.footer`
  margin-top: 200px;

  > div:first-child {
    background-image: linear-gradient(-133deg,#24b39d,#29ccb6);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
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

