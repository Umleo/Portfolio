import Image from 'next/image';

export default function curriculum() {
  return (
    <section className="flex min-h-screen items-center justify-center p-6 text-white">
      <article className="flex h-[calc(100vh-3rem)] w-1/2 max-w-310 flex-col overflow-hidden rounded-2xl bg-gray-800 overflow-y-auto minimal-scrollbar">
        {/* Cabeçalho: foto centralizada com nome sobreposto */}
        <section className="relative flex flex-col items-center justify-center bg-linear-to-b pb-12 pt-12 ">
          <div className="relative flex tems-center justify-center mb-6 w-full">
            <div className="h-48 w-48 rounded-full flex i text-sm items-center justify-center relative shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <Image
                src="/foto.jpg"
                alt="Leonardo Rafael Muller"
                fill
                className="rounded-full"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center">
              <h1 className="text-4xl font-bold mb-2 [-webkit-text-stroke:1px_black] drop-shadow-lg">
                Leonardo Rafael Muller
              </h1>
            </div>
          </div>
          <div className="mt-8 text-start">
            <ul className="text-sm text-white/80 space-y-1">
              <li>• 20 anos</li>
              <li>• Curitiba, Paraná</li>
              <li>• Contato: (41) 99827-8012 | leorafael9974@gmail.com</li>
            </ul>
          </div>

          {/* Corpo principal*/}
          <main className="flex-1  overflow-x-hidden p-8 space-y-6 max-w-175">
            {/* Formação Acadêmica */}
            <section className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="mb-4 text-lg font-semibold text-white">
                Formação Acadêmica
              </h2>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Unicesumar</strong> - Análise e Desenvolvimento de
                    Sistemas (Em andamento)
                  </span>
                </li>
              </ul>
            </section>

            {/* Cursos Extracurriculares */}
            <section className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="mb-4 text-lg font-semibold text-white">
                Cursos Extracurriculares:
              </h2>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Alura</strong> - Redes: Dos Conceitos iniciais à
                    Criação de uma Intranet
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Alura</strong> - Linux: Gerenciando Diretórios,
                    Arquivos, Permissões e Processos
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Alura</strong> - Python: Aplicando a Orientação a
                    Objetos
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Hashtag Treinamentos</strong> - Jornada Python
                  </span>
                </li>
              </ul>
            </section>

            {/* Cursos Em Formação */}
            <section className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="mb-4 text-lg font-semibold text-white">
                Cursos Em Formação:
              </h2>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Vagner Fonseca</strong> - Formação Linux Admin Pro
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Augusto Galego</strong> - Estruturas de Dados e
                    Algoritmos
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>LinuxTips</strong> - Certificação Devops Base
                  </span>
                </li>
              </ul>
            </section>

            <hr className="border-white/60 border-2 w-full my-10" />

            {/* Habilidades / tecnologias principais */}
            <section className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-lg font-semibold text-white mb-4">
                Habilidades
              </h2>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Hardware</strong> - montagem/desmontagem, manutenção
                    básica e diagnóstico
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Automações</strong> - Python e Shell Script (Bash)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Frontend</strong> - HTML, CSS, JavaScript,
                    TypeScript, integração com API RESTful
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Frameworks e Libs</strong> - Next.js, React,
                    Tailwind CSS
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Consumo e integração com APIs RESTful</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Banco de dados</strong> - SQL (bancos relacionais)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Redes</strong> - Administração de redes IPv4
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Ferramentas</strong> - Git, Postman, Excel
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 min-w-fit">•</span>
                  <span>
                    <strong>Sistemas Operacionais</strong> - Linux e Windows
                  </span>
                </li>
              </ul>
            </section>

            {/* Projetos */}
            <section className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-lg font-semibold text-white">Objetivo</h2>
              <p className="text-sm text-white mt-4">
                Adentrar uma empresa com oportunidades de crescimento, onde eu
                possa aprimorar minhas habilidades e contribuir com dedicação e
                vontade em projetos desafiadores, me desenvolvendo continuamente
                como um profissional na área de tecnologia.
              </p>
            </section>
          </main>
        </section>
      </article>
    </section>
  );
}
