'use client';

import Titulo from './Titulo';
import { useSiteTitle } from '../store/siteModal';

type ModalSiteProps = {
  desenvolvimento?: boolean;
};

export default function ModalSite({ desenvolvimento = false }: ModalSiteProps) {
  const { title } = useSiteTitle();

  return (
    <>
      {title === 'Bendita' && (
        <section className="flex h-full w-full flex-col gap-4 overflow-y-auto p-3 text-white sm:p-6 lg:flex-row lg:gap-6 lg:p-8">
          <div className="flex flex-col gap-3 lg:flex-1 lg:gap-4">
            <div id="titulo" className="flex justify-center">
              <Titulo site={true} title="Projeto Bendita" />
            </div>
            {/* minimal-scrollbar - definições no arquivo css */}
            <div className="minimal-scrollbar flex flex-col items-center overflow-auto">
              <p className="w-full max-w-full cursor-text rounded-2xl bg-neutral-900 p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl">
                <b>📌 Sobre o projeto:</b>
                <br /> Este projeto tem como objetivo simular o funcionamento de
                uma loja de pedidos, utilizando como exemplo um restaurante
                fictício chamado Bendita. Com foco em dispositivos mobile, o
                usuário pode navegar pela página inicial, visualizar os produtos
                disponíveis e, ao selecionar um item (Monte sua salada!),
                personalizá-lo conforme as opções definidas. Além da experiência
                do cliente, o sistema irá contar com uma área administrativa
                onde é possível gerenciar os pedidos realizados, incluindo
                atualização de status (como preparo, envio e entrega), controle
                de funcionamento da loja (aberto/fechado) e disponibilidade e
                gerenciamento dos produtos.
                <br />
              </p>
              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <p className="w-full max-w-full cursor-text rounded-2xl bg-neutral-900 p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:min-w-190 lg:text-2xl">
                <b>🛠 Tecnologias utilizadas:</b>
                <br />* Next.js (frontend e backend)
                <br />* Tailwind CSS
                <br />* PostgreSQL / Prisma ORM
                <br />* Better Auth (autenticação)
              </p>
              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <p className="w-full max-w-full cursor-text rounded-2xl bg-neutral-900 p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:min-w-190 lg:text-2xl">
                <b>☁️ Infraestrutura:</b>
                <br />* Deploy: Vercel
                <br />* Banco de dados: NeonDB
              </p>
              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <p className="w-full max-w-full cursor-text rounded-2xl bg-neutral-900 p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl">
                <b>🚧 Status do projeto:</b>
                <br />
                * Interface da página inicial <br />
                * Lógica de criação de pedidos
                <br /> * Sistema de autenticação <br />
                * Registro de endereços <br />O projeto segue em
                desenvolvimento, com foco na evolução do painel administrativo e
                melhorias na experiência do usuário.
              </p>
              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <p className="w-full max-w-full cursor-text rounded-2xl bg-neutral-900 p-4 text-sm leading-relaxed sm:p-6 sm:text-lg lg:max-w-190 lg:text-2xl">
                <b>📚 Aprendizados:</b>
                <br />
                Este é meu primeiro projeto fullstack, desenvolvido com o
                objetivo de consolidar e integrar conhecimentos em
                desenvolvimento web. Durante sua construção, venho trabalhando
                na implementação de boas práticas, organização de código e
                integração entre frontend, backend e banco de dados.
              </p>
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
            {desenvolvimento && (
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-md 'border-amber-300/60 bg-amber-400/15 text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.22)]'`}
              >
                <span>🚧 Em desenvolvimento</span>
              </div>
            )}
            <div className="relative h-50 w-full max-w-md overflow-hidden rounded-2xl bg-gray-800 sm:h-112 lg:h-170 lg:w-120">
              <iframe
                src="https://bendita.vercel.app/"
                className="w-full h-full rounded-2xl cursor-pointer"
                title="Projeto Bendita"
                loading="lazy"
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
    </>
  );
}
