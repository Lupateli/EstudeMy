import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { sucesso: false, mensagem: 'Email é obrigatório.' },
        { status: 400 }
      );
    }

    // Sempre retorna que o email foi enviado, para qualquer email válido
    return NextResponse.json(
      { 
        sucesso: true, 
        mensagem: 'Email enviado com sucesso! Verifique sua caixa de entrada.' 
      }
    );

  } catch (error) {
    console.error('Erro no servidor:', error)
    return NextResponse.json(
      { 
        sucesso: false, 
        mensagem: 'Erro no servidor ao tentar enviar o email.' 
      },
      { status: 500 }
    );
  }
}