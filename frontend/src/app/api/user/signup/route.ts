import { NextResponse } from 'next/server';

export async function POST(req: { body: any }, res: any) {
  try {
    console.log(1);
    const response = await fetch(process.env.BACKEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    console.log(2);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(3);

    return NextResponse.json(data, { status: data.status });
  } catch (error) {
    console.log(4);

    console.error('Error during API call:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error?.message },
      { status: 500 }
    );
  }
}
