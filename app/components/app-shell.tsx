'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navItems, roleLabels } from '@/lib/data';
import { useAuth } from '@/app/components/auth-context';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  if (!user) {
    router.push('/login');
    return null;
  }

  const links = navItems.filter((item) => item.allowedRoles.includes(user.role));

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="brand">Modern CRM</div>
        <p>{user.name}</p>
        <p>Rol: {roleLabels[user.role]}</p>
        <nav className="nav">
          {links.map((item) => (
            <Link
              key={item.href}
              className={`navLink ${pathname === item.href ? 'active' : ''}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button style={{ marginTop: '1rem' }} onClick={() => { logout(); router.push('/login'); }}>
          Çıkış Yap
        </button>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
