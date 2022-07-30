const express = require('express');
const mainRouter = require('./Routes/mainRouter');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/', mainRouter);

const startApp = async () => {
  app.listen(PORT, () => {
    console.log(`Listening server on port ${PORT}`);
  });
};

startApp();
