// src/lib/authUtil.ts
import {jwtDecode} from 'jwt-decode';

export interface AuthToken {
  accessToken: string;
  tokenType: string;
}

export interface DecodedToken {
  sub: string;
  iat: number;
  exp: number;
  role: string;
}

export function extractAccessToken(tokenObject: string): string | null {
  try {
    const { accessToken } = JSON.parse(tokenObject) as AuthToken;
    return accessToken;
  } catch (error) {
    console.error('Failed to parse token object:', error);
    return null;
  }
}

export function decodeToken(token: string): DecodedToken | null {
  if (!token) return null;

  try {
    const cleanToken = token.startsWith('Bearer ') ? token.slice(7) : token;
    return jwtDecode<DecodedToken>(cleanToken);
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
}

export function isAuthenticated(tokenObject: string | null): boolean {
  const accessToken = extractAccessToken(tokenObject ?? '');
  return !!accessToken;
}

export function getUserInfo(tokenObject: string | null): DecodedToken | null {
  const accessToken = extractAccessToken(tokenObject ?? '');
  if (!accessToken) return null;

  return decodeToken(accessToken);
}

export function getSub(tokenObject: string | null): string | null {
  const decodedToken = getUserInfo(tokenObject);
  return decodedToken ? decodedToken.sub : null;
}

export function getRole(tokenObject: string | null): string | null {
  const decodedToken = getUserInfo(tokenObject);
  return decodedToken ? decodedToken.role : null;
}

const roleHierarchy = ['USER', 'SELLER', 'ADMIN'];

export function hasPermission(userRole: string | null, requiredRole: string): boolean {
  if (!userRole) return false;
  return roleHierarchy.indexOf(userRole) >= roleHierarchy.indexOf(requiredRole);
}
