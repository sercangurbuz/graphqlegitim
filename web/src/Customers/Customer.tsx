import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { useGetCustomerByIdQuery } from '../generated/types';

interface ICustomerProps {}

const CUSTOMER_FRAG = gql`
  fragment CustomerFields on CustomerType {
    customerId
    customerName
  }
`;

const CUSTOMER = gql`
  query getCustomerById($id: Int!) {
    getCustomerById(custId: $id) {
      ...CustomerFields
    }
  }
  ${CUSTOMER_FRAG}
`;

const Customer: React.FunctionComponent<ICustomerProps> = props => {
  const { id } = useParams();
  const { data, loading } = useGetCustomerByIdQuery({
    variables: { id: Number(id!) }
  });

  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      {data && (
        <ul>
          <li>Customer ID : {data.getCustomerById.customerId}</li>
          <li>Customer Name : {data.getCustomerById.customerName}</li>
        </ul>
      )}
    </div>
  );
};

export default Customer;
