import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  Container,
  Header,
  HeaderContent,
  SectionOne,
  Content,
  SectionWhatIs,
  SectionWhy,
  CardContainer,
  Card,
  Footer,
  FooterContact,
} from './styles';

import socialMedia from '../../assets/social-media.jpg'
import voluntiers from '../../assets/voluntiers.jpg'
import foldersImage from '../../assets/folders-image.jpg'
import analytics from '../../assets/analytics.jpg'
import logo from '../../assets/logo.svg'
import logoOpacity from '../../assets/logo-opacity-30-60.svg'

const Main: React.FC = () => {
  return (
    <Container >
      <Header>
        <HeaderContent>
          <a href="/">
            <img src={logo} alt="Getsh" />
          </a>
        </HeaderContent>
      </Header>

      <Content>
        <SectionOne>
          <div>
            <h1>AJUDE O MUNDO<br />COM SUAS FOTOS</h1>
            <a href="">
              <button type="button">Download android</button>
            </a>
          </div>
        </SectionOne>

        <SectionWhatIs>
          <a href='https://www.freepik.com/vectors/business'>
            <img src={socialMedia} alt="Social Media Getsh" />
          </a>

          <div>
            <h2>O que é o Getsh?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>
        </SectionWhatIs>

        <SectionWhy>

          <h2>Porquê utilizar o Getsh?</h2>

          <CardContainer>
            <Card>
              <div>
                <a href="https://www.freepik.com/vectors/business">
                  <img src={foldersImage} alt="Folders" />
                </a>
              </div>
              <div>
                <h3>Lorem Ipsum</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </Card>

            <Card>
              <div>

                <a href="https://www.freepik.com/vectors/business">
                  <img src={voluntiers} alt="voluntiers" />
                </a>
              </div>
              <div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </Card>


            <Card>
              <div>
                <a href="https://www.freepik.com/vectors/business">
                  <img src={analytics} alt="analytics" />
                </a>
              </div>
              <div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </Card>
          </CardContainer>
        </SectionWhy>
      </Content>

      <Footer>
        <div>
          <h1>Ajude o mundo</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod<br />tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <FooterContact>
          <div>
            <a href="">
              <img src={logoOpacity} alt="Getsh" />
            </a>
          </div>
          <div>
            <h4>Viva como se fosse seu último dia</h4>
          </div>
        </FooterContact>
      </Footer>
    </Container >
  );
};

export default Main;
