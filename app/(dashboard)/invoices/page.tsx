import { RoleGuard } from '@/app/components/role-guard';

const invoices = [
  { no: 'FTR-2401', customer: 'Atlas Otomasyon', amount: '₺85.000', due: '05.08.2026' },
  { no: 'FTR-2408', customer: 'Nova Enerji', amount: '₺120.000', due: '14.08.2026' }
];

export default function InvoicesPage() {
  return (
    <RoleGuard roles={['admin', 'finance']}>
      <h1>Fatura Yönetimi</h1>
      <div className="card">
        {invoices.map((invoice) => (
          <p key={invoice.no}>{invoice.no} • {invoice.customer} • {invoice.amount} • Vade: {invoice.due}</p>
        ))}
      </div>
    </RoleGuard>
  );
}
