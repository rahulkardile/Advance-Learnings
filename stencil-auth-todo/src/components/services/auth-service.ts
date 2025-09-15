export const AuthService = {
  login: async (username: string, password: string): Promise<string> => {
    if (username === 'user' && password === 'pass') {
      const token = 'fake-token-123';
      localStorage.setItem('authToken', token);
      return token;
    }
    throw new Error('Invalid credentials');
  },

  logout: () => {
    localStorage.removeItem('authToken');
    location.href = '/login';
  },

  getToken: () => localStorage.getItem('authToken'),

  isLoggedIn: () => !!localStorage.getItem('authToken'),
};
