import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, senha } = body

    // Validação simples
    if (!nome || !email || !senha) {
      return NextResponse.json(
        { sucesso: false, mensagem: 'Nome, email e senha são obrigatórios.' },
        { status: 400 }
      )
    }

    console.log('Dados recebidos para cadastro:', { nome, email })

    return NextResponse.json({
      sucesso: true,
      mensagem: 'Cadastro realizado com sucesso!',
    })
  } catch (error) {
    console.error('Erro no servidor:', error)
    return NextResponse.json(
      { sucesso: false, mensagem: 'Erro interno no servidor.' },
      { status: 500 }
    )
  }
}
