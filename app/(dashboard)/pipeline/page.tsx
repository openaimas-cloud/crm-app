import { RoleGuard } from '@/app/components/role-guard';

const stages = [
  { name: 'Lead', count: 16 },
  { name: 'Teklif', count: 9 },
  { name: 'Müzakere', count: 5 },
  { name: 'Kapanış', count: 3 }
];

export default function PipelinePage() {
  return (
    <RoleGuard roles={['admin', 'sales']}>
      <h1>Fırsat Pipeline</h1>
      <div className="grid">
        {stages.map((stage) => (
          <div className="card" key={stage.name}>
            <h3>{stage.name}</h3>
            <p>{stage.count} fırsat</p>
          </div>
        ))}
      </div>
    </RoleGuard>
  );
}
