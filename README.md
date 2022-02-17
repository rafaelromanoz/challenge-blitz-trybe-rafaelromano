# Code Challenge Blitz Trybe

Lista de tarefas criada para o Blitz de Carreira da Trybe, aplicação fullstack onde pode-se adicionar, editar, deletar e ordernar tasks conforme desejado.

## 🚀 Começando

- `git clone https://github.com/rafaelromanoz/challenge-blitz-trybe-rafaelromano`

### 📋 Pré-requisitos

O projeto é totalmente Dockerizado, se você possuir docker e docker compose instalado, é necessário somente executar o comando abaixo e utilizar a aplicação.

```
docker-compose up
```
#### Rodando projeto com os containers 

Após os containers estarem prontos o projeto estará disponível na url

```
http://localhost:3000/
```

### Atenção!

Se não possuir o docker e docker compose é alterar a url de conexão do banco de dados, para utilizar o MongoDB localmente.

/backend/src/models/connection
```
alterar:
const mongodburl = 'mongodb://mongo:27017/';
para:
const mongodburl = 'mongodb://localhost:27017/';
```

### 🔧 Instalação

Para executar o projeto sem o Docker, é necessário seguir os passos abaixo:

#### Instalando dependencias do backend.
```
cd backend
npm install
```
#### Instalando dependencias do frontend.
```
cd frontend
npm install
```
#### Executando o servidor

```
cd backend
npm start
```

#### Executando cliente React

```
cd frontend
npm start
```

### ⚙️ Executando os testes


#### Testes do servidor

```
cd backend
npm test
```

#### Testes do frontend

```
cd frontend
npm test
```


## 📦 Desenvolvimento

No desenvolvimento da API (server) foi utilizada da arquitetura MSC, Models, Services, Controller, no service estão as regras de negócio, controller estão as requisições.

A aplicação foi criado com base na arquitetura MERN (MongoDB, Express, React, Node)

Para confecção da API foi utilizado do framework Express e Node.js.

No frontend foi utilizado do framework react na interação com o usuário, e para estilização foi utilizado a biblioteca CSS, Bootstrap React, no gerenciamento de estado foi utilizado o Redux Toolkit.

Para padronização e qualidade de código foi utilizado o ESLint e o editorconfig.

## 🛠️ Construído com

* [JavaScript](javascript.com) - Linguagem
* [ReduxToolkit](https://redux-toolkit.js.org/) - Gerenciamento de estado
* [Bootstrap](https://react-bootstrap.github.io/) - Biblioteca CSS
* [MongoDB](https://www.mongodb.com/) - Banco de Dados
* [Express](https://expressjs.com/pt-br/) - Criação API
* [Node.js](https://nodejs.org/en/) - Criação API
* [Docker](https://nodejs.org/en/) - Container MySQL
* [ESLint](https://eslint.org/) - Padronização e qualidade de código
* [Jest](https://jestjs.io/pt-BR/) - Framework de Testes
* [Joi](https://joi.dev/api/?v=17.6.0) - Validações das informações requests.
