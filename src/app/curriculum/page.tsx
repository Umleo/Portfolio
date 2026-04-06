'use client';

import Image from 'next/image';
import { useState } from 'react';
import ModalCertificado from './components/ModalCertificado';

export default function Curriculum() {
  const [certificadoModal, setCertificadoModal] = useState(false);
  const [certificadoName, setCertificadoName] = useState('');

  const handleClickCertificado = (name: string) => {
    setCertificadoName(name);
    setCertificadoModal(true);
  };

  return (
    <>
      {certificadoModal && (
        <ModalCertificado
          setModal={setCertificadoModal}
          name={certificadoName}
        />
      )}
      <section className="flex items-center justify-center p-3 text-white sm:p-6">
        <article className="flex w-full max-w-5xl flex-col rounded-xl bg-gray-800 minimal-scrollbar sm:rounded-2xl lg:w-1/2">
          {/* Cabeçalho: foto centralizada com nome sobreposto */}
          <section className="relative flex flex-col items-center justify-center bg-linear-to-b px-4 pb-8 pt-6 sm:pb-12 sm:pt-12">
            <div className="relative mb-5 flex w-full items-center justify-center sm:mb-6">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full text-sm shadow-[0_0_40px_rgba(255,255,255,0.1)] sm:h-48 sm:w-48">
                <Image
                  src="/foto.jpg"
                  alt="Leonardo Rafael Muller"
                  fill
                  className="rounded-full"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center">
                <h1 className="mb-2 w-full text-2xl font-bold [-webkit-text-stroke:1px_black] drop-shadow-lg sm:text-5xl">
                  Leonardo Rafael Muller
                </h1>
              </div>
            </div>
            <div className="mt-6 w-full max-w-3xl text-start sm:mt-8">
              <ul className="space-y-1 text-xs text-white/80 sm:text-sm">
                <li>• 20 anos</li>
                <li>• Curitiba, Paraná</li>
                <li>
                  • <span className="hidden sm:inline">Contato: </span>
                  (41) 99827-8012 | leorafael9974@gmail.com
                </li>
              </ul>
            </div>

            {/* Corpo principal*/}
            <main className="flex-1 w-full max-w-4xl space-y-4 overflow-x-hidden p-3 sm:space-y-6 sm:p-8">
              {/* Formação Acadêmica */}
              <section className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-5">
                <h2 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">
                  Formação Acadêmica
                </h2>
                <ul className="space-y-2 text-xs leading-relaxed text-white/90 sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit hidden sm:inline">
                      •
                    </span>
                    <span className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                      <strong>Unicesumar</strong> - Análise e Desenvolvimento de
                      Sistemas (Em andamento)
                    </span>
                  </li>
                </ul>
              </section>

              {/* Cursos Extracurriculares */}
              <section className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-5">
                <h2 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">
                  Cursos Extracurriculares:
                </h2>
                <ul className="space-y-2 text-xs leading-relaxed text-white/90 sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span
                      className="hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickCertificado(
                          'Curso Redes_ dos conceitos iniciais à criação de uma intranet - Alura'
                        );
                      }}
                    >
                      <strong>Alura</strong> -{' '}
                      <a>
                        Redes: Dos Conceitos iniciais à Criação de uma Intranet
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span
                      className="hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickCertificado(
                          'Linux_ gerenciando diretórios, arquivos, permissões e processos - Alura'
                        );
                      }}
                    >
                      <strong>Alura</strong> - Linux: Gerenciando Diretórios,
                      Arquivos, Permissões e Processos
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span
                      className="hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickCertificado(
                          'Curso Python_ aplicando a Orientação a Objetos - Alura'
                        );
                      }}
                    >
                      <strong>Alura</strong> - Python: Aplicando a Orientação a
                      Objetos
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span
                      className="hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickCertificado('Hashtag');
                      }}
                    >
                      <strong>Hashtag Treinamentos</strong> - Jornada Python
                    </span>
                  </li>
                </ul>
              </section>

              {/* Cursos Em Formação */}
              <section className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-5">
                <h2 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">
                  Cursos Em Formação:
                </h2>
                <ul className="space-y-2 text-sm leading-relaxed text-white/90 sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Vagner Fonseca</strong> - Formação Linux Admin Pro
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Augusto Galego</strong> - Estruturas de Dados e
                      Algoritmos
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>LinuxTips</strong> - Certificação Devops Base
                    </span>
                  </li>
                </ul>
              </section>

              <hr className="my-6 w-full border-2 border-white/60 sm:my-10" />

              {/* Habilidades / tecnologias principais */}
              <section className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-5">
                <h2 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">
                  Habilidades
                </h2>
                <ul className="space-y-2 text-sm leading-relaxed text-white/90 sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Hardware</strong> - montagem/desmontagem,
                      manutenção básica e diagnóstico
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Automações</strong> - Python e Shell Script (Bash)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Frontend</strong> - HTML, CSS, JavaScript,
                      TypeScript, integração com API RESTful
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Frameworks e Libs</strong> - Next.js, React,
                      Tailwind CSS
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Consumo e integração com APIs RESTful</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Banco de dados</strong> - SQL (bancos relacionais)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Redes</strong> - Administração de redes IPv4
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Ferramentas</strong> - Git, Postman, Excel
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white/60 min-w-fit">•</span>
                    <span>
                      <strong>Sistemas Operacionais</strong> - Linux e Windows
                    </span>
                  </li>
                </ul>
              </section>

              {/* Projetos */}
              <section className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-5">
                <h2 className="text-base font-semibold text-white sm:text-lg">
                  Objetivo
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white sm:mt-4 sm:text-base">
                  Adentrar uma empresa com oportunidades de crescimento, onde eu
                  possa aprimorar minhas habilidades e contribuir com dedicação
                  e vontade em projetos desafiadores, me desenvolvendo
                  continuamente como um profissional na área de tecnologia.
                </p>
              </section>
            </main>
          </section>
        </article>
      </section>
    </>
  );
}
