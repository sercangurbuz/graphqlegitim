import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useGetCustomersQuery } from '../generated/types';

interface ICustomersProps {}

const CUSTOMERS = gql`
  query getCustomers {
    getCustomers {
      customerId
      customerName
    }
  }
`;

const Customers: React.FunctionComponent<ICustomersProps> = props => {
  const { data, loading } = useGetCustomersQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data &&
        data.getCustomers.map((item: any) => (
          <li>
            <Link to={`/customers/${item.customerId}`}>
              {item.customerName}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Customers;
