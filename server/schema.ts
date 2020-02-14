import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

const CustomerType = new GraphQLObjectType({
  name: 'CustomerType',
  description: 'Customer Type',
  fields: {
    customerId: { type: new GraphQLNonNull(GraphQLInt) },
    customerName: {
      type: GraphQLString,
      resolve({ customerName }) {
        return customerName.toUpperCase();
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'world';
      }
    },
    lazyHello: {
      type: GraphQLString,
      resolve() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('world lazt');
          }, 1500);
        });
      }
    },
    getCustomers: {
      type: new GraphQLList(CustomerType),
      resolve(_, args, { customerRepo }) {
        return customerRepo.getCustomers();
      }
    },

    getCustomerById: {
      type: CustomerType,
      args: {
        custId: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(_, { custId }, { customerRepo }) {
        return customerRepo.getCustomerById(custId);
      }
    }
  }
});

const CustomerInputType = new GraphQLInputObjectType({
  name: 'CustomerInputType',
  fields: {
    customerId: { type: GraphQLInt },
    customerName: { type: GraphQLString }
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    saveCustomer: {
      type: CustomerType,
      args: {
        payload: {
          type: CustomerInputType
        }
      },
      resolve(_, { payload }, { customerRepo }) {
        return customerRepo.saveCustomer(payload);
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
