import { NextRequest, NextResponse } from 'next/server';
export function middleware(request: NextRequest) {
    const geo = request?.geo;
    const country = geo?.country || 'US';

    const response = NextResponse.next();
    response.headers.set('x-country', country);
    return response;
}

export const config = {
    matcher: ['/'],
  };