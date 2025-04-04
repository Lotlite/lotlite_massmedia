import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/services/paid-ads') {
    return NextResponse.redirect(new URL('/services/paid-advertising', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/services/paid-ads',
} 