const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const db = require('../src/models/index');

dotenv.config();
const app = express();
db.sequelize.sync()
  .then(() => {
    console.log('DB 연결 성공');
  })
  .catch(console.error);


app.use(morgan('dev'));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello express');
});


app.use((err, req, res, next) => {
})
app.use('/component', require('./routes/component'))
app.use('/component_tags', require('./routes/componentTags'))
app.use('/template', require('./routes/template'))
app.use('/template_tags', require('./routes/templateTags'))

app.listen(3065, () => {
  console.log("서버 실행중");
});
