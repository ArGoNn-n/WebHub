const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const request = require('supertest');
const app = require('../server');

chai.use(chaiHttp);

describe('Glasses API (MySQL)', () => {
  it('should get all glasses', async () => {
    const res = await request(app).get('/api/glasses-mysql');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should create a new glass', async () => {
    const newGlass = { name: 'Test Glasses', type: 'Test', price: 100 };
    const res = await request(app)
      .post('/api/glasses-mysql')
      .send(newGlass);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('name', 'Test Glasses');
  });
});

describe('Glasses API (JSON)', () => {
  it('should get all glasses', async () => {
    const res = await request(app).get('/api/glasses-json');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should create a new glass', async () => {
    const newGlass = { name: 'Test Glasses', type: 'Test', price: 100 };
    const res = await request(app)
      .post('/api/glasses-json')
      .send(newGlass);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('name', 'Test Glasses');
  });
});