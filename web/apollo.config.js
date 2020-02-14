const path = require('path');

module.exports = {
  client: {
    excludes: ['**/generated/*.tsx'],
    service: {
      name: 'GraphqlEgitim',
      localSchemaFile: path.resolve(__dirname, 'graphql.schema.json')
    }
  }
};
