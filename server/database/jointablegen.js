const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const TOTAL = 10000000;
let rowCounter = 0;
let idCounter = 1;
let countdown = 20 + Math.ceil(Math.random() * 30);


function makeLine(id) {
  const obj = {};

  obj.id = id;
  obj.productId = idCounter;
  obj.pairId = Math.ceil(Math.random() * 10000000);

  return obj;
}

function done() {
  console.log(`Added ${rowCounter} rows!`);
  writer.end();
}

function write() {
  let ok = true;

  while (idCounter <= TOTAL && ok) {
    rowCounter += 1;
    countdown -= 1;

    if (idCounter === TOTAL && countdown === 0) {
      writer.write(makeLine(rowCounter), done);
    } else {
      ok = writer.write(makeLine(rowCounter));
    }

    if (countdown === 0) {
      idCounter += 1;
      countdown = 20 + Math.ceil(Math.random() * 30);
    }
  }

  if (idCounter < TOTAL) {
    writer.once('drain', write);
  }
}

writer.pipe(fs.createWriteStream('jointable.csv'));

write();
