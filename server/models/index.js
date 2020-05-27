const { client, mapper } = require('../database');

module.exports = {
  getRelated(id, callback) {
    const query = 'SELECT * FROM ucayali_recommended.recommendations WHERE productid = ?';
    client.execute(query, [id], { prepare: true })
      .then((result) => {
        const cArray = result.rows;
        const jsArray = [];

        cArray.forEach((cRow) => {
          const jsRow = {
            id: cRow.get('productid'),
            productId: cRow.get('pairid'),
            name: cRow.get('name'),
            price: cRow.get('price'),
            prime: cRow.get('prime'),
            imageUrl: cRow.get('imageurl'),
            numReviews: cRow.get('numreviews'),
            avgRating: cRow.get('avgrating'),
          };
          jsArray.push(jsRow);
        });

        return jsArray;
      })
      .then((result) => {
        callback(null, result);
      })
      .catch((err) => {
        console.log(err);
        callback(err, null);
      });
  },
  addNew(obj) {
    console.log('Adding:\n', obj);
  },
  patchRelated(from, to) {
    console.log(`Adding a recommendation to ${from} for ${to}.`);
  },
  deleteRelated(from, to) {
    console.log(`Deleting a recommendation from ${from} for ${to}.`);
  },
};
