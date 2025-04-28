// src/app/api/waitlist/route.ts
import { NextResponse } from 'next/server';
import { addToWaitlist } from '@/app/appwrite'; // Adjust path as needed

// Use named export for POST method
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }
    
    const result = await addToWaitlist(email);
    
    if (result.success) {
      return NextResponse.json({ message: 'Successfully added to waitlist' });
    } else {
      return NextResponse.json({ message: 'Failed to add to waitlist', error: result.error }, { status: 500 });
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Server error', error: errorMessage }, { status: 500 });
  }
}