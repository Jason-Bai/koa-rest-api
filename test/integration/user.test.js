'use strict';

const supertest = require('supertest');
const app = require('../../app/app');
const models = require('../../app/models');
const user = require('./data/user.json');

describe('User', () => {
  const request = supertest(app.listen());

  describe('GET /users', () => {
    beforeEach(() => {
      models.user.create(user);
    });

    afterEach(() => {
      models.user.destroy({ where: {} });
    });

    it('<200> should a user', async () => {
      const res = await request
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200);

      const { status, data, message } = res.body;
      expect(status).toBe('success');
      expect(message).toBe('OK');
      expect(data.length).toEqual(1);
    });
  });
});
