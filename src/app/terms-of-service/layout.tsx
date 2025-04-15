import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Lotlite Fintech',
  description: 'Terms of Service for Lotlite Fintech',
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 