import { RoleGuard } from '@/app/components/role-guard';

const customers = [
  { name: 'Atlas Otomasyon', segment: 'Kurumsal', status: 'Aktif' },
  { name: 'TeknoServis A.Ş.', segment: 'KOBİ', status: 'Potansiyel' },
  { name: 'Nova Enerji', segment: 'Enterprise', status: 'Aktif' }
];

export default function CustomersPage() {
  return (
    <RoleGuard roles={['admin', 'sales', 'service']}>
      <h1>Müşteri Yönetimi</h1>
      <div className="card">
        {customers.map((customer) => (
          <p key={customer.name}>{customer.name} • {customer.segment} • {customer.status}</p>
        ))}
      </div>
    </RoleGuard>
  );
}
