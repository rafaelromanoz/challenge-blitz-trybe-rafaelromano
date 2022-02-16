import Home from '../pages/Home';
import {
  render,
  screen,
  within,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../app/store';
import App from '../App';
import CardsTasks from '../components/CardsTasks';

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const renderCards = () => {
  render(
    <Provider store={store}>
      <CardsTasks />
    </Provider>
  )
}

test('Verifica se existe o título na tela', () => {
  renderApp();
  const title = screen.getByRole('heading', {
    level: 1
  })
  expect(title).toBeInTheDocument();
});

test('Verifica se existe o título na tela', () => {
  renderApp();
  const title = screen.getByRole('heading', {
    level: 1,
    name: 'Blitz Trybe Challenge'
  })
  expect(title).toBeInTheDocument();
});

test('Verifica se tem o input para adicionar tasks', () => {
  renderApp();
  const input = screen.getByText('Digite uma task');
  expect(input).toBeInTheDocument();
})

test('Verifica se tem o botão de adicionar tarefa', () => {
  renderApp();
  const button = screen.getByText('Salvar tarefa');
  expect(button).toBeInTheDocument();
});

test('Verifica se tem o input para adicionar tasks', () => {
  renderApp();
  const select = screen.getByText('Escolha um status');
  expect(select).toBeInTheDocument();
});

test('Verifica se ao clicar em salvar tarefa ela salva', async () => {
  renderApp();
  const input = screen.getByTestId('input-task');
  fireEvent.change(input, { target: { value: 'Testando tudo' } });
  const button = screen.getByText('Salvar tarefa');
  fireEvent.click(button);
});
