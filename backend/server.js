const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const tasksRouter = require('./routes/tasksRouter');

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use('/tasks', tasksRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server escutando na porta ${port}!`));
