import { NextResponse } from 'next/server';
import { get, getAll } from '@vercel/edge-config';
 


export const config = { matcher: '/welcome' };
 
export async function middleware() {
//   const title = await get('title');
  
  const greeting = await get('greeting');
  return NextResponse.json(greeting);
}

