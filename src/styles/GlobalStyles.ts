import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5;
    color: #333;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  // Coffee theme colors
  :root {
    --primary-color: #8B4513;      // Saddle Brown
    --secondary-color: #D2691E;    // Chocolate
    --accent-color: #F4A460;       // Sandy Brown
    --success-color: #228B22;      // Forest Green
    --warning-color: #FF8C00;      // Dark Orange
    --error-color: #DC143C;        // Crimson
    --background-color: #FDF5E6;   // Old Lace
    --surface-color: #FFFFFF;      // White
    --text-primary: #2F1B14;       // Dark Brown
    --text-secondary: #5D4037;     // Brown
    --border-color: #D7CCC8;       // Light Brown
  }

  // Utility classes
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .justify-center {
    justify-content: center;
  }

  .align-center {
    align-items: center;
  }

  .text-center {
    text-align: center;
  }

  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }

  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
`;