import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/home', '/dashboard']; 


const publicRoutes = ['/', '/signup', '/login']; 

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = cookies().get('token')?.value;

    if (isProtectedRoute && !cookie) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (isPublicRoute && cookie) {
        return NextResponse.redirect(new URL('/home', req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
