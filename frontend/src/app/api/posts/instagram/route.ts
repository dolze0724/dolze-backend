import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    const response = await fetch(process.env.BACKEND_API_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error during API call:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error?.message },
      { status: 500 }
    );
  }
}
