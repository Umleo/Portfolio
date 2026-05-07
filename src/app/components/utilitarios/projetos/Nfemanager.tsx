'use client';

import Image from 'next/image';
import Titulo from '../../Titulo';
import { useState } from 'react';
import { useSiteTitle } from '@/src/app/store/siteModal';

export default function Nfemanager() {
  const { title, dev } = useSiteTitle();

  // showmore para mobile
  const [sobre, setSobre] = useState(false);
  const [tecnologias, setTecnologias] = useState(false);
  const [status, setStatus] = useState(false);
  const [infra, setInfra] = useState(false);
  const [aprendizado, setAprendizado] = useState(false);

  return (
    <section className="flex h-full w-full flex-col gap-4 overflow-y-auto p-3 text-white sm:p-3 lg:flex-row lg:gap-6 lg:p-4 minimal-scrollbar">
      <div className="flex flex-col gap-3 lg:flex-1 lg:gap-4">
        <div id="titulo" className="flex justify-center">
          <Titulo site={true} title="NFE Manager" />
        </div>
        {/* minimal-scrollbar - definições no arquivo css */}
        <div className="minimal-scrollbar flex flex-col items-center overflow-y-auto overflow-x-hidden">
          <div className="rounded-2xl bg-neutral-900 flex flex-col w-full">
            <p
              className={`${sobre ? 'max-h-full' : 'max-h-40'} max-h-40 sm:max-h-full overflow-hidden cursor-text  p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl`}
            >
              <b>📌 Sobre o projeto:</b>
              <br /> O NFe Manager pode armazenar informações de Notas Fiscais
              Eletrônicas (NF-e), possuindo métodos de consulta práticos. O
              sistema permite a importação de dados diretamente de arquivos XML,
              armazenamento local em SQLite e uma interface web para consulta
              das notas e seus respectivos itens.
              <br />
            </p>
            <button
              type="button"
              onClick={() => setSobre(!sobre)}
              className="m-2 text-sm font-semibold text-blue-300 sm:hidden"
            >
              {sobre ? 'Mostrar menos' : 'Ver mais'}
            </button>
          </div>

          <hr className="my-4 w-4/5 border-2 border-white/60" />
          <div className="rounded-2xl bg-neutral-900 flex flex-col w-full">
            <p
              className={`${tecnologias ? 'max-h-full' : 'max-h-40'} sm:max-h-full overflow-hidden cursor-text  p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl`}
            >
              <b>🛠 Tecnologias utilizadas:</b>
              <br />* Frontend: React.js, TypeScript e Tailwind CSS.
              <br />* Backend: FastAPI (Python).
              <br />* Banco de Dados: SQLite.
              <br />* Containerização: Docker e Nginx.
              <br />* Script Python com interface gráfica (Tkinter/GUI).
            </p>
            <button
              type="button"
              onClick={() => setTecnologias(!tecnologias)}
              className="m-2 text-sm font-semibold text-blue-300 sm:hidden"
            >
              {tecnologias ? 'Mostrar menos' : 'Ver mais'}
            </button>
          </div>

          <hr className="my-4 w-4/5 border-2 border-white/60" />
          <div className="rounded-2xl bg-neutral-900 flex flex-col w-full">
            <p
              className={`${status ? 'max-h-full' : 'max-h-40'} sm:max-h-full overflow-hidden cursor-text  p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl`}
            >
              <b>🔩 Estrutura do Projeto:</b>
              <br />O projeto é dividido em três componentes principais:
              <br />
              * GUI de Importação: um utilitário Python para ler XMLs e gravar
              no banco.
              <br />* API REST: backend em FastAPI que serve os dados do banco.
              <br />* Web Interface: frontend em React que consome a API
            </p>
            <button
              type="button"
              onClick={() => setStatus(!status)}
              className="m-2 text-sm font-semibold text-blue-300 sm:hidden"
            >
              {status ? 'Mostrar menos' : 'Ver mais'}
            </button>
          </div>

          <hr className="my-4 w-4/5 border-2 border-white/60" />
          <div className="rounded-2xl bg-neutral-900 flex flex-col w-full">
            <p
              className={`${aprendizado ? 'max-h-full' : 'max-h-40'} max-h-40 sm:max-h-full overflow-hidden cursor-text  p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl`}
            >
              <b>📚 Aprendizados:</b>
              <br />
              * Python & Dados: extração de dados através de arquivos XML.
              <br />
              * Criação de interface gráfica para consumir arquivos. <br />*
              API: criação de rotas RESTful. <br />
              * Containerização e Orquestração - <br />
              &emsp;Criação de imagens do frontend e backend em docker.
              <br />
              &emsp;Uso de Docker Compose para orquestração das imagens.
            </p>
            <button
              type="button"
              onClick={() => setAprendizado(!aprendizado)}
              className="m-2 text-sm font-semibold text-blue-300 sm:hidden"
            >
              {aprendizado ? 'Mostrar menos' : 'Ver mais'}
            </button>
          </div>

          <hr className="my-4 w-4/5 border-2 border-white/60" />
          <div className="rounded-2xl bg-neutral-900 flex flex-col w-full">
            <p
              className={` max-h-40 sm:max-h-full overflow-hidden cursor-text  p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl`}
            >
              Mais informações no repositório Github.
            </p>
          </div>
          <a
            href="https://github.com/Umleo/nfe-manager"
            target="_blank"
            className="text-blue-600 mt-3 underline"
          >
            {/* Este link cobre o iframe para capturar o clique e te levar ao site */}
            link para o repositório Github
          </a>
        </div>
      </div>

      <div className="flex h-full flex-col gap-4 lg:flex-1 lg:overflow-hidden lg:overflow-y-auto minimal-scrollbar">
        {dev ? (
          <div className={`flex w-full items-center justify-center`}>
            <span className="flex max-w-50 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-md 'border-amber-300/60 bg-amber-400/15 text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.22)]'">
              🚧 Em desenvolvimento
            </span>
          </div>
        ) : null}
        <div className="max-h-112 h-60 w-full gap-4 hidden lg:block">
          <div className="my-4">
            <Image
              src={'/projetos/nfe-manager/nfe(10).png'}
              alt="Imagem do site"
              height={288}
              width={480}
              className="rounded-3xl h-full w-full object-cover cursor-pointer hidden lg:block"
            />
          </div>
          <div className="my-4">
            <Image
              src={'/projetos/nfe-manager/nre(14).png'}
              alt="Imagem do site"
              height={288}
              width={480}
              className="rounded-3xl h-full w-full object-cover cursor-pointer hidden lg:block"
            />
          </div>
          <div className="my-4">
            <Image
              src={'/projetos/nfe-manager/nfe(11).png'}
              alt="Imagem do site"
              height={288}
              width={480}
              className="rounded-3xl h-full w-full object-cover cursor-pointer hidden lg:block"
            />
          </div>
          <div className="my-4">
            <Image
              src={'/projetos/nfe-manager/nfe(15).png'}
              alt="Imagem do site"
              height={288}
              width={480}
              className="rounded-3xl h-full w-full object-cover cursor-pointer hidden lg:block"
            />
          </div>
          <div className="my-4">
            <Image
              src={'/projetos/nfe-manager/guipy.png'}
              alt="Imagem do site"
              height={288}
              width={480}
              className="rounded-3xl h-full w-full object-cover cursor-pointer hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
