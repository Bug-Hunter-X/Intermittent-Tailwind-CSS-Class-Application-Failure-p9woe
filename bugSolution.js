```javascript
// Solution using a more robust approach to injecting Tailwind CSS classes, or possibly a workaround for a conflict
// Example: Using a CSS-in-JS library for more control over styling
import styled from 'styled-components';

const MyComponent = styled.div`
  background-color: #f8f9fa;  /* Gray-100 equivalent */
  padding: 1rem;
  h1 {
    font-size: 1.5rem;
    font-weight: bold; 
  }
  p {
    color: #495057; /* Gray-700 equivalent */
  }
`;

// ... rest of the code
```