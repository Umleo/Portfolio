'use client';

import { useState } from 'react';
import Link from 'next/link';

interface contentProps {
  title: string;
  redirect: string;
  blank?: boolean;
}

const DownArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
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
}: {
  left?: boolean;
  noArrow?: boolean;
  title: string;
  content: contentProps[];
  menu?: boolean;
}) {
  // Estado local que controla se ESTA ESPECÍFICA caixa está aberta. Inicialmente é fechada (false).
  const [isOpen, setIsOpen] = useState(false);

  // Função disparada pelo clique: inverte o estado atual (se era false vira true, e vice-versa).
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-fit relative">
      {/* 
         O BOTÃO DE CLIQUE
        Esse bloco representa a barra do topo com o título e a setinha. 
        O evento `onClick={toggleOpen}` avisa o estado que o usuário clicou.
      */}
      <div
        onClick={toggleOpen}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <h1 className="text-2xl font-bold">{title}</h1>
        {!noArrow && <DownArrowIcon isOpen={isOpen} />}
      </div>

      {/* 
         O CONTEÚDO (BACKDROP)
        O React só vai ler e renderizar o div abaixo SE a condição "isOpen" for verdadeira. 
        Note o "{isOpen && ( ...div... )}": a tradução é algo como "Se isOpen for verdadeiro, mostre o seguinte HTML".
      */}
      {isOpen && (
        //right-0 para forcar box a renderizaar para a esquerda, caso a prop "left" seja verdadeira
        <div
          className={`${left && 'right-0'} mt-1 w-auto min-h-auto bg-gray-100 border border-black rounded-md shadow-lg p-4 text-left absolute whitespace-nowrap animate-my`}
        >
          {/* O dangerouslySetInnerHTML converte a nossa string de conteúdo em HTML de verdade para ler tags como o "<br />" que usamos la no topo */}
          <div className="flex flex-col gap-2 text-black">
            {content.map((item, key) => (
              <div key={key}>
                <Link
                  href={item.redirect || '#'}
                  target={item.blank ? '_blank' : ''}
                  className="my-2 cursor-pointer"
                >
                  {item.title}
                </Link>
                <hr className=" m-auto border-neutral-200 w-11/12" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
