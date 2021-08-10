const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const porta = process.env.PORT || 3340;
const app = express();

const index = require('./routes/index');
const auth = require('./routes/auth');

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);
app.use('/auth', auth);

app.listen(porta, ()=>{
  console.log('api rodando na porta' + porta)
});