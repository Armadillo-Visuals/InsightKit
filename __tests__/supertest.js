const request = require('supertest');
const server = 'http://localhost:3000';

// TODO: Create a test database where all these tests are running.
// Problem: These tests are adding actual values to our database and post requests need to have updated values
// to not be repeating usernames

describe('Route integration', () => {
  // test for undefined endpoint
  describe('/error', () => {
    describe('GET', () => {
      it('responds with 404 status and json/application content type', () => {
        return request(server)
          .get('/error')
          .expect('Content-type', /application\/json/)
          .expect(404);
      });
    });
  });

  // test for get request to disasters over time
  describe('/data', () => {
    describe('GET', () => {
      it('responds with a 200 status and a json/application content type', () => {
        return request(server)
          .get('/data/disasters-over-time/:state/:type')
          .expect('Content-type', /application\/json/)
          .expect(200);
      });
    });
  });

  // test for get request to carbon over time should go here

  // test for get request to populate a pie chart with percentage of each disaster type per state goes here

  // test for post request to /users/signup endpoint
  describe('/users', () => {
    describe('POST', () => {
      it('responds with a 201 status and a json/application content type', () => {
        return request(server)
          .post('/users/signup')
          .send({
            firstName: 'TestFirstName5',
            lastName: 'TestLastName5',
            username: 'TestUsername5',
            password: 'TestPassword5',
          })
          .expect('Content-type', /application\/json/)
          .expect(201);
      });
      // test for post request to /users/login endpoint
      it('responds with a 201 status and a json/application content type', () => {
        return request(server)
          .post('/users/login')
          .send({
            username: 'TestUsername',
            password: 'TestPassword',
          })
          .expect('Content-type', /application\/json/)
          .expect(201);
      });
    });
    // test for patch request to /users/widget endpoint
    // TODO: This test is currently failing and saying that graphType is a null value
    describe('PATCH', () => {
      it('responds with a 200 status and a json/application content type', () => {
        return request(server)
          .patch('/users/widget')
          .send({ userID: 23, graphType: 'line', dataType: 'carbon', parameter1: 'CA' })
          .expect('Content-type', /application\/json/)
          .expect(200);
      });
    });
  });
});
