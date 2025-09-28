# M2 Coffee Frontend

A modern React TypeScript application for coffee shop management, built with best practices and Docker support.

## 🏗️ Architecture Overview

This frontend application follows a modular, scalable architecture designed for maintainability and developer experience.

### 📁 Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components (ProtectedRoute, etc.)
│   ├── layout/         # Layout components (Header, Sidebar, Layout)
│   └── forms/          # Form components
├── pages/              # Page components (route handlers)
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # Dashboard page
│   ├── products/       # Product management pages
│   ├── orders/         # Order management pages
│   └── customers/      # Customer management pages
├── hooks/              # Custom React hooks
├── services/           # API services and external integrations
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles and themes
└── assets/             # Static assets (images, icons, etc.)
```

### 🛠️ Technology Stack

- **React 18** - UI library with latest features
- **TypeScript** - Type safety and better developer experience
- **React Router Dom** - Client-side routing
- **Styled Components** - CSS-in-JS styling solution
- **Axios** - HTTP client for API communication
- **ESLint + Prettier** - Code quality and formatting
- **Docker** - Containerization for consistent deployment

### 🎨 Design System

The application uses a coffee-themed color palette:

- **Primary**: `#8B4513` (Saddle Brown)
- **Secondary**: `#D2691E` (Chocolate)
- **Accent**: `#F4A460` (Sandy Brown)
- **Background**: `#FDF5E6` (Old Lace)
- **Surface**: `#FFFFFF` (White)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker and Docker Compose (for containerized development)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd m2-coffee-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`

### Docker Development

1. **Development with hot reload**
   ```bash
   docker-compose --profile dev up frontend-dev
   ```

2. **Production build**
   ```bash
   docker-compose up frontend
   ```

3. **Full stack with database**
   ```bash
   docker-compose --profile db --profile dev up
   ```

## 📦 Available Scripts

- `npm start` - Start development server
- `npm build` - Create production build
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:dev` - Start with Docker Compose

## 🐳 Docker Architecture

### Multi-stage Build Process

1. **Build Stage**: Installs dependencies and builds the React application
2. **Production Stage**: Serves the built application using Nginx

### Container Features

- **Multi-stage build** for optimized image size
- **Nginx** for efficient static file serving
- **Health checks** for container monitoring
- **Gzip compression** for better performance
- **Security headers** for enhanced security
- **SPA routing support** with fallback to index.html

### Docker Compose Services

- **frontend**: Production React application
- **frontend-dev**: Development server with hot reload
- **backend**: Placeholder for backend service
- **database**: PostgreSQL database (profile: db)
- **redis**: Redis cache (profile: cache)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_ENV=development
```

### Nginx Configuration

The `deployment/nginx/nginx.conf` file includes:

- SPA routing support
- Static asset caching
- Security headers
- API proxy configuration
- Health check endpoint

## 🏛️ Application Architecture

### Component Structure

- **Layout Components**: Handle application shell (Header, Sidebar, Layout)
- **Page Components**: Handle route-specific logic and UI
- **Common Components**: Reusable UI elements
- **Form Components**: Specialized form controls

### State Management

Currently using React's built-in state management. Ready for integration with:
- Redux Toolkit (for complex state)
- React Query (for server state)
- Context API (for global state)

### Routing

- **Protected Routes**: Require authentication
- **Public Routes**: Accessible without authentication
- **Nested Routes**: Organized by feature areas

### API Integration

- **Axios interceptors** for request/response handling
- **Authentication token** management
- **Error handling** with automatic logout on 401
- **Service layer** for API abstraction

## 🔐 Authentication

The application includes a basic authentication structure:

- Login form with email/password
- Protected routes that require authentication
- Token-based authentication (localStorage)
- Automatic logout on token expiration

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint-based responsive design
- Touch-friendly interface
- Accessible navigation

## 🧪 Testing Strategy

- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: API service testing
- **E2E Tests**: User workflow testing (ready for Cypress/Playwright)

## 🚀 Deployment

### Production Build

```bash
npm run build
```

Creates optimized production build in the `build` folder.

### Docker Deployment

```bash
docker build -t m2-coffee-frontend .
docker run -p 3000:3000 m2-coffee-frontend
```

### Docker Compose Deployment

```bash
docker-compose up --build
```

## 🔄 Development Workflow

1. **Feature Development**
   - Create feature branch
   - Develop components and tests
   - Run linting and tests
   - Create pull request

2. **Code Quality**
   - ESLint for code quality
   - Prettier for formatting
   - TypeScript for type safety
   - Husky for git hooks (optional)

## 📈 Performance Optimization

- **Code splitting** with React.lazy
- **Bundle optimization** with Create React App
- **Image optimization** for assets
- **Caching strategies** in production

## 🛡️ Security Features

- **Content Security Policy** headers
- **XSS protection** headers
- **Frame options** for clickjacking protection
- **HTTPS redirect** in production
- **Token-based authentication**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Frontend Architecture**: React + TypeScript + Styled Components
- **Deployment**: Docker + Nginx
- **Development**: Hot reload + ESLint + Prettier
- **Testing**: React Testing Library + Jest

---

Built with ❤️ for coffee lovers ☕