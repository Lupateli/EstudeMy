"use client";
import { useState } from "react";
import React from "react";

export default function MinhaConta() {
  const user = {
    nome: "João Silva",
    email: "joao.silva@example.com",
    telefone: "(11) 98765-4321",
  };

  const handleEditar = () => alert("Editar informações");
  const handleCriarTrilha = () => alert("Criar trilha");
  const handleAlterarSenha = () => alert("Alterar senha");
  const handleExcluirConta = () => alert("Conta excluída");
  const handleSair = () => alert("Você saiu da conta");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Minha Conta</h2>
          <button
            onClick={handleSair}
            className="bg-red-500 text-white px-4 py-1 mt-2 rounded hover:bg-red-600"
          >
            Sair
          </button>
        </div>

        {/* Informações Pessoais */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg border-b pb-1 mb-2">
            Informações Pessoais
          </h3>
          <div className="flex justify-between mb-1">
            <span className="font-medium">Nome:</span>
            <span>{user.nome}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-medium">E-mail:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="font-medium">Telefone:</span>
            <span>{user.telefone}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleEditar}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Editar Informações
            </button>
            <button
              onClick={handleCriarTrilha}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Criar Trilha
            </button>
          </div>
        </div>

        {/* Configurações */}
        <div>
          <h3 className="font-semibold text-lg border-b pb-1 mb-2">
            Configurações
          </h3>
          <button
            onClick={handleAlterarSenha}
            className="bg-sky-400 text-white w-full py-2 rounded mb-2 hover:bg-sky-500"
          >
            Alterar Senha
          </button>
          <button
            onClick={handleExcluirConta}
            className="bg-sky-400 text-white w-full py-2 rounded hover:bg-sky-500"
          >
            Excluir Conta
          </button>
        </div>
      </div>
    </div>
  );
}
