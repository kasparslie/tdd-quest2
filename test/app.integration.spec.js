// test/app.integration.spec.js
const { text } = require('body-parser');
const request = require('supertest');
const app = require('../app');
const connection = require('../connection');


describe('Test routes', () => {
    it('GET / sends "Hello World" as json', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(response => {
          const expected = { message: 'Hello World!'};
          expect(response.body).toEqual(expected);
          done();
        });
    });
  })

  describe('Test routes', () => {
  it('POST /bookmarks - error (fields missing) ', (done) => {
    request(app)
    .post('/bookmarks')
    .send({})
    .expect(200)
    .expect('Content-Type', /json/)
    .then(response => {
        const expected = { id: expect.any(Number), url: expect(Text), title: expect(Text) };
      done();
    });
});
});

describe('GET /bookmarks/:id', () => {
    const testBookmark = { url: 'https://nodejs.org/', title: 'Node.js' };
    beforeEach((done) => connection.query(
      'TRUNCATE bookmark', () => connection.query(
        'INSERT INTO bookmark SET ?', testBookmark, done
      )
    ));
    it('GET /bookmarks/:id error', (done) => {
        request(app)
        .get('/bookmarks/:id')
        .expect(404)
        .send({error : 'Bookmark not found'})
        .then(response => {
          const expected = { error : "Bookmark not found"};
          expect(response.body).toEqual(expected);
          done();
        })
      })
  
  
      it('GET /bookmarks/:id ok', (done) => {
        request(app)
        .get('/bookmarks/1')
        .expect(200)
        .then(response => {
          const expected = { id: 1, url: 'https://nodejs.org/', title: 'Node.js' };
          done()
        })
      })
    })