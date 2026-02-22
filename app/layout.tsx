import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/app/components/auth-context';

export const metadata: Metadata = {
  title: 'CRM Web Uygulaması',
  description: 'Satış, teknik servis ve muhasebe modülleri olan modern CRM uygulaması'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
