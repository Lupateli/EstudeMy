import { useState } from "react";
import React from 'react';
import { Button } from "react-bootstrap";

const perguntas = [
  {
    id: 1,
    texto: "Na frase 'O menino brincava no parque ontem', qual é o sujeito?",
    alternativas: ["O menino", "brincava", "no parque", "ontem"],
    resposta: 0,
  },
  {
    id: 2,
    texto: "Qual é a classe gramatical da palavra 'rapidamente'?",
    alternativas: ["Adjetivo", "Substantivo", "Advérbio", "Verbo"],
    resposta: 2,
  },
  {
    id: 3,
    texto: "Em 'As crianças estudaram muito', o predicado é:",
    alternativas: ["As crianças", "estudaram muito", "muito", "crianças estudaram"],
    resposta: 1,
  },
  {
    id: 4,
    texto: "Qual palavra está no plural correto?",
    alternativas: ["Capitães", "Capitãos", "Capitos", "Capites"],
    resposta: 0,
  },
  {
    id: 5,
    texto: "A palavra 'feliz' é um:",
    alternativas: ["Substantivo", "Adjetivo", "Advérbio", "Verbo"],
    resposta: 1,
  },
  {
    id: 6,
    texto: "Em 'João comprou o livro para Maria', 'para Maria' é:",
    alternativas: ["Sujeito", "Predicado", "Objeto direto", "Objeto indireto"],
    resposta: 3,
  },
  {
    id: 7,
    texto: "Qual frase está com a concordância verbal correta?",
    alternativas: ["Fazem dois anos que ele partiu", "Faz dois anos que ele partiu", "Fazem dois ano que ele partiu", "Faz dois ano que ele partiu"],
    resposta: 1,
  },
  {
    id: 8,
    texto: "A palavra 'chuva' é:",
    alternativas: ["Substantivo próprio", "Substantivo comum", "Adjetivo", "Pronome"],
    resposta: 1,
  },
  {
    id: 9,
    texto: "Em 'Ela cantou lindamente', a palavra 'lindamente' modifica:",
    alternativas: ["O sujeito 'Ela'", "O verbo 'cantou'", "A frase toda", "Nenhuma palavra"],
    resposta: 1,
  },
  {
    id: 10,
    texto: "Qual é o feminino de 'ator'?",
    alternativas: ["Atora", "Atriz", "Atura", "Actriz"],
    resposta: 1,
  },
];

export default function Quiz() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [finalizado, setFinalizado] = useState(false);
  const [pontuacao, setPontuacao] = useState(0);

  const perguntaAtual = perguntas[indiceAtual];

  const handleButtonClick = (buttonIndex) => {
    if (buttonIndex < buttons.length - 2) {
      window.location.href = `trilha`;
    }
  };

  function selecionarResposta(indice) {
    if (respostaSelecionada === null) {
      setRespostaSelecionada(indice);
      if (indice === perguntaAtual.resposta) {
        setPontuacao(pontuacao + 1);
      }
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



  const letra = (i) => String.fromCharCode(65 + i); // A, B, C, D...

  return (
    <main className="min-h-screen flex flex-col items-center justify-center ">
      {!finalizado ? (
        <section className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Quiz de Português
              </h1>
              <span className="text-sm text-gray-500">
                {indiceAtual + 1} de {perguntas.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((indiceAtual + 1) / perguntas.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            {perguntaAtual.texto}
          </h2>

          <div className="flex flex-col gap-3 mb-8">
            {perguntaAtual.alternativas.map((alt, i) => {
              const isCorreta = i === perguntaAtual.resposta;
              const isSelecionada = i === respostaSelecionada;

              let cor =
                "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100";

              if (respostaSelecionada !== null) {
                if (isSelecionada && isCorreta) {
                  cor = "bg-green-500 text-white border-green-500 shadow-lg";
                } else if (isSelecionada && !isCorreta) {
                  cor = "bg-red-500 text-white border-red-500 shadow-lg";
                } else if (isCorreta) {
                  cor = "bg-green-500 text-white border-green-500 shadow-lg";
                } else {
                  cor = "bg-gray-100 text-gray-500 border-gray-200";
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => selecionarResposta(i)}
                  disabled={respostaSelecionada !== null}
                  className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-200 font-medium ${cor} ${
                    respostaSelecionada === null
                      ? "hover:shadow-md transform hover:-translate-y-0.5"
                      : ""
                  }`}
                >
                  <span className="font-bold">{letra(i)}:</span> {alt}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Pontuação: {pontuacao}/{perguntas.length}
            </div>
            <button
              onClick={proximaPergunta}
              disabled={respostaSelecionada === null}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {indiceAtual + 1 === perguntas.length ? "Finalizar" : "Próxima"}
            </button>
          </div>
        </section>
      ) : (
        <section className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Quiz Finalizado! 🎉
            </h2>
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {pontuacao}/{perguntas.length}
            </div>
            <p className="text-gray-600 text-lg">
              {pontuacao === perguntas.length
                ? "Perfeito! Você acertou todas!"
                : pontuacao >= perguntas.length * 0.7
                ? "Muito bem! Ótimo desempenho!"
                : pontuacao >= perguntas.length * 0.5
                ? "Bom trabalho! Continue praticando!"
                : "Continue estudando e tente novamente!"}
            </p>
          </div>

          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${(pontuacao / perguntas.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {Math.round((pontuacao / perguntas.length) * 100)}% de acertos
            </p>
          </div>

          <Button
            href = "/pages/trilha"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Voltar para trilha
          </Button>
        </section>
      )}
    </main>
  );
}