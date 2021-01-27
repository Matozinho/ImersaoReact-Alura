import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.mainBg};
border-radius: 4px;
overflow: hidden; 

h1, h2, h3{
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}

p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
}
`;

Widget.Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Input = styled.input`
  display: flex;
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  border-style: none;
  background-color: #303138;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:focus{
    outline: none;
  }
  color: white;
`;

Widget.Button = styled.button`
  display: flex;
  width: 100%;
  padding: 7px;
  margin-top: 20px;
  border-radius: 10px;
  border-style: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  transition: 0.5s;

  cursor: pointer;

  font-size: 16px;
  justify-content: center;
  color: white;

  &:disabled{
    background-color: #303138;
    border: 2px solid #303138;
    cursor: auto;
  }
`;
