const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const glassesMysqlRouter = require('./routes/glasses-mysql');
const glassesJsonRouter = require('./routes/glasses-json');
const app = express();
const port = 3000;

// Налаштування MySQL
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'glasses_db'
};

app.use(cors());
app.use(express.json());

// Передача dbConfig у маршрути
app.set('dbConfig', dbConfig);

app.use('/api/glasses-mysql', glassesMysqlRouter);
app.use('/api/glasses-json', glassesJsonRouter);

app.get('/', (req, res) => {
  res.send('Сервер працює!');
});

app.listen(port, () => {
  console.log(`Сервер на http://localhost:${port}`);
});