import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiResponse, PaginatedResponse } from '../types';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor to add auth token
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor for error handling
    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Unauthorized - redirect to login
          localStorage.removeItem('auth_token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic GET request
  async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    const response = await this.api.get(url, { params });
    return response.data;
  }

  // Generic POST request
  async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    const response = await this.api.post(url, data);
    return response.data;
  }

  // Generic PUT request
  async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    const response = await this.api.put(url, data);
    return response.data;
  }

  // Generic DELETE request
  async delete<T>(url: string): Promise<ApiResponse<T>> {
    const response = await this.api.delete(url);
    return response.data;
  }

  // Paginated GET request
  async getPaginated<T>(
    url: string, 
    page: number = 1, 
    limit: number = 10,
    params?: any
  ): Promise<PaginatedResponse<T>> {
    const response = await this.api.get(url, {
      params: { page, limit, ...params }
    });
    return response.data;
  }
}

// Create and export a singleton instance
export const apiService = new ApiService();

// Export specific service methods for different entities
export const authService = {
  login: (email: string, password: string) => 
    apiService.post('/auth/login', { email, password }),
  
  logout: () => 
    apiService.post('/auth/logout'),
    
  getCurrentUser: () => 
    apiService.get('/auth/me'),
};

export const productService = {
  getAll: (params?: any) => 
    apiService.getPaginated('/products', 1, 50, params),
    
  getById: (id: string) => 
    apiService.get(`/products/${id}`),
    
  create: (product: any) => 
    apiService.post('/products', product),
    
  update: (id: string, product: any) => 
    apiService.put(`/products/${id}`, product),
    
  delete: (id: string) => 
    apiService.delete(`/products/${id}`),
};

export const orderService = {
  getAll: (params?: any) => 
    apiService.getPaginated('/orders', 1, 50, params),
    
  getById: (id: string) => 
    apiService.get(`/orders/${id}`),
    
  create: (order: any) => 
    apiService.post('/orders', order),
    
  update: (id: string, order: any) => 
    apiService.put(`/orders/${id}`, order),
    
  updateStatus: (id: string, status: string) => 
    apiService.put(`/orders/${id}/status`, { status }),
};

export const customerService = {
  getAll: (params?: any) => 
    apiService.getPaginated('/customers', 1, 50, params),
    
  getById: (id: string) => 
    apiService.get(`/customers/${id}`),
    
  create: (customer: any) => 
    apiService.post('/customers', customer),
    
  update: (id: string, customer: any) => 
    apiService.put(`/customers/${id}`, customer),
};

export const dashboardService = {
  getStats: () => 
    apiService.get('/dashboard/stats'),
    
  getRecentOrders: (limit: number = 5) => 
    apiService.get(`/dashboard/recent-orders?limit=${limit}`),
};