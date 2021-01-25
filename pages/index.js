import styled from 'styled-components';
import db from '../db.json';
import { Widget } from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


/*const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
`;*/

const Input = styled.input`
  display: flex;
  width: 80%;
  padding: 7px;
  border-radius: 10px;
  border-style: none;
  background-color: #303138;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:focus{
    outline: none;
  }
`;

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
  return (
    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
        <Widget>
          <Widget.Header>
            Você conhece sobre League of Legends?
          </Widget.Header>
          <Widget.Content>
            <p>Inisra seu nick e encotre players para jogar</p>
            <Input placeholder="Digite seu Nick" color="#FFFFFF"/>
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
  )
}
