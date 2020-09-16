import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  Container,
  Header,
  HeaderContent,
  SectionOne,
  ButtonAndroid,
  ButtonIos,
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
            <div>
              <a href="">
                <ButtonAndroid type="button">Download Android</ButtonAndroid>
              </a>
              <a href="">
                <ButtonIos type="button">Download IOS</ButtonIos>
              </a>
            </div>

          </div>
        </SectionOne>

        <SectionWhatIs>
          <a href='https://www.freepik.com/vectors/business'>
            <img src={socialMedia} alt="Social Media Getsh" />
          </a>

          <div>
            <h2>O que é o Getsh?</h2>
            <p>Getsh é um aplicativo onde os usuários compartilham lugares com lixo descartado indevidamente, as pessoas se reúnem por um objetivo comum, e as mudanças são duradouras e se tornam realidade.</p>
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
                <h3>Imagens com geolocalização</h3>
                <p>Cada captura, permite a rastreabilidade do que antes era irrastreável. Além disso começam a surgir padrões de descarte, em centros urbanos e praias, o que permite definir processos mais eficazes para solucionar este problema.</p>
              </div>
            </Card>

            <Card>
              <div>
                <a href="https://www.freepik.com/vectors/business">
                  <img src={voluntiers} alt="voluntiers" />
                </a>
              </div>
              <div>
                <h3>Sustentabilidade e Conciência</h3>
                <p>Cada um de nós temos influencia na situação desse problema enorme, complexo e global. Encontrar resíduos em lugares inadequados é comum, porém podemos encontrar soluções rotineiras para mudar isso.</p>
              </div>
            </Card>


            <Card>
              <div>
                <a href="https://www.freepik.com/vectors/business">
                  <img src={analytics} alt="analytics" />
                </a>
              </div>
              <div>
                <h3>A importância dos dados</h3>
                <p>Cada registro feito no app, impacta significativamente no quadro social urbano tendo influência em pesquisadores, orgãos de limpeza pública e por consequência no meio-ambiente.</p>
              </div>
            </Card>
          </CardContainer>
        </SectionWhy>
      </Content>

      <Footer>
        <div>
          <h1>Ajude o mundo</h1>
          <p>O maior aliado do mundo pode estar em suas mãos, faça parte de algo maior com apenas um clique e torne o mundo mais limpo.</p>
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
