interface Customer {
  customerId: number;
  customerName: string;
}

const data: Customer[] = [
  {
    customerId: 1,
    customerName: 'Sercan'
  },
  {
    customerId: 2,
    customerName: 'Serkan'
  },
  {
    customerId: 3,
    customerName: 'Egemen'
  }
];

const getCustomers = () => {
  return data;
};

const getCustomerById = (custId: number) => {
  return data.find(({ customerId }) => customerId === custId);
};

const saveCustomer = (payload: Customer) => {
  const item = data.find(({ customerId }) => customerId === payload.customerId);

  if (item) {
    return Object.assign(item, payload);
  } else {
    const maxId = Math.max(...data.map(({ customerId }) => customerId));
    const newItem = {
      customerId: maxId + 1,
      ...payload
    };

    data.push(newItem);

    return newItem;
  }
};

export { getCustomerById, getCustomers, saveCustomer };
