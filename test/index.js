process.env.NODE_ENV = 'test';
process.env.PORT = 6000;

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
var expect = chai.expect;


chai.use(chaiHttp);
//Our parent block
describe('Site', () => {

  describe('/GET /', () => {
      it('should return a 200 for CTA', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
      it('should return the correct HTML text', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                  expect(res.text).to.contain('<h1 class="white">JIMMY VAN TWEST</h1><h2 class="white">Art department | London</h2>')
              done();
            });
      });
      it('should return a button that goes nowhere', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
              expect(res.text).to.contain('<a href=""><div class="Button">ENTER</div></a><')
              done();
            });
      });
  });

});
