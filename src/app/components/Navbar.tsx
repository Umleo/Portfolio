'use client';

import Dropdown from './Dropdown';
import Imagem from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  //se usuarion sair da home, a navbar disponibiliza opção de voltar
  const buttonHome = usePathname() !== '/';

  //se o usuario acessar alguma rota que inicie com /projetos, a Navbar não renderiza.
  const pathname = usePathname();
  if (pathname.startsWith('/projetos')) {
    return null;
  }

  // Variável para controlar a exibição da seta / backdrop
  const noArrow = true;
  const left = true;

  //PROEJTOS E CAMINHOS
  const javascriptProjects = {
    saudacoesWorld: {
      title: 'SaudaçõesWorld',
      redirect: '/projetos/javascript/saudacoes-world',
    },
  };

  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 bg-linear-to-r from-neutral-600 to-neutral-950 px-4 py-3 text-base text-white shadow-[0_6px_14px_rgba(82,82,82,0.35),0_10px_24px_rgba(10,10,10,0.5)] sm:flex-nowrap sm:px-10 sm:py-1 sm:text-2xl">
      {buttonHome ? (
        <Link href="/" className="flex items-center">
          <Imagem
            className="h-8 w-8 cursor-pointer sm:h-10 sm:w-10"
            src="/arroww.svg"
            alt="Logo do site"
            height={40}
            width={40}
          />
        </Link>
      ) : (
        <Imagem
          className="h-10 w-10 cursor-pointer sm:h-14 sm:w-14"
          src="/tux.svg"
          alt="Logo do site"
          height={40}
          width={40}
        />
      )}

      <Dropdown
        title="Artigos"
        className="hidden sm:block sm:order-0"
        content={[
          {
            title: 'Distros Linux',
            redirect: '/',
            desenvolved: true,
          },
        ]}
      />

      <Dropdown
        title="JavaScript"
        page="/projetos/javascript"
        className="hidden sm:block sm:order-0"
        content={[
          {
            title: javascriptProjects.saudacoesWorld.title,
            redirect: javascriptProjects.saudacoesWorld.redirect,
            blank: true,
          },
        ]}
      />

      {/* MOBILE */}
      <Dropdown
        className="sm:hidden block sm:order-0"
        title="Projetos"
        content={[
          {
            title: 'JavaScript',
            redirect: '/projetos/javascript',
            blank: true,
          },
          {
            title: 'Linux',
            redirect: '',
            blank: true,
            desenvolved: true,
          },
        ]}
      />

      {/* TITULO */}
      <Dropdown
        className="order-3 sm:order-0"
        left={left}
        noArrow={noArrow}
        menu={true}
        title={
          <span
            aria-label="Menu"
            className="inline-flex flex-col justify-center gap-1 sm:gap-1.5"
          >
            <span className="block h-0.5 w-4 rounded bg-white sm:w-7" />
            <span className="block h-0.5 w-4 rounded bg-white sm:w-7" />
            <span className="block h-0.5 w-4 rounded bg-white sm:w-7" />
          </span>
        }
        content={[
          { title: 'Currículo', redirect: '/curriculum' },
          {
            title: 'GitHub',
            redirect: 'https://github.com/Umleo?tab=repositories',
            blank: true,
          },
          {
            title: 'LinkedIn',
            redirect: 'https://www.linkedin.com/in/leonardo-muller-29320a259/',
            blank: true,
          },
        ]}
      />
    </nav>
  );
}
