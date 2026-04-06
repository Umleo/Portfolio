'use client';

import { useState } from 'react';
import Link from 'next/link';
import HoverBox from './utilitarios/HoverBox';

interface contentProps {
  title: string;
  redirect: string;
  blank?: boolean;
  desenvolved?: boolean;
}

const DownArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </div>
);

/**
 * COMPONENTE DA CATEGORIA INDIVIDUAL (AccordionItem)
 * Este é a "fábrica" de menus. Todo comportamento de um menu vive preso aqui dentro.
 * A grande mágica da independência mora no uso do estado (`useState(false)`).
 * Como cada categoria desenhada na tela constrói e roda o seu *PRÓPRIO* `<AccordionItem>`,
 * isso significa que cada item tem a sua própria variável `isOpen`, invisível e separada para os outros.
 *
 * @param {string} title - O título que vai aparecer na tela (ex: "items")
 * @param {string} content - O conteúdo que vai aparecer dentro da caixa (ex: "* produto 1")
 */
export default function Dropdown({
  left,
  noArrow,
  title,
  content,
  className,
}: {
  left?: boolean;
  noArrow?: boolean;
  title: string | React.ReactNode;
  content: contentProps[];
  menu?: boolean;
  className?: string;
}) {
  // Estado local que controla se ESTA ESPECÍFICA caixa está aberta. Inicialmente é fechada (false).
  const [isOpen, setIsOpen] = useState(false);

  // Função disparada pelo clique: inverte o estado atual (se era false vira true, e vice-versa).
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`relative w-fit shrink-0 ${className ?? ''}`}>
      {/* 
         O BOTÃO DE CLIQUE
        Esse bloco representa a barra do topo com o título e a setinha. 
        O evento `onClick={toggleOpen}` avisa o estado que o usuário clicou.
      */}
      <div
        onClick={toggleOpen}
        className="flex items-center gap-0 sm:gap-2 cursor-pointer select-none"
      >
        {typeof title === 'string' ? (
          <h1 className="text:3xl sm:text-[clamp(0.5rem,1.6vw,1.5rem)] font-bold leading-none">
            {title}
          </h1>
        ) : (
          title
        )}
        {!noArrow && <DownArrowIcon isOpen={isOpen} />}
      </div>

      {/* 
         O CONTEÚDO (BACKDROP)
        O React só vai ler e renderizar o div abaixo SE a condição "isOpen" for verdadeira. 
        Note o "{isOpen && ( ...div... )}": a tradução é algo como "Se isOpen for verdadeiro, mostre o seguinte HTML".
      */}
      {isOpen && (
        <div
          className={`mt-1 absolute h-auto w-auto whitespace-nowrap rounded-md border border-black bg-gray-100 p-3 text-left shadow-lg animate-my sm:p-4 ${left ? 'right-0' : 'left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0'}`}
        >
          {/* O dangerouslySetInnerHTML converte a nossa string de conteúdo em HTML de verdade para ler tags como o "<br />" que usamos la no topo */}
          <div className="flex flex-col gap-2 text-sm text-black sm:text-base">
            {content.map((item, key) => (
              <div key={key}>
                {item.desenvolved ? (
                  <span className="text-gray-400 group relative cursor-not-allowed">
                    {item.title}
                    <HoverBox />
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.redirect || '#'}
                      target={item.blank ? '_blank' : ''}
                      onClick={() => setIsOpen(false)}
                      className="my-2 cursor-pointer"
                    >
                      {item.title}
                    </Link>
                    <hr className=" m-auto border-neutral-200 w-11/12" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
