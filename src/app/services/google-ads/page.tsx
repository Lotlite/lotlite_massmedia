'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GoogleAdsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/google-ads-management');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to Google Ads Management...</p>
      </div>
    </div>
  );
} 