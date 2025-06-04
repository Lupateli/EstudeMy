import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Conquistas() {
    
    return(
        <main className="min-h-screen items-center justify-center bg-gray-100 p-4 mt-2 mx-52">
        <section id="sobre" className="mb-6">
          <h2 className="text-xl font-semibold">Questão 1</h2>
          <p>
            "Os alunos dedicados estudaram gramática durante toda a manhã."
          </p>
          <p>
            Identifique a função sintática dos termos destacados na frase:
          </p>
          <p>"Os alunos dedicados" - ________________________________</p>
           <p>" estudaram" - ________________________________</p>
           <p>" gramática" - ________________________________</p>
           <p>" durante toda a manhã" - ________________________________</p>
        </section>
        <Button className="bg-light text-black">A: Sujeito composto</Button>
        <Button className="bg-light text-black">B: Predicado verbal</Button>
        <Button className="bg-light text-black">C: Predicado verbal</Button>
        <Button className="bg-light text-black">D: Adjunto adverbial de tempo</Button>
        </main>
    )
}