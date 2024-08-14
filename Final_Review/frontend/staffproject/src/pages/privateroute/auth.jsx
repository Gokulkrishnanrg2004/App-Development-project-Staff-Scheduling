export const isAuthenticated = () => {
    // Replace this with real authentication logic
    return localStorage.getItem('authToken') !== null;
  };
    