import { RoleGuard } from '@/app/components/role-guard';

const tickets = [
  { no: 'SRV-1023', subject: 'Cihaz kalibrasyon hatası', priority: 'Yüksek' },
  { no: 'SRV-1027', subject: 'Uzaktan bağlantı problemi', priority: 'Orta' },
  { no: 'SRV-1031', subject: 'Periyodik bakım planlaması', priority: 'Düşük' }
];

export default function ServiceTicketsPage() {
  return (
    <RoleGuard roles={['admin', 'service']}>
      <h1>Servis Ticket</h1>
      <div className="card">
        {tickets.map((ticket) => (
          <p key={ticket.no}>{ticket.no} • {ticket.subject} • {ticket.priority}</p>
        ))}
      </div>
    </RoleGuard>
  );
}
