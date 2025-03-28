import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LotLite - Your Marketing Solution',
  description: 'Modern marketing solutions for your business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-grow">
          <main className="pt-16">
            {children}
          </main>
        </div>
        <WhatsAppButton phoneNumber="8600021773" />
        <Footer />
      </body>
    </html>
  );
}
