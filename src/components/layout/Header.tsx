import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--surface-color);
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 250px; // Sidebar width
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.span`
  color: var(--text-primary);
  font-weight: 500;
`;

const LogoutButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

export const Header: React.FC = () => {
  const handleLogout = () => {
    // TODO: Implement logout logic
    localStorage.removeItem('auth_token');
    window.location.href = '/login';
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>M2 Coffee Management</Title>
        <UserSection>
          <UserName>Admin User</UserName>
          <LogoutButton onClick={handleLogout}>
            Logout
          </LogoutButton>
        </UserSection>
      </HeaderContent>
    </HeaderContainer>
  );
};