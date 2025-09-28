import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: var(--primary-color);
  color: white;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  overflow-y: auto;
  z-index: 100;
  
  @media (max-width: 768px) {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    
    &.open {
      transform: translateX(0);
    }
  }
`;

const Logo = styled.div`
  padding: 2rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const LogoText = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

const Nav = styled.nav`
  padding: 1rem 0;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: var(--secondary-color);
    border-right: 3px solid var(--accent-color);
  }
`;

const NavIcon = styled.span`
  margin-right: 0.75rem;
  font-size: 1.1rem;
`;

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/products', label: 'Products', icon: '☕' },
  { path: '/orders', label: 'Orders', icon: '📋' },
  { path: '/customers', label: 'Customers', icon: '👥' },
];

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo>
        <LogoText>☕ M2 Coffee</LogoText>
      </Logo>
      <Nav>
        {menuItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <NavIcon>{item.icon}</NavIcon>
            {item.label}
          </NavItem>
        ))}
      </Nav>
    </SidebarContainer>
  );
};