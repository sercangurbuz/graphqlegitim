import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as customerRepo from './db';

const typeDefs = ` 
type CustomerType {
    customerId:Int!
    customerName:String
}

input CustomerInput {
    customerId:Int
    customerName:String
}

type Query {
    "Get customers"
    getCustomers:[CustomerType!]!
    "Get cusmoer by Id"
    getCustomerById(custId:Int!):CustomerType!
}

type Mutation {
    saveCustomer(payload:CustomerInput):CustomerType
}`;

const resolvers = {
  Query: {
    getCustomers(_: any, args: any, { customerRepo }: any) {
      return customerRepo.getCustomers();
    },
    getCustomerById(_: any, { custId }: any, { customerRepo }: any) {
      return customerRepo.getCustomerById(custId);
    }
  },
  Mutation: {
    saveCustomer(_: any, { payload }: any, { customerRepo }: any) {
      return customerRepo.saveCustomer(payload);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { customerRepo }
});

const app = express();
server.applyMiddleware({ app });

app.listen('4003', () => {
  console.log('Apollo server listeining...');
});
