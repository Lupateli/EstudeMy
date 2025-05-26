import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  console.log('REGISTER DATA:', body)

  return NextResponse.json({
    message: 'Register data received successfully',
    data: body
  })
}