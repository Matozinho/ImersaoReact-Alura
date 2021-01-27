import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import { Widget } from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function QuizPage() {
  // eslint-disable-next-line no-restricted-globals
  const urlParams = new URLSearchParams(location.search);
  const name = urlParams.get('name');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{name}, você está na pergunta 1 de 55</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Qual o nome do personagem do background</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
