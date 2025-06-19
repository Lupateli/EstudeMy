import { useState } from "react";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const perguntas = [
  {
    id: 1,
    texto: "Qual o nome do João Pedro Primeiro?",
    alternativas: ["João Pedro", "Pedro I", "João I", "João Pedro Primeiro"],
    resposta: 3,
  },
  {
    id: 2,
    texto: "Qual a cor do cavalo branco de Napoleão?",
    alternativas: ["Preto", "Marrom", "Cinza", "Branco"],
    resposta: 3,
  },
  {
    id: 3,
    texto: "Qual o nome do João Pedro Primeiro?",
    alternativas: ["João Pedro", "Pedro I", "João I", "João Pedro Primeiro"],
    resposta: 3,
  },
  {
    id: 4,
    texto: "Qual a cor do cavalo branco de Napoleão?",
    alternativas: ["Preto", "Marrom", "Cinza", "Branco"],
    resposta: 3,
  },
  {
    id: 5,
    texto: "Qual o nome do João Pedro Primeiro?",
    alternativas: ["João Pedro", "Pedro I", "João I", "João Pedro Primeiro"],
    resposta: 3,
  },
  {
    id: 6,
    texto: "Qual a cor do cavalo branco de Napoleão?",
    alternativas: ["Preto", "Marrom", "Cinza", "Branco"],
    resposta: 3,
  },
];

export default function Conquistas() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(null);
  const [finalizado, setFinalizado] = useState(false);
  

  const perguntaAtual = perguntas[indiceAtual];

  function selecionarResposta(indice: number) {
    if (respostaSelecionada === null) {
      setRespostaSelecionada(indice);
    }
  }

  function proximaPergunta() {
    if (indiceAtual + 1 < perguntas.length) {
      setIndiceAtual(indiceAtual + 1);
      setRespostaSelecionada(null);
    } else {
      setFinalizado(true);
    }
  }

  const letra = (i: number) => String.fromCharCode(65 + i); // A, B, C, D...

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {!finalizado ? (
        <section className="w-full max-w-xl bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Questão {indiceAtual + 1}: {perguntaAtual.texto}
          </h2>

          <div className="flex flex-col gap-2 mb-6">
            {perguntaAtual.alternativas.map((alt, i) => {
              const isCorreta = i === perguntaAtual.resposta;
              const isSelecionada = i === respostaSelecionada;

              let cor = "bg-gray-200 text-black";

              if (respostaSelecionada !== null) {
                if (isSelecionada && isCorreta) cor = "bg-green-500 text-white";
                else if (isSelecionada && !isCorreta) cor = "bg-red-500 text-white";
                else if (isCorreta) cor = "bg-green-500 text-white";
                else cor = "bg-gray-300 text-black";
              } else if (isSelecionada) {
                cor = "bg-blue-400 text-white";
              }

              return (
                <button
                  key={i}
                  onClick={() => selecionarResposta(i)}
                  disabled={respostaSelecionada !== null}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${cor}`}
                >
                  {letra(i)}: {alt}
                </button>
              );
            })}
          </div>

          <button
            onClick={proximaPergunta}
            disabled={respostaSelecionada === null}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Próxima
          </button>
        </section>
      ) : (
        <div className="text-center text-xl font-bold">🏁 Você finalizou o quiz!</div>
      )}
    </main>
  );
}
