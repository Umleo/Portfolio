import Titulo from '@/src/app/components/Titulo';
import BotaoFlutuante from '../../../components/BotaoFlutuante';

const paragrafosClass =
  'w-full wrap-break-word cursor-text rounded-2xl bg-neutral-900 p-4 text-sm leading-relaxed lg:p-6 lg:text-2xl';

export default function saudacoes_world() {
  return (
    <>
      <div className="flex min-h-screen lg:h-screen items-center justify-center">
        <section className="border border-gray-400 rounded-2xl flex w-full flex-col items-center justify-center gap-2 p-2 lg:m-10 lg:h-11/12 lg:flex-row-reverse lg:overflow-hidden">
          {/* titulo mobile */}
          <div id="titulo" className="p-2 lg:hidden">
            <Titulo site sxl title="Saudações World!" />
          </div>
          {/* projeto */}
          <div className="h-100 px-2 lg:h-10/12 lg:basis-1/2 lg:min-w-0">
            <iframe
              src="/projetos/javascript/saudacoesWorld/index.html"
              className="h-full min-w-full rounded-lg"
              title="Projeto Saudacoes"
            />
          </div>
          {/* link github mobile */}
          <a
            href="https://github.com/Umleo/mini-projetos/tree/main/saudacoesWorld"
            target="_blank"
            className="text-blue-600 m-3 underline lg:hidden"
          >
            {/* Este link cobre o iframe para capturar o clique e te levar ao site */}
            link para o repositório Github
          </a>

          {/* descrioções do projeto */}
          <div className="m-2 flex flex-col items-center justify-center gap-3 lg:h-full lg:basis-1/2 lg:min-w-0 lg:gap-4 lg:m-0">
            {/* titulo */}
            <div id="titulo" className="hidden lg:block p-2">
              <Titulo site title="Saudações World!" />
            </div>
            {/* minimal-scrollbar - definições no arquivo css */}
            <div className="minimal-scrollbar flex flex-col items-center overflow-y-auto lg:h-10/12 lg:w-full">
              <p className={paragrafosClass}>
                <b>📌 Sobre o projeto:</b>
                <br /> Este projeto consiste em uma simples aplicação que saúda
                o usuário em sua língua nativa com base no seu (IP). O
                desenvolvimento foi baseado no desafio{' '}
                <b>
                  <a
                    href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Hello-App.md"
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    Hello App
                  </a>
                </b>{' '}
                do repositório app-ideas no Github, seguindo as regras do
                exercício.
              </p>
              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <p className={paragrafosClass}>
                <b>📚 Objetivos Acadêmicos:</b>
                <br />O foco principal deste diretório foi colocar em prática
                conceitos fundamentais de desenvolvimento web:
                <br />- Consumo de APIs RESTful: Utilização da Fetch API para
                resgate de dados assíncronos.
                <br />- Manipulação do DOM: Atualização dinâmica da interface
                com JavaScript Puro (Vanilla JS).
                <br />- Tratamento de Dados: Utilização da decodificação de
                entidades HTML para tratar da mensagem Hello.
                <br />- Design Responsivo: Estruturação inicial utilizando as
                utilidades de layout do Bootstrap 5.
              </p>
              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <p className={paragrafosClass}>
                <b>🚧 Status do projeto:</b>
                <br />- Lógica de Programação: ✅ Finalizada.
                <br />- Integração com API: ✅ Finalizada.
                <br />- Design e UI/UX: 🔴 Em desenvolvimento (Refinando
                alinhamentos e experiência visual).
              </p>
              <hr className="my-4 w-4/5 border-2 border-white/60" />
              <p className={paragrafosClass}>
                <b>🛠️ Tecnologias Utilizadas:</b>
                <br />- HTML & CSS
                <br />- Bootstrap 5 (Componentes para css)
                <br />- JavaScript
                <br />- ip-api (Serviço de localização)
                <br />- Hello Salut API (Serviço de tradução)
              </p>
            </div>
            <a
              href="https://github.com/Umleo/Bendita"
              target="_blank"
              className="text-blue-600 m-3 underline hidden lg:block"
            >
              {/* Este link cobre o iframe para capturar o clique e te levar ao site */}
              link para o repositório Github
            </a>
          </div>
        </section>
      </div>
      <BotaoFlutuante />
    </>
  );
}
