const express = require('express');
const router = express.Router();
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');

// Налаштування lowdb
const file = path.join(__dirname, '../db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter, { glasses: [] }); // Початкові дані

// Ініціалізація бази
async function initDb() {
  await db.read();
  if (!db.data.glasses || db.data.glasses.length === 0) {
    db.data.glasses = [
      { id: "1", name: "Ray-Ban Classic", type: "Sunglasses", price: 150 },
      { id: "2", name: "Oakley Sport", type: "Sports", price: 200 }
    ];
    await db.write();
  }
}

initDb().catch(err => console.error('Помилка ініціалізації lowdb:', err));

router.get('/', async (req, res) => {
  try {
    await db.read();
    res.json(db.data.glasses);
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

router.get('/:id', async (req, res) => {
  try {
    await db.read();
    const glass = db.data.glasses.find(g => g.id === req.params.id);
    if (!glass) return res.status(404).send('Окуляри не знайдено');
    res.json(glass);
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

router.post('/', async (req, res) => {
  try {
    await db.read();
    const glass = { id: Date.now().toString(), ...req.body };
    db.data.glasses.push(glass);
    await db.write();
    res.status(201).json(glass);
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

router.put('/:id', async (req, res) => {
  try {
    await db.read();
    const index = db.data.glasses.findIndex(g => g.id === req.params.id);
    if (index === -1) return res.status(404).send('Окуляри не знайдено');
    db.data.glasses[index] = { id: req.params.id, ...req.body };
    await db.write();
    res.json(db.data.glasses[index]);
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.read();
    const index = db.data.glasses.findIndex(g => g.id === req.params.id);
    if (index === -1) return res.status(404).send('Окуляри не знайдено');
    const glass = db.data.glasses.splice(index, 1)[0];
    await db.write();
    res.json(glass);
  } catch (err) {
    console.error('Помилка:', err);
    res.status(500).send('Помилка сервера');
  }
});

module.exports = router;