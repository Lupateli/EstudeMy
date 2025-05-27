import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  console.log('LOGIN DATA:', body)

  return NextResponse.json({
    message: 'Login data received successfully',
    data: body
  })
}