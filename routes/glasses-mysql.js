const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

router.use((req, res, next) => {
  req.dbConfig = req.app.get('dbConfig');
  next();
});

router.get('/', async (req, res) => {
  try {
    const db = await mysql.createConnection(req.dbConfig);
    const [rows] = await db.execute('SELECT * FROM glasses_updated');
    await db.end();
    res.json(rows);
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const db = await mysql.createConnection(req.dbConfig);
    const [rows] = await db.execute('SELECT * FROM glasses_updated WHERE id = ?', [req.params.id]);
    await db.end();
    if (rows.length === 0) return res.status(404).send('Окуляри не знайдено');
    res.json(rows[0]);
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, type, price, quantity } = req.body;
    const db = await mysql.createConnection(req.dbConfig);
    const [result] = await db.execute(
      'INSERT INTO glasses_updated (name, type, price, quantity) VALUES (?, ?, ?, ?)',
      [name, type, price, quantity]
    );
    await db.end();
    res.status(201).json({ id: result.insertId, name, type, price, quantity });
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, type, price, quantity } = req.body;
    const db = await mysql.createConnection(req.dbConfig);
    const [result] = await db.execute(
      'UPDATE glasses_updated SET name = ?, type = ?, price = ?, quantity = ? WHERE id = ?',
      [name, type, price, quantity, req.params.id]
    );
    await db.end();
    if (result.affectedRows === 0) return res.status(404).send('Окуляри не знайдено');
    res.json({ id: parseInt(req.params.id), name, type, price, quantity });
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const db = await mysql.createConnection(req.dbConfig);
    const [result] = await db.execute('DELETE FROM glasses_updated WHERE id = ?', [req.params.id]);
    await db.end();
    if (result.affectedRows === 0) return res.status(404).send('Окуляри не знайдено');
    res.json({ message: 'Окуляри видалено' });
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

router.post('/buy/:id', async (req, res) => {
  try {
    const db = await mysql.createConnection(req.dbConfig);
    const [rows] = await db.execute('SELECT quantity FROM glasses_updated WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      await db.end();
      return res.status(404).send('Окуляри не знайдено');
    }
    const currentQuantity = rows[0].quantity;
    if (currentQuantity <= 0) {
      await db.end();
      return res.status(400).send('Окуляри закінчилися');
    }
    const [result] = await db.execute(
      'UPDATE glasses_updated SET quantity = quantity - 1 WHERE id = ?',
      [req.params.id]
    );
    await db.end();
    if (result.affectedRows === 0) return res.status(404).send('Окуляри не знайдено');
    res.json({ message: 'Кількість оновлено', newQuantity: currentQuantity - 1 });
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

module.exports = router;