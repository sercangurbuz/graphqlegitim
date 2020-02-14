import * as React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Customers from './Customers/Customers';
import Customer from './Customers/Customer';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:4003/graphql'
    }),
    cache: new InMemoryCache({
      typePolicies: {
        CustomerType: {
          keyFields: ['customerId']
        }
      }
    })
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route exact path="/customers">
          <Customers></Customers>
        </Route>
        <Route path="/customers/:id">
          <Customer></Customer>
        </Route>
        <Redirect to="/customers"></Redirect>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
