
export function getToken(): string | null {
  return localStorage.getItem('auth_token');
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

export function getUserInfo(): { username: string; role: string } | null {
  const token = getToken();
  if (!token) return null;

  // Decode token and extract user info (assuming JWT)
  const payload = token.split('.')[1];
  const decoded = atob(payload);
  return JSON.parse(decoded);
}

export function login(token: string): void {
  localStorage.setItem('auth_token', token);
}

export function logout(): void {
  localStorage.removeItem('auth_token');
}
