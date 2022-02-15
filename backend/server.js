const express = require('express');
const cors = require('cors');
const errorHandler = require('./src/middlewares/errorHandler');
const tasksRouter = require('./src/routes/tasksRouter');

const port = 8080;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/tasks', tasksRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server escutando na porta ${port}!`);
});
