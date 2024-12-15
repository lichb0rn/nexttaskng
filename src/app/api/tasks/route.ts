import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
  } catch (error) {
    console.error(`Error creating task: ${error}`);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
