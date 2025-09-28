import React from 'react';
import styled from 'styled-components';

const OrdersContainer = styled.div`
  padding: 0;
`;

const Title = styled.h1`
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const OrdersTable = styled.div`
  background: var(--surface-color);
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  font-weight: 600;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--background-color);
  }
`;

const OrderStatus = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => 
    props.status === 'completed' ? 'var(--success-color)' : 
    props.status === 'pending' ? 'var(--warning-color)' : 
    props.status === 'preparing' ? 'var(--primary-color)' :
    'var(--error-color)'};
  color: white;
  text-align: center;
`;

const mockOrders = [
  {
    id: '#001',
    customer: 'John Doe',
    items: 'Latte x2, Espresso x1',
    total: '$13.25',
    status: 'completed'
  },
  {
    id: '#002',
    customer: 'Jane Smith',
    items: 'Cappuccino x1, Mocha x1',
    total: '$9.25',
    status: 'preparing'
  },
  {
    id: '#003',
    customer: 'Bob Johnson',
    items: 'Americano x3',
    total: '$11.25',
    status: 'pending'
  },
  {
    id: '#004',
    customer: 'Alice Brown',
    items: 'Frappuccino x1, Latte x1',
    total: '$10.00',
    status: 'completed'
  },
  {
    id: '#005',
    customer: 'Charlie Wilson',
    items: 'Espresso x2, Cappuccino x1',
    total: '$11.25',
    status: 'cancelled'
  }
];

export const Orders: React.FC = () => {
  return (
    <OrdersContainer>
      <Title>Orders</Title>
      
      <OrdersTable>
        <TableHeader>
          <div>Order ID</div>
          <div>Customer</div>
          <div>Items</div>
          <div>Total</div>
          <div>Status</div>
        </TableHeader>
        
        {mockOrders.map((order) => (
          <TableRow key={order.id}>
            <div>{order.id}</div>
            <div>{order.customer}</div>
            <div>{order.items}</div>
            <div>{order.total}</div>
            <div>
              <OrderStatus status={order.status}>
                {order.status}
              </OrderStatus>
            </div>
          </TableRow>
        ))}
      </OrdersTable>
    </OrdersContainer>
  );
};