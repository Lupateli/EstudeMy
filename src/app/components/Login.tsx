'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Logo from './Logo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Resposta da API:', data);
        // Você pode fazer algo depois, tipo redirecionar ou mostrar mensagem
      } else {
        console.error('Erro ao enviar login:', data);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <div className="max-w-2xl min-w-[40rem] mx-auto p-6 bg-white rounded-lg shadow-md my-20">
      <Logo />
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-sm text-left"> Email :</label>
          <input
            type="text"
            placeholder="Digite seu endereço de email."
            className="rounded-lg py-2 px-4 text-sm border border-gray-30 "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-left"> Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha."
            className="rounded-lg py-2 px-4 text-sm border border-gray-30"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <Button type="submit" variant="primary" href="/pages/menuTrilhas">
          Login
        </Button>
      </form>
      <div className="mt-8 pt-6 border-t border-gray-200 text-center"></div>
      <p>
        Não possui conta?{' '}
        <a href="/pages/cadastro" className="text-blue-600 hover:underline">
          Cadastrar-se
        </a>
      </p>
    </div>
  );
};

export default Login;
