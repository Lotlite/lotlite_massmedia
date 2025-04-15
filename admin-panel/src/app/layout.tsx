import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Admin Dashboard - Lotlite Mass Media',
  description: 'Admin panel for managing contact form submissions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Sidebar />
        <div className="ml-64">
          <Header />
          <main className="pt-16 min-h-screen bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 