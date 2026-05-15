'use client';

import Titulo from '@/src/app/components/Titulo';
import BotaoFlutuante from '../../../components/BotaoFlutuante';
import { useState } from 'react';

const paragrafosClass =
  'w-full wrap-break-word cursor-text rounded-2xl bg-neutral-900 p-4 text-sm leading-relaxed lg:p-6 lg:text-2xl';

export default function Status_server() {
  const [anima, setAnima] = useState(false);
  const titulo = 'Log-Archive';
  const link_github =
    'https://github.com/Umleo/mini-projetos/tree/main/log-archive';
  const home = '/projetos/linux';

  return (
    <>
      <div className="flex min-h-screen lg:h-screen items-center justify-center ">
        <section className="border border-gray-400 rounded-2xl flex w-full flex-col items-center justify-center gap-2 p-2 lg:m-10 lg:h-11/12 lg:flex-row-reverse lg:overflow-hidden">
          {/* titulo mobile */}
          <div id="titulo" className="p-2 lg:hidden">
            <Titulo site sxl title={titulo} />
          </div>
          {/* projeto */}
          <div className="hidden sm:flex items-center justify-center p-2 lg:h-10/12 lg:basis-1/2">
            <a
              href="/arquivos/logArchive.sh"
              download
              aria-label="Baixar script Log-Archive"
              onMouseEnter={() => setAnima(true)}
              onMouseLeave={() => setAnima(false)}
              className={`flex items-center justify-center gap-3 px-16 py-8 rounded-xl bg-neutral-900 border border-white/20 text-white text-3xl font-semibold shadow-sm hover:bg-neutral-800 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20 transition-transform`}
            >
              <div className={`${anima ? 'animate-bounce' : ''}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-8 h-8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0l4-4M12 15l-4-4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21H3"
                  />
                </svg>
              </div>
              Baixar Shell
            </a>
          </div>

          {/* link github mobile */}
          <a
            href={link_github}
            target="_blank"
            className="text-blue-600 m-3 underline lg:hidden"
          >
            link para o repositório Github
          </a>

          {/* descrições do projeto */}
          <div className="m-2 flex flex-col items-center justify-center gap-3 lg:h-full lg:basis-1/2 lg:min-w-0 lg:gap-4 lg:m-0">
            {/* titulo desktop*/}
            <div id="titulo" className="hidden lg:block p-2">
              <Titulo site title={titulo} />
            </div>
            {/* minimal-scrollbar - definições no arquivo css */}
            <div className="minimal-scrollbar flex flex-col items-center overflow-y-auto lg:h-10/12 lg:w-full">
              <p className={paragrafosClass}>
                <b>📌 Sobre o projeto:</b>
                <br /> Este projeto é um script simples desenvolvido em Shell
                Script (bash) para compactação de diretórios no formato .tar.gz
                <br />O script permite compactar diretórios de forma rápida e
                prática, gerando arquivos compactados que facilitam
                armazenamento, backup e compartilhamento de arquivos.
                <br /> Este é um exercício baseado no <b>
                  DevOps Projects
                </b>{' '}
                <b>
                  <a
                    href="https://roadmap.sh/projects/log-archive-tool"
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    (roadmap.sh)
                  </a>
                  .
                </b>
              </p>
              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <p className={paragrafosClass}>
                <b>📚 Objetivos Acadêmicos:</b>
                <br />O objetivo principal é praticar manipulação de argumentos
                via terminal e comandos como tar e gzip.
              </p>
            </div>
            <a
              href={link_github}
              target="_blank"
              className="text-blue-600 m-3 underline hidden lg:block"
            >
              link para o repositório Github
            </a>
          </div>
        </section>
      </div>
      <BotaoFlutuante home={home} />
    </>
  );
}
