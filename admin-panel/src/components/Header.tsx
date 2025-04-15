'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="h-16 bg-white shadow-sm fixed top-0 right-0 left-64 z-10 flex items-center justify-end px-6">
      <div className="flex items-center space-x-4">
        <Link 
          href="/login"
          className="text-gray-600 hover:text-gray-900"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
} 