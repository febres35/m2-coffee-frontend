import React from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 0;
`;

const Title = styled.h1`
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ProductCard = styled.div`
  background: var(--surface-color);
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const ProductDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductPrice = styled.span`
  color: var(--primary-color);
  font-size: 1.25rem;
  font-weight: 700;
`;

const StockStatus = styled.span<{ inStock: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => props.inStock ? 'var(--success-color)' : 'var(--error-color)'};
  color: white;
`;

const mockProducts = [
  {
    id: 1,
    name: 'Espresso',
    description: 'Strong and concentrated coffee shot',
    price: '$3.50',
    inStock: true,
    emoji: '☕'
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: '$4.25',
    inStock: true,
    emoji: '☕'
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Espresso with lots of steamed milk',
    price: '$4.50',
    inStock: false,
    emoji: '🥛'
  },
  {
    id: 4,
    name: 'Americano',
    description: 'Espresso with hot water',
    price: '$3.75',
    inStock: true,
    emoji: '☕'
  },
  {
    id: 5,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
    price: '$5.00',
    inStock: true,
    emoji: '🍫'
  },
  {
    id: 6,
    name: 'Frappuccino',
    description: 'Cold blended coffee drink',
    price: '$5.50',
    inStock: true,
    emoji: '🧊'
  }
];

export const Products: React.FC = () => {
  return (
    <ProductsContainer>
      <Title>Products</Title>
      
      <ProductGrid>
        {mockProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>
              {product.emoji}
            </ProductImage>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductFooter>
                <ProductPrice>{product.price}</ProductPrice>
                <StockStatus inStock={product.inStock}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </StockStatus>
              </ProductFooter>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsContainer>
  );
};