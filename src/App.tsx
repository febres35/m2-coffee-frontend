import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Dashboard } from '@/pages/dashboard/Dashboard';
import { Products } from '@/pages/products/Products';
import { Orders } from '@/pages/orders/Orders';
import { Customers } from '@/pages/customers/Customers';
import { Login } from '@/pages/auth/Login';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
};

export default App;