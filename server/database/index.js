const cassandra = require('cassandra-driver');

const HOSTS = ['127.0.0.1'];

const client = new cassandra.Client({
  contactPoints: HOSTS,
  localDataCenter: 'datacenter1',
  keyspace: 'ucayali_recommended',
});

client.connect(() => {
  console.log('Connected to Cassandra!');
});

module.exports.client = client;
