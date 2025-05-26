'use client'

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Logo from './Logo'

const Cadastrar = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.')
      return
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
      })

      const data = await res.json()
      console.log('Resposta da API:', data)

      // Você pode redirecionar manualmente depois, se quiser:
      // window.location.href = '/pages/login'
    } catch (error) {
      console.error('Erro ao cadastrar:', error)
    }
  }

  return (
    <div className="max-w-2xl min-w-[40rem] mx-auto p-6 bg-white rounded-lg shadow-md my-20">
      <Logo />
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-sm text-left">Usuário :</label>
          <input
            type="text"
            placeholder="Seu nome completo."
            className="rounded-lg py-2 px-4 text-sm border border-gray-30"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-left">Email :</label>
          <input
            type="email"
            placeholder="Seu endereço de email."
            className="rounded-lg py-2 px-4 text-sm border border-gray-30"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-left">Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha."
            className="rounded-lg py-2 px-4 text-sm border border-gray-30"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-left">Repita sua Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha novamente."
            className="rounded-lg py-2 px-4 text-sm border border-gray-30"
            required
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>
        <Button type="submit" variant="primary">
          Cadastrar
        </Button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-600">
          Caso tenha problemas no cadastro, nos envie um email.{' '}
          <a href="mailto:contato@plataforma.com" className="text-blue-600 hover:underline">
            contato@plataforma.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Cadastrar