'use client';

import Titulo from './Titulo';
import { useSiteTitle } from '../store/siteModal';
import Image from 'next/image';
import { useState } from 'react';

type ModalSiteProps = {
  desenvolvimento?: boolean;
};

export default function ModalSite({ desenvolvimento = false }: ModalSiteProps) {
  const { title, dev } = useSiteTitle();

  // showmore para mobile
  const [sobre, setSobre] = useState(false);
  const [tecnologias, setTecnologias] = useState(false);
  const [status, setStatus] = useState(false);
  const [infra, setInfra] = useState(false);
  const [aprendizado, setAprendizado] = useState(false);

  return (
    <>
      {title === 'Bendita' && (
        <section className="flex h-full w-full flex-col gap-4 overflow-y-auto p-3 text-white sm:p-6 lg:flex-row lg:gap-6 lg:p-8">
          <div className="flex flex-col gap-3 lg:flex-1 lg:gap-4">
            <div id="titulo" className="flex justify-center">
              <Titulo site={true} title="Projeto Bendita" />
            </div>
            {/* minimal-scrollbar - definições no arquivo css */}
            <div className="minimal-scrollbar flex flex-col items-center overflow-y-auto overflow-x-hidden">
              <div className="rounded-2xl bg-neutral-900 flex flex-col w-full">
                <p
                  className={`${sobre ? 'max-h-full' : 'max-h-40'} max-h-40 sm:max-h-full overflow-hidden cursor-text  p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl`}
                >
                  <b>📌 Sobre o projeto:</b>
                  <br /> Este projeto tem como objetivo simular o funcionamento
                  de uma loja de pedidos, utilizando como exemplo um restaurante
                  fictício chamado Bendita. Com foco em dispositivos mobile, o
                  usuário pode navegar pela página inicial, visualizar os
                  produtos disponíveis e, ao selecionar um item (Monte sua
                  salada!), personalizá-lo conforme as opções definidas. Além da
                  experiência do cliente, o sistema irá contar com uma área
                  administrativa onde é possível gerenciar os pedidos
                  realizados, incluindo atualização de status (como preparo,
                  envio e entrega), controle de funcionamento da loja
                  (aberto/fechado) e disponibilidade e gerenciamento dos
                  produtos.
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
                  className={`max-h-40 sm:max-h-full overflow-hidden cursor-text  p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl`}
                >
                  <b>🛠 Tecnologias utilizadas:</b>
                  <br />* Next.js (frontend e backend)
                  <br />* Tailwind CSS
                  <br />* PostgreSQL / Prisma ORM
                  <br />* Better Auth (autenticação)
                </p>
              </div>

              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <div className="rounded-2xl bg-neutral-900 flex flex-col w-full">
                <p
                  className={`max-h-40 sm:max-h-full overflow-hidden cursor-text  p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl`}
                >
                  {' '}
                  <b>☁️ Infraestrutura:</b>
                  <br />* Deploy: Vercel
                  <br />* Banco de dados: NeonDB
                </p>
              </div>

              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <div className="rounded-2xl bg-neutral-900 flex flex-col w-full">
                <p
                  className={`${status ? 'max-h-full' : 'max-h-40'} max-h-40 sm:max-h-full overflow-hidden cursor-text  p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl`}
                >
                  {' '}
                  <b>🚧 Status do projeto:</b>
                  <br />
                  * Interface da página inicial <br />
                  * Lógica de criação de pedidos
                  <br /> * Sistema de autenticação <br />
                  * Registro de endereços <br />O projeto segue em
                  desenvolvimento, com foco na evolução do painel administrativo
                  e melhorias na experiência do usuário.
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
                  Este é meu primeiro projeto fullstack, desenvolvido com o
                  objetivo de consolidar e integrar conhecimentos em
                  desenvolvimento web. Durante sua construção, venho trabalhando
                  na implementação de boas práticas, organização de código e
                  integração entre frontend, backend e banco de dados.
                </p>
                <button
                  type="button"
                  onClick={() => setAprendizado(!aprendizado)}
                  className="m-2 text-sm font-semibold text-blue-300 sm:hidden"
                >
                  {aprendizado ? 'Mostrar menos' : 'Ver mais'}
                </button>
              </div>
              <a
                href="https://github.com/Umleo/Bendita"
                target="_blank"
                className="text-blue-600 mt-3 underline"
              >
                {/* Este link cobre o iframe para capturar o clique e te levar ao site */}
                link para o repositório Github
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 lg:flex-1">
            {dev && (
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-md 'border-amber-300/60 bg-amber-400/15 text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.22)]'`}
              >
                <span>🚧 Em desenvolvimento</span>
              </div>
            )}
            <div className="relative h-50 w-full max-w-md overflow-hidden rounded-2xl bg-gray-800 sm:h-112 lg:h-170 lg:w-120">
              <iframe
                src="https://bendita.vercel.app/"
                className="hidden w-full h-full rounded-2xl cursor-pointer sm:block"
                title="Projeto Bendita"
                loading="lazy"
              />
              <Image
                src={'/bendita.png'}
                alt="Imagem do site"
                height={288}
                width={480}
                className="rounded-3xl h-full w-full object-cover cursor-pointer sm:hidden"
              />
              {/* Overlay para permitir o clique de redirecionamento */}
              <a
                href="https://bendita.vercel.app/"
                target="_blank"
                className="absolute inset-0 sm:hidden"
              />
            </div>
            <a
              href="https://bendita.vercel.app/"
              target="_blank"
              className="text-blue-600 hidden underline text-xs sm:text-base sm:block"
            >
              {/* Este link cobre o iframe para capturar o clique e te levar ao site */}
              https://bendita.onlinemuller.codes/
            </a>
          </div>
        </section>
      )}
      {title === 'NFE Manager' && (
        <section className="flex h-full w-full flex-col gap-4 overflow-y-auto p-3 text-white sm:p-6 lg:flex-row lg:gap-6 lg:p-8">
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
                  <br /> O NFe Manager pode armazenar informações de Notas
                  Fiscais Eletrônicas (NF-e), possuindo métodos de consulta
                  práticos. O sistema permite a importação de dados diretamente
                  de arquivos XML, armazenamento local em SQLite e uma interface
                  web para consulta das notas e seus respectivos itens.
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
                  * GUI de Importação: um utilitário Python para ler XMLs e
                  gravar no banco.
                  <br />* API REST: backend em FastAPI que serve os dados do
                  banco.
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
                  * Python & Dados: Extração de dados através de arquivos XML.
                  <br />
                  * Criação de interface gráfica para consumir arquivos. <br />*
                  Full Stack & APIs - <br />
                  &emsp;FastAPI: Criação de rotas RESTful. <br />
                  &emsp;React: Consumo de APIs. <br />
                  * Containerização e Orquestração- <br />
                  &emsp;Isolamento de Frontend (Nginx) e Backend. <br />
                  &emsp;Uso de Docker Compose para comunicação.
                </p>
                <button
                  type="button"
                  onClick={() => setAprendizado(!aprendizado)}
                  className="m-2 text-sm font-semibold text-blue-300 sm:hidden"
                >
                  {aprendizado ? 'Mostrar menos' : 'Ver mais'}
                </button>
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

          <div className="flex h-full flex-col gap-4 lg:flex-1 lg:overflow-hidden lg:overflow-y-auto lg:minimal-scrollbar">
            {desenvolvimento ? (
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-md 'border-amber-300/60 bg-amber-400/15 text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.22)]'`}
              >
                <span>🚧 Em desenvolvimento</span>
              </div>
            ) : null}
            <div className={`text-center lg:hidden`}>
              <h3>Mais informações no Github</h3>
            </div>
            <div className="max-h-112 h-60 w-full gap-4 hidden lg:block">
              <div className="m-2">
                <Image
                  src={'/projetos/nfe-manager/nfe(10).png'}
                  alt="Imagem do site"
                  height={288}
                  width={480}
                  className="rounded-3xl h-full w-full object-cover cursor-pointer hidden lg:block"
                />
              </div>
              <div className="m-2">
                <Image
                  src={'/projetos/nfe-manager/nre(14).png'}
                  alt="Imagem do site"
                  height={288}
                  width={480}
                  className="rounded-3xl h-full w-full object-cover cursor-pointer hidden lg:block"
                />
              </div>
              <div className="m-2">
                <Image
                  src={'/projetos/nfe-manager/nfe(11).png'}
                  alt="Imagem do site"
                  height={288}
                  width={480}
                  className="rounded-3xl h-full w-full object-cover cursor-pointer hidden lg:block"
                />
              </div>
              <div className="m-2">
                <Image
                  src={'/projetos/nfe-manager/nfe(15).png'}
                  alt="Imagem do site"
                  height={288}
                  width={480}
                  className="rounded-3xl h-full w-full object-cover cursor-pointer hidden lg:block"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
