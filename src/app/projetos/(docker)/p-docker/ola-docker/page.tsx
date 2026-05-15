import Titulo from '@/src/app/components/Titulo';
import BotaoFlutuante from '../../../components/BotaoFlutuante';
import Image from 'next/image';

export default function DockerNginx() {
  const paragrafosClass =
    'w-full wrap-break-word cursor-text rounded-2xl bg-neutral-900 p-4 text-sm leading-relaxed lg:p-6 lg:text-2xl';
  const titulo = 'Olá Docker!';
  const link_github =
    'https://github.com/Umleo/mini-projetos/tree/main/OlaDockerfile';
  const home = '/';

  return (
    <>
      <div className="flex min-h-screen lg:h-screen items-center justify-center">
        <section className="border border-gray-400 rounded-2xl flex w-full flex-col items-center justify-center gap-2 p-2 lg:m-10 lg:h-11/12 lg:flex-row-reverse lg:overflow-hidden">
          {/* titulo mobile */}
          <div id="titulo" className="p-2 lg:hidden">
            <Titulo site sxl title={titulo} />
          </div>
          {/* projeto */}
          <div className="flex items-center px-2 lg:h-10/12 lg:basis-1/2">
            <iframe
              src="/projetos/p-docker/oladocker/index.html"
              className="hidden lg:flex h-full min-w-full rounded-lg"
              title="Projeto Saudacoes"
            />
            <Image
              className="flex lg:hidden rounded-2xl cursor-pointer sm:h-100 w-full"
              src="/projetos/p-docker/oladocker/img-capa.png"
              alt="Logo do projeto"
              height={800}
              width={800}
            />
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
                <br /> Este projeto consiste na criação de uma imagem Docker
                personalizada baseada em nginx:alpine. O objetivo é servir uma
                página estática simples que exibe uma mensagem de boas-vindas
                personalizada, utilizando variáveis de ambiente para injetar
                dados no container durante a execução.
                <br />
                Este é um exercício baseado no <b>DevOps Projects</b>{' '}
                <b>
                  <a
                    href="https://roadmap.sh/projects/basic-dockerfile"
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    (roadmap.sh)
                  </a>
                </b>
                .
              </p>
              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <p className={paragrafosClass}>
                <b>📚 Objetivos Acadêmicos:</b>
                <br />
                • Criação de imagem funcional com docker
                <br />• Trabalhar com variáveis em docker
              </p>
            </div>
            <a
              href={link_github}
              target="_blank"
              className="text-blue-600 m-3 underline hidden lg:block"
            >
              {/* Este link cobre o iframe para capturar o clique e te levar ao site */}
              link para o repositório Github
            </a>
          </div>
        </section>
      </div>
      <BotaoFlutuante home={home} />
    </>
  );
}
