import { RoleGuard } from '@/app/components/role-guard';

export default function ReportsPage() {
  return (
    <RoleGuard roles={['admin', 'sales', 'service', 'finance']}>
      <h1>Raporlar</h1>
      <div className="grid">
        <div className="card"><h3>Satış Performansı</h3><p>Çeyreklik kapanış oranı: %32</p></div>
        <div className="card"><h3>Servis SLA</h3><p>Zamanında çözüm oranı: %91</p></div>
        <div className="card"><h3>Tahsilat Durumu</h3><p>Ortalama tahsilat süresi: 23 gün</p></div>
      </div>
    </RoleGuard>
  );
}
