import express from 'express';
import expressGraphql from 'express-graphql';
//import { schema } from './schema';
import { schema } from './sdl';
import * as db from './db';

const app = express();

app.use(
  '/graphql',
  expressGraphql({
    schema,
    graphiql: true,
    context: {
      customerRepo: db
    }
  })
);

app.listen(4003, () => {
  console.log('Graphql server listeing...');
});
