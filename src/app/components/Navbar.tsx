import Dropdown from './Dropdown';
import Imagem from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const noArrow = true; // Variável para controlar a exibição da seta
  const left = true;

  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 bg-linear-to-r from-neutral-600 to-neutral-950 px-4 py-3 text-base text-white shadow-[0_6px_14px_rgba(82,82,82,0.35),0_10px_24px_rgba(10,10,10,0.5)] sm:flex-nowrap sm:px-10 sm:py-2 sm:text-2xl">
      <Link href="/" className="flex items-center">
        <Imagem
          className="h-8 w-8 cursor-pointer sm:h-10 sm:w-10"
          src="/tux.png"
          alt="Logo do site"
          height={40}
          width={40}
        />
      </Link>

      <Dropdown
        className="hidden sm:block sm:order-0"
        title="Artigos"
        content={[
          {
            title: 'Distros Linux',
            redirect: '/',
            desenvolved: true,
          },
        ]}
      />

      <Dropdown
        className="hidden sm:block sm:order-0"
        title="Python"
        content={[
          {
            title: 'Automações',
            redirect: '',
            blank: true,
            desenvolved: true,
          },
        ]}
      />

      <Dropdown
        className="sm:hidden block sm:order-0"
        title="Projetos"
        content={[
          {
            title: 'Automações - Python',
            redirect: '',
            blank: true,
            desenvolved: true,
          },
          {
            title: 'Distros Linux - Linux',
            redirect: '',
            blank: true,
            desenvolved: true,
          },
        ]}
      />

      <Dropdown
        className="order-3 sm:order-0"
        left={left}
        noArrow={noArrow}
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
