// lib/types.ts

export interface JwtPayload {
  username: string;
  role: string;
  exp: number; // Expiry time in Unix timestamp
}
