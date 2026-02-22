import { NavItem } from '@/lib/types';

export const navItems: NavItem[] = [
  { href: '/', label: 'Genel Bakış', allowedRoles: ['admin', 'sales', 'service', 'finance'] },
  { href: '/customers', label: 'Müşteri Yönetimi', allowedRoles: ['admin', 'sales', 'service'] },
  { href: '/pipeline', label: 'Fırsat Pipeline', allowedRoles: ['admin', 'sales'] },
  { href: '/service-tickets', label: 'Servis Ticket', allowedRoles: ['admin', 'service'] },
  { href: '/invoices', label: 'Fatura', allowedRoles: ['admin', 'finance'] },
  { href: '/reports', label: 'Raporlar', allowedRoles: ['admin', 'sales', 'service', 'finance'] }
];

export const roleLabels = {
  admin: 'Yönetici',
  sales: 'Satış',
  service: 'Teknik Servis',
  finance: 'Muhasebe'
};
