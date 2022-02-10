const express = require('express');
const tasksRouter = require('./routes/tasksRouter');

const app = express();

app.use('/tasks', tasksRouter);

const port = 3001;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
