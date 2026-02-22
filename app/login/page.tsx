'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/components/auth-context';
import { Role } from '@/lib/types';
import { roleLabels } from '@/lib/data';

const roles: Role[] = ['admin', 'sales', 'service', 'finance'];

export default function LoginPage() {
  const [role, setRole] = useState<Role>('admin');
  const { login } = useAuth();
  const router = useRouter();

  return (
    <main style={{ maxWidth: 480, margin: '10vh auto', background: '#fff', padding: '2rem', borderRadius: 10, border: '1px solid #e5e7eb' }}>
      <h1>CRM Giriş</h1>
      <p>Rol bazlı giriş seçimi yapın.</p>
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
        <select value={role} onChange={(event) => setRole(event.target.value as Role)}>
          {roles.map((item) => (
            <option key={item} value={item}>
              {roleLabels[item]}
            </option>
          ))}
        </select>
        <button
          className="primary"
          onClick={() => {
            login(role);
            router.push('/');
          }}
        >
          Giriş Yap
        </button>
      </div>
    </main>
  );
}
