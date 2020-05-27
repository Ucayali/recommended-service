const cassandra = require('cassandra-driver');

const HOSTS = ['127.0.0.1'];

const client = new cassandra.Client({
  contactPoints: HOSTS,
  localDataCenter: 'datacenter1',
  keyspace: 'ucayali_recommended',
});

const mapper = new cassandra.mapping.Mapper(client, {

});

client.connect(() => {
  console.log('Connected to Cassandra!');
});

module.exports.client = client;
module.exports.mapper = mapper;
