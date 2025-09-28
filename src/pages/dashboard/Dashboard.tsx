import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 0;
`;

const Title = styled.h1`
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: var(--surface-color);
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--primary-color);
`;

const StatTitle = styled.h3`
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StatValue = styled.div`
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
`;

const RecentSection = styled.div`
  background: var(--surface-color);
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 0.75rem;
  background-color: var(--background-color);
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
`;

const OrderInfo = styled.div`
  flex: 1;
`;

const OrderNumber = styled.span`
  font-weight: 600;
  color: var(--text-primary);
`;

const OrderStatus = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => 
    props.status === 'completed' ? 'var(--success-color)' : 
    props.status === 'pending' ? 'var(--warning-color)' : 
    'var(--error-color)'};
  color: white;
`;

const mockStats = [
  { title: 'Total Orders Today', value: '24' },
  { title: 'Revenue Today', value: '$486' },
  { title: 'Active Customers', value: '18' },
  { title: 'Popular Product', value: 'Latte' },
];

const mockOrders = [
  { id: '#001', customer: 'John Doe', status: 'completed' },
  { id: '#002', customer: 'Jane Smith', status: 'pending' },
  { id: '#003', customer: 'Bob Johnson', status: 'completed' },
];

export const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      
      <StatsGrid>
        {mockStats.map((stat, index) => (
          <StatCard key={index}>
            <StatTitle>{stat.title}</StatTitle>
            <StatValue>{stat.value}</StatValue>
          </StatCard>
        ))}
      </StatsGrid>
      
      <RecentSection>
        <SectionTitle>Recent Orders</SectionTitle>
        <OrderList>
          {mockOrders.map((order) => (
            <OrderItem key={order.id}>
              <OrderInfo>
                <OrderNumber>{order.id}</OrderNumber> - {order.customer}
              </OrderInfo>
              <OrderStatus status={order.status}>
                {order.status}
              </OrderStatus>
            </OrderItem>
          ))}
        </OrderList>
      </RecentSection>
    </DashboardContainer>
  );
};