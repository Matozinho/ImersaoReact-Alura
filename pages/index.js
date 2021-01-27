// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import { Widget } from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
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

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>League of Legends</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste seus conhecimentos sobre a história dos personagens</p>
            <form onSubmit={(infosEvento) => {
              infosEvento.preventDefault();
              router.push(`quiz?name=${name}`);
              // router mandando pra pŕoxima pag
            }}
            >
              <Widget.Input
                onChange={(param) => setName(param.target.value)}
                placeholder="Insira seu nome para jogar"
                type="text"
              />
              <Widget.Button
                type="submit"
                disabled={name.length === 0}
              >
                Jogar
                {' '}
                {name}
              </Widget.Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes de Outras pessoas</h1>
            <p>1 - Quiz</p>
            <p>2 - Quiz</p>
            <p>3 - Quiz</p>
            <p>4 - Quiz</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Matozinho" />
    </QuizBackground>
  );
}
