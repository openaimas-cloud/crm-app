import { RoleGuard } from '@/app/components/role-guard';

export default function DashboardPage() {
  return (
    <RoleGuard roles={['admin', 'sales', 'service', 'finance']}>
      <h1>CRM Dashboard</h1>
      <div className="grid">
        <div className="card"><h3>Aktif Fırsatlar</h3><p>24</p></div>
        <div className="card"><h3>Açık Servis Talebi</h3><p>11</p></div>
        <div className="card"><h3>Bekleyen Fatura</h3><p>7</p></div>
        <div className="card"><h3>Aylık Ciro</h3><p>₺1.250.000</p></div>
      </div>
    </RoleGuard>
  );
}
