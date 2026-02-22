export type Role = 'admin' | 'sales' | 'service' | 'finance';

export interface User {
  name: string;
  role: Role;
}

export interface NavItem {
  href: string;
  label: string;
  allowedRoles: Role[];
}
