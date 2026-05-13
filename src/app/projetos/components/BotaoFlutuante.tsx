import Link from 'next/link';
import Imagem from 'next/image';

export default function BotaoFlutuante({ home }: { home: string }) {
  return (
    <div className="fixed top-5 left-3 z-50">
      <Link
        href={home}
        aria-label="Voltar para projetos"
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300/40 bg-neutral-950 text-white ring-1 ring-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.65),0_0_14px_rgba(255,255,255,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-900 hover:ring-white/40 hover:shadow-[0_12px_34px_rgba(0,0,0,0.72),0_0_18px_rgba(255,255,255,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-14 sm:w-14"
      >
        <Imagem
          className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8 invert"
          src="/arroww.svg"
          alt="Logo do site"
          height={40}
          width={40}
        />
      </Link>
    </div>
  );
}
