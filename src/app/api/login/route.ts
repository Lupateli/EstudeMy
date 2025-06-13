import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, senha } = body;

    if (!email || !senha) {
      return NextResponse.json(
        { sucesso: false, mensagem: 'Email e senha são obrigatórios.' },
        { status: 400 }
      );
    }

    if (email === 'admin@example.com' && senha === 'pisenha123' || email === 'teste@example.com' && senha === 'teste123pi' ) {
      return NextResponse.json({ sucesso: true, mensagem: 'Login realizado com sucesso!' });
    } else {
      return NextResponse.json(
        { sucesso: false, mensagem: 'Credenciais inválidas.' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Erro no servidor:', error)
    return NextResponse.json(
      { sucesso: false, mensagem: 'Erro no servidor.' },
      { status: 500 }
    );
  }
}