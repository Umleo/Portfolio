'use client';

import { useState } from 'react';
import Site from './components/Site';
import Titulo from './components/Titulo';
import ModalSite from './components/ModalSite';

export default function Home() {
  const [modal, setModal] = useState(false);
  const [showMoreIntro, setShowMoreIntro] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full text-white">
        <section className="h-20 flex flex-col justify-center items-center my-20">
          <Titulo />
        </section>

        {/* projetos em destaque */}
        <section className="flex flex-col justify-center items-center w-full p-2 gap-6 [&>*:nth-child(n+3)]:hidden sm:p-0 sm:flex-row sm:flex-wrap sm:[&>*:nth-child(n+3)]:block">
          <Site setModal={setModal} title={'Bendita'} image="/bendita.png" />
        </section>
        <hr className="border-neutral-600 border-2 w-3/5 sm:w-2/5 my-10" />
      </div>

      {/* modal com infos sobre o projeto */}
      {modal && (
        <>
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-black/60 backdrop-blur-xs">
            <button
              onClick={() => setModal(false)}
              className="self-end mr-[10%] cursor-pointer rounded-full border border-red-400/40 bg-red-500/15 px-5 py-2 text-sm font-medium text-red-100 shadow-[0_0_18px_rgba(239,68,68,0.20)] transition-all duration-300 hover:scale-105 hover:bg-red-500/25 hover:border-red-300/60 focus:outline-none focus:ring-2 focus:ring-red-300/50"
            >
              {/* Botão para fechar o modal, se necessário */}X
            </button>

            <div className="h-4/5 w-4/5 border-2 border-white rounded-2xl bg-black">
              <ModalSite desenvolvimento={true} />
            </div>
          </div>
        </>
      )}

      <section className="flex justify-center items-center mb-10 sm:mb-20 sm:px-4">
        <div className="sm:w-3/4 w-full m-2 h-auto overflow-hidden bg-neutral-900 rounded-3xl border border-transparent shadow-[0_0_24px_rgba(255,255,255,0.10)] p-4 sm:p-8 transform transition-all duration-300 ease-out hover:scale-105 hover:border-white/30 ">
          <h2 className="text-white text-center sm:text-start font-bold mb-4 text-3xl">
            Eu aqui!!!
          </h2>
          {/* <p className="text-white text-lg opacity-90"> */}
          <div
            className={`${showMoreIntro ? 'max-h-full' : 'max-h-50'} overflow-hidden sm:max-h-none`}
          >
            <p className="text-white w-full text-xs leading-relaxed sm:text-base">
              &emsp;Olá!! Este é o meu portfólio, onde vou contar um pouco mais
              sobre mim, e ao navegar pelo site, você pode checar todos os meus
              projetos pessoais e casos de estudo.
              <br />
              <br />
              &emsp;Sou um apaixonado estudante de tecnologia e em busca de me
              profissionalizar cada vez mais, criei meu portfólio com o objetivo
              de demonstrar meu conhecimento nas mais variadas tecnologias
              através de projetos reais. Amo aprender e enfrentar desafios, me
              considero uma pessoa autodidata e por isso acredito que nasci para
              a T.I. Para saber mais sobre mim, pode checar meu curriculo
              abrindo o menu no canto superior direito, lá tem um link para meu
              currículo completo e também para minhas redes sociais.
              <br />
              <br />
              &emsp;Recomendo começar dando uma olhada nos projetos em destaque
              . Cada projeto e caso de estudo está longamente comentado sobre a
              stack usada, motivo para existir e o que eu mais aprendi durante
              sua criação, alguns projetos ainda podem estar em desenvolvimento,
              estes estarão com uma tag sinalizando. O código de cada um estará
              disponivel no Github e o link de seu repositório estará presente
              na descrição do projeto.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowMoreIntro(!showMoreIntro)}
            className="mt-3 text-sm font-semibold text-blue-300 sm:hidden"
          >
            {showMoreIntro ? 'Mostrar menos' : 'Ver mais'}
          </button>
        </div>
      </section>
    </>
  );
}
