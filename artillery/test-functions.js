
const faker = require('faker');

function imageFile() {
  return Math.ceil(Math.random() * 988).toString().padStart(4, '0');
}

function generateLowId(userContext, events, done) {
  const id = Math.ceil(Math.random() * 9000000);

  userContext.vars.id = id;

  return done();
}

function generateHighId(userContext, events, done) {
  const id = 9000000 + Math.ceil(Math.random() * 1000000);

  userContext.vars.id = id;

  return done();
}

function generateRecord(userContext, events, done) {

  const id = 10000000 + Math.ceil(Math.random() * 1000000);
  const productId = 10000000 + Math.ceil(Math.random() * 1000000);
  const name = faker.commerce.productName();
  const price = faker.commerce.price(5.00, 75.00, 2);
  const prime = Math.floor(Math.random() * 2);
  const imageUrl = `http://ds6fr0ymcho38.cloudfront.net/${imageFile()}.jpg`;
  const numReviews = Math.ceil(Math.random() * 250);
  const avgRating = (Math.floor((Math.random() * 6) + 5)) / 2;

  userContext.vars.id = id;
  userContext.vars.productId = productId;
  userContext.vars.name = name;
  userContext.vars.price = price;
  userContext.vars.prime = prime;
  userContext.vars.imageUrl = imageUrl;
  userContext.vars.numReviews = numReviews;
  userContext.vars.avgRating = avgRating;

  return done();
}

module.exports = {
  generateLowId,
  generateHighId,
  generateRecord,
};
