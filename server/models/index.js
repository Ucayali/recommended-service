const db = require('../database');

module.exports = {
  products: {
    getRelated(productId, callback) {
      const sql = 'SELECT DISTINCT p.* FROM products AS p LEFT OUTER JOIN productCategories AS pcj ON pcj.id_products = p.id WHERE pcj.id_categories IN (SELECT pcj.id_categories FROM productCategories AS pcj INNER JOIN products AS p ON p.id = pcj.id_products WHERE p.productId = ?) AND p.productId != ? LIMIT 50';
      db.query(sql, [productId, productId], (err, results) => {
        callback(err, results);
      });
    },
    addNew(params, callback = () => {}) {
      const sql = 'INSERT INTO products (productId, name, price, prime, imageUrl, numReviews, avgRating) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.query(sql, params, (err, results) => {
        callback(err, results);
      });
    },
    patchRelated(productId, relatedId, callback = () => {}) {
      const sql = 'INSERT INTO productCategories (id_products, id_categories) VALUES (?, (SELECT id FROM categories WHERE id_products=? LIMIT 1))';
      db.query(sql, [relatedId, productId], (err, results) => {
        callback(err, results);
      });
    },
    deleteRelated(productId, relatedId, callback = () => {}) {
      const sql = '';
      // this seems awkward in the legacy schema, but will be straightforward in the new schema.
      db.query(sql, [productId, relatedId], (err, results) => {
        callback(err, results);
      });
    },
  },

  categories: {
    getAll(callback) {
      const sql = 'SELECT id FROM categories ORDER BY id ASC';
      db.query(sql, (err, results) => {
        callback(err, results);
      });
    },
    addNew(category, callback = () => {}) {
      const sql = 'INSERT INTO categories (name) VALUES (?)';

      db.query(sql, category, (err, results) => {
        callback(err, results);
      });
    },
  },

  productCategories: {
    addNew(params, callback = () => {}) {
      const sql = 'INSERT INTO productCategories (id_products, id_categories) VALUES (?, ?)';
      db.query(sql, params, (err, results) => {
        callback(err, results);
      });
    },
  },
};
