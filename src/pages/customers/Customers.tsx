import React from 'react';
import styled from 'styled-components';

const CustomersContainer = styled.div`
  padding: 0;
`;

const Title = styled.h1`
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const CustomersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const CustomerCard = styled.div`
  background: var(--surface-color);
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const CustomerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CustomerAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 1rem;
`;

const CustomerInfo = styled.div`
  flex: 1;
`;

const CustomerName = styled.h3`
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
`;

const CustomerEmail = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
`;

const CustomerStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 0.75rem;
  background-color: var(--background-color);
  border-radius: 0.5rem;
`;

const StatValue = styled.div`
  color: var(--primary-color);
  font-size: 1.25rem;
  font-weight: 700;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
`;

const mockCustomers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    totalOrders: 15,
    totalSpent: 186.50,
    initials: 'JD'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    totalOrders: 23,
    totalSpent: 298.75,
    initials: 'JS'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@email.com',
    totalOrders: 8,
    totalSpent: 124.00,
    initials: 'BJ'
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@email.com',
    totalOrders: 31,
    totalSpent: 412.25,
    initials: 'AB'
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie.wilson@email.com',
    totalOrders: 12,
    totalSpent: 156.50,
    initials: 'CW'
  },
  {
    id: 6,
    name: 'Diana Martinez',
    email: 'diana.martinez@email.com',
    totalOrders: 19,
    totalSpent: 245.75,
    initials: 'DM'
  }
];

export const Customers: React.FC = () => {
  return (
    <CustomersContainer>
      <Title>Customers</Title>
      
      <CustomersGrid>
        {mockCustomers.map((customer) => (
          <CustomerCard key={customer.id}>
            <CustomerHeader>
              <CustomerAvatar>
                {customer.initials}
              </CustomerAvatar>
              <CustomerInfo>
                <CustomerName>{customer.name}</CustomerName>
                <CustomerEmail>{customer.email}</CustomerEmail>
              </CustomerInfo>
            </CustomerHeader>
            
            <CustomerStats>
              <StatItem>
                <StatValue>{customer.totalOrders}</StatValue>
                <StatLabel>Total Orders</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>${customer.totalSpent}</StatValue>
                <StatLabel>Total Spent</StatLabel>
              </StatItem>
            </CustomerStats>
          </CustomerCard>
        ))}
      </CustomersGrid>
    </CustomersContainer>
  );
};