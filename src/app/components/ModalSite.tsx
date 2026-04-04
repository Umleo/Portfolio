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
        <section className="flex h-full w-full text-white p-8">
          <div className="flex-1 flex flex-col gap-4">
            <div id="titulo" className="flex justify-center">
              <Titulo site={true} title="Projeto Bendita" />
            </div>
            {/* minimal-scrollbar - definições no arquivo css */}
            <div className="flex flex-col items-center minimal-scrollbar overflow-auto">
              <p className="text-2xl p-6 rounded-2xl cursor-text bg-neutral-900 max-w-190">
                <b>📌 Sobre o projeto:</b>
                <br /> Este projeto tem como objetivo simular o funcionamento de
                uma loja de pedidos, utilizando como exemplo um restaurante
                fictício chamado Bendita. Com foco em dispositivos mobile, na
                aplicação, o usuário pode navegar pela página inicial,
                visualizar os produtos disponíveis e, ao selecionar um item,
                personalizá-lo conforme as opções definidas (como adicionais ou
                variações). Além da experiência do cliente, o sistema conta com
                uma área administrativa onde é possível gerenciar os pedidos
                realizados, incluindo atualização de status (como preparo, envio
                e entrega), controle de funcionamento da loja (aberto/fechado) e
                disponibilidade e gerenciamento dos produtos.
                <br />
              </p>
              <hr className="border-white/60 border-2 w-4/5 my-4" />
              <p className="text-2xl p-6 rounded-2xl cursor-text bg-neutral-900 max-w-190 min-w-190">
                <b>🛠 Tecnologias utilizadas:</b>
                <br />* Next.js (frontend e backend)
                <br />* Tailwind CSS
                <br />* PostgreSQL
                <br />* Prisma ORM
                <br />* Better Auth (autenticação)
              </p>
              <hr className="border-white/60 border-2 w-4/5 my-4" />
              <p className="text-2xl p-6 rounded-2xl cursor-text bg-neutral-900 max-w-190 min-w-190">
                <b>☁️ Infraestrutura:</b>
                <br />* Infraestrutura Deploy: Vercel
                <br />* Banco de dados: NeonDB
              </p>
              <hr className="border-white/60 border-2 w-4/5 my-4" />
              <p className="text-2xl p-6 rounded-2xl cursor-text bg-neutral-900 max-w-190">
                <b>🚧 Status do projeto:</b>
                <br />
                * Interface da página inicial <br />
                * Lógica de criação de pedidos
                <br /> * Sistema de autenticação <br />
                * Registro de endereços <br />O projeto segue em
                desenvolvimento, com foco na evolução do painel administrativo e
                melhorias na experiência do usuário.
              </p>
              <hr className="border-white/60 border-2 w-4/5 my-4" />
              <p className="text-2xl p-6 rounded-2xl cursor-text bg-neutral-900 max-w-190">
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

          <div className="flex-1 flex flex-col gap-4 justify-center items-center">
            {desenvolvimento && (
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-md 'border-amber-300/60 bg-amber-400/15 text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.22)]'`}
              >
                <span>🚧 Em desenvolvimento</span>
              </div>
            )}
            <div className="w-120 h-170 relative overflow-hidden rounded-2xl bg-gray-800">
              <iframe
                src="https://bendita.vercel.app/"
                className="w-full h-full rounded-2xl cursor-pointer"
                title="Projeto Bendita"
                loading="lazy"
              />
              {/* Overlay para permitir o clique de redirecionamento */}
            </div>
            <a
              href="https://bendita.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
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
