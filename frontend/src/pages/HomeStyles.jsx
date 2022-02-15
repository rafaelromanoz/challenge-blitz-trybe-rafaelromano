import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Header = styled.p`
  font-size: 20px;
`;

const Input = styled.input`
  width: 400px;
`;

const Select = styled.select`
  width: auto;
  margin-left: 2px;
`;

const Options = styled.option`
  background-color: aliceblue;
`;

const Button = styled.button`
  background-color: blue;
  border-radius: 10%;
`;

const InputsContainer = styled.div`
  display: flex;
  margin: 3% auto;
`;

export {
  Container,
  Header,
  Input,
  Select,
  Options,
  Button,
  InputsContainer,
};
