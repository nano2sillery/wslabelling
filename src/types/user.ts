export type UserRole = 'user' | 'mkt_admin' | 'legal_admin' | 'super_admin';

export interface User {
  uid: string;
  email: string;
  role: UserRole;
  displayName?: string;
  createdAt: Date;
}