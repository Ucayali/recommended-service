const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();

const TOTAL = 10000000;
let idCounter = 0;

function imageFile() {
  return Math.ceil(Math.random() * 988).toString().padStart(4, '0');
}

function makeLine(id) {
  const obj = {};

  obj.productId = id;
  obj.name = faker.commerce.productName();
  obj.price = faker.commerce.price(5.00, 75.00, 2);
  obj.prime = Math.floor(Math.random() * 2);
  obj.imageUrl = `http://ds6fr0ymcho38.cloudfront.net/${imageFile()}.jpg`;
  obj.numReviews = Math.ceil(Math.random() * 250);
  obj.avgRating = (Math.floor((Math.random() * 6) + 5)) / 2;

  return obj;
}

function done() {
  console.log(`Added ${idCounter} rows!`);
  writer.end();
}

function write() {
  let ok = true;

  while (idCounter < TOTAL && ok) {
    idCounter += 1;

    if (idCounter === TOTAL) {
      writer.write(makeLine(idCounter), done);
    } else {
      ok = writer.write(makeLine(idCounter));
    }
  }

  if (idCounter < TOTAL) {
    writer.once('drain', write);
  }
}

writer.pipe(fs.createWriteStream('data.csv'));

write();
