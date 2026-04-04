import Dropdown from './Dropdown';
import Imagem from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const noArrow = true; // Variável para controlar a exibição da seta
  const left = true;

  return (
    <>
      <nav className="flex justify-between items-center p-10 h-16 border-b border-[#1a1a1a] drop-shadow-[0_0_4px_rgba(255,255,255,0.55)] text-2xl bg-linear-to-r from-neutral-600 to-neutral-950 text-white z-50">
        <Link href="/">
          <Imagem
            className="cursor-pointer"
            src="/tux.png"
            alt="Logo do site"
            height={50}
            width={50}
          />
        </Link>
        <Dropdown
          title="Artigos"
          content={[
            {
              title: 'Distros Linux',
              redirect: '/',
            },
          ]}
        />
        <Dropdown
          left={left}
          noArrow={noArrow}
          title="#"
          content={[
            { title: 'Currículo', redirect: '/curriculum' },
            {
              title: 'GitHub',
              redirect: 'https://github.com/Umleo?tab=repositories',
              blank: true,
            },
            {
              title: 'LinkedIn',
              redirect:
                'https://www.linkedin.com/in/leonardo-muller-29320a259/',
              blank: true,
            },
          ]}
        />
      </nav>
    </>
  );
}
