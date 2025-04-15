'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold text-blue-600">LotliteFintech</h1>
      </div>
      
      <div className="p-4">
        <h2 className="text-sm font-medium text-gray-500 mb-4">Admin Panel</h2>
        
        <nav className="space-y-2">
          <Link 
            href="/dashboard" 
            className={`flex items-center p-3 text-gray-600 rounded-lg hover:bg-blue-50 ${
              isActive('/dashboard') ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </Link>

          <Link 
            href="/users" 
            className={`flex items-center p-3 text-gray-600 rounded-lg hover:bg-blue-50 ${
              isActive('/users') ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <div className="relative">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            All Users
          </Link>

          <Link 
            href="/" 
            className={`flex items-center p-3 text-gray-600 rounded-lg hover:bg-blue-50 ${
              isActive('/') ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Submissions
          </Link>
        </nav>
      </div>
    </div>
  );
} 