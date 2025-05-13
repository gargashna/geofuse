import { NextRequest, NextResponse } from 'next/server';
export function middleware(request: NextRequest) {
//     const geo = (request as NextRequest & { geo?: { country?: string } }).geo;
// //commenting out to test manually via toggle 
//     const country = geo?.country || 'US';

const url = request.nextUrl;
const queryCountry = url.searchParams.get('country');

const geoCountry = (request as NextRequest & { geo?: { country?: string } }).geo?.country || 'US';
const country = queryCountry || geoCountry;
    const response = NextResponse.next();
    response.headers.set('x-country', country);
    response.headers.set('x-url', request.url);
    console.log('response', response)
    return response;
}

export const config = {
    matcher: ['/'],
  };