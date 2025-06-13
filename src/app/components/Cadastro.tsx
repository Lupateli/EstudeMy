'use client'

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Logo from './Logo'

const Cadastrar = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mostrarSenhas, setMostrarSenhas] = useState(false)
  const [erro, setErro] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro('')

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.')
      return
    }
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErro(data.mensagem || 'Erro no cadastro')
      }

      
      console.log('Resposta da API:', data)
      window.location.href = '/pages/login'
      
    } catch (error) {
      console.error('Erro ao cadastrar:', error)
      setErro('Erro ao conectar com o servidor.')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4 h-screen flex flex-col relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('/img/background-image-login-register.png')`,
      }}
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <Logo />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-left text-black">
              Usuário:
            </label>
            <input
              type="text"
              placeholder="Seu Nickname."
              className="rounded-lg py-2 px-4 text-sm border-1 border-gray-400 bg-gray-100"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1 text-left">Email:</label>
            <input
              type="email"
              placeholder="Seu endereço de email."
              className="rounded-lg py-2 px-4 text-sm border-1 border-gray-400 bg-gray-100"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm mb-1 text-left">Senha:</label>
            <div className="relative">
              <input
                type={mostrarSenhas ? "text" : "password"}
                placeholder="Digite sua senha."
                className="w-full rounded-lg py-2 px-4 pr-10 text-sm border-1 border-gray-400 bg-gray-100"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setMostrarSenhas(!mostrarSenhas)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-900"
                title={mostrarSenhas ? "Ocultar senha" : "Mostrar senha"}
              >
                {mostrarSenhas ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.964 9.964 0 012.41-4.042M6.112 6.112A9.967 9.967 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.977 9.977 0 01-3.522 4.932M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm mb-1 text-left">Repita sua Senha:</label>
            <div className="relative">
              <input
                type={mostrarSenhas ? "text" : "password"}
                placeholder="Digite sua senha novamente."
                className="w-full rounded-lg py-2 px-4 pr-10 text-sm border-1 border-gray-400 bg-gray-100"
                required
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setMostrarSenhas(!mostrarSenhas)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-900"
                title={mostrarSenhas ? "Ocultar senha" : "Mostrar senha"}
              >
                {mostrarSenhas ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.964 9.964 0 012.41-4.042M6.112 6.112A9.967 9.967 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.977 9.977 0 01-3.522 4.932M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <Button type="submit" variant="primary">
            Cadastrar
          </Button>
          {erro && <p className="text-red-600 text-sm">{erro}</p>}
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Caso tenha problemas no cadastro, nos envie um email.{" "}
            <a
              href="mailto:contato@plataforma.com"
              className="text-blue-600 hover:underline break-words overflow-hidden leading-tight"
            >
              <br />
              contato@plataforma.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastrar