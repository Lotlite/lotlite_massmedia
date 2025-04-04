import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
<<<<<<< HEAD
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
=======
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnquiryButton from '@/components/EnquiryButton';
>>>>>>> c72fcf85543050bf1c172460f0cd4936de4c9126

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MarketPro - Digital Marketing Solutions',
  description: 'Transform your digital presence with our comprehensive marketing solutions.',
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
<<<<<<< HEAD
        <FloatingContact />
=======
        <EnquiryButton />
        <WhatsAppButton phoneNumber="8600021773" />
>>>>>>> c72fcf85543050bf1c172460f0cd4936de4c9126
        <Footer />
      </body>
    </html>
  );
}
