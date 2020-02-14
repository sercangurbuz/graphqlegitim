import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CustomerInput = {
  customerId?: Maybe<Scalars['Int']>,
  customerName?: Maybe<Scalars['String']>,
};

export type CustomerType = {
   __typename?: 'CustomerType',
  customerId: Scalars['Int'],
  customerName?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  saveCustomer?: Maybe<CustomerType>,
};


export type MutationSaveCustomerArgs = {
  payload?: Maybe<CustomerInput>
};

export type Query = {
   __typename?: 'Query',
  getCustomers: Array<CustomerType>,
  getCustomerById: CustomerType,
};


export type QueryGetCustomerByIdArgs = {
  custId: Scalars['Int']
};


export type CustomerFieldsFragment = (
  { __typename?: 'CustomerType' }
  & Pick<CustomerType, 'customerId' | 'customerName'>
);

export type GetCustomerByIdQueryVariables = {
  id: Scalars['Int']
};


export type GetCustomerByIdQuery = (
  { __typename?: 'Query' }
  & { getCustomerById: (
    { __typename?: 'CustomerType' }
    & CustomerFieldsFragment
  ) }
);

export type GetCustomersQueryVariables = {};


export type GetCustomersQuery = (
  { __typename?: 'Query' }
  & { getCustomers: Array<(
    { __typename?: 'CustomerType' }
    & Pick<CustomerType, 'customerId' | 'customerName'>
  )> }
);

export const CustomerFieldsFragmentDoc = gql`
    fragment CustomerFields on CustomerType {
  customerId
  customerName
}
    `;
export const GetCustomerByIdDocument = gql`
    query getCustomerById($id: Int!) {
  getCustomerById(custId: $id) {
    ...CustomerFields
  }
}
    ${CustomerFieldsFragmentDoc}`;

/**
 * __useGetCustomerByIdQuery__
 *
 * To run a query within a React component, call `useGetCustomerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCustomerByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(GetCustomerByIdDocument, baseOptions);
      }
export function useGetCustomerByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(GetCustomerByIdDocument, baseOptions);
        }
export type GetCustomerByIdQueryHookResult = ReturnType<typeof useGetCustomerByIdQuery>;
export type GetCustomerByIdLazyQueryHookResult = ReturnType<typeof useGetCustomerByIdLazyQuery>;
export type GetCustomerByIdQueryResult = ApolloReactCommon.QueryResult<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>;
export const GetCustomersDocument = gql`
    query getCustomers {
  getCustomers {
    customerId
    customerName
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, baseOptions);
      }
export function useGetCustomersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, baseOptions);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = ApolloReactCommon.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;