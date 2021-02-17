const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');

app.use(morgan('dev'));
app.use(express.json());
app.use(compression());
app.use(express.static(PUBLIC_DIR));
app.use((req, res, next) => {
  console.log(`${req.method} request coming in for ${req.path}`);
  next();
});

app.get('/', (req, res) =>{
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
