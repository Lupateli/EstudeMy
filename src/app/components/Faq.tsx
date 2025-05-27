const Faq = () => {
    return (
        <div className="max-w-8xl mx-30 p-6 bg-white rounded-lg shadow-lg mb-20 mt-10">
            <div className="flex flex-col gap-lg-4">
            <section >
                <h2>O que é a plataforma gameficada?</h2>
                <p>
                    Nossa plataforma é um ambiente de aprendizado interativo que utiliza elementos de jogos, como pontos, conquistas e desafios, para motivar os alunos a aprender. Professores criam trilhas personalizadas para engajar os estudantes.
                </p>
            </section>

            <section>
                <h2>Como os professores criam trilhas?</h2>
                <p>
                    Os professores têm acesso a um painel exclusivo, onde podem criar módulos de aprendizado, adicionar atividades, vídeos, quizzes e configurar níveis de dificuldade. As trilhas podem ser adaptadas para diferentes objetivos e estilos de ensino.
                </p>
            </section>

            <section >
                <h2>Os alunos ganham recompensas?</h2>
                <p>
                    Sim! Os alunos ganham pontos ao completar atividades, podem desbloquear conquistas e avançar em um sistema de níveis. Isso os incentiva a continuar aprendendo enquanto se divertem.
                </p>
            </section>

            <section >
                <h2>Quais disciplinas podem ser ensinadas?</h2>
                <p>
                    A plataforma suporta qualquer disciplina! Professores podem criar trilhas em matemática, ciências, idiomas, história, entre outras. O conteúdo é totalmente personalizável.
                </p>
            </section>

            <section>
                <h2>É necessário pagar para usar a plataforma?</h2>
                <p>
                    A plataforma possui um plano gratuito com recursos básicos e planos premium que oferecem funcionalidades adicionais, como relatórios avançados, suporte prioritário e ferramentas de personalização.
                </p>
            </section>
        </div>
    </div>
            );
};
export default Faq;