import { makeExecutableSchema } from 'graphql-tools';

const sdl = `
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
        getCustomers:[CustomerType]
        "Get cusmoer by Id"
        getCustomerById(custId:Int!):CustomerType
    }

    type Mutation {
        saveCustomer(payload:CustomerInput):CustomerType
    }
`;

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

export const schema = makeExecutableSchema({
  typeDefs: sdl,
  resolvers
});
