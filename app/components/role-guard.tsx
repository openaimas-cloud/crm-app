'use client';

import Link from 'next/link';
import { useAuth } from '@/app/components/auth-context';
import { Role } from '@/lib/types';

export function RoleGuard({ roles, children }: { roles: Role[]; children: React.ReactNode }) {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="card">
        Giriş gerekli. <Link href="/login">Login sayfasına git</Link>
      </div>
    );
  }

  if (!roles.includes(user.role)) {
    return <div className="card">Bu ekranı görüntüleme yetkiniz yok.</div>;
  }

  return <>{children}</>;
}
