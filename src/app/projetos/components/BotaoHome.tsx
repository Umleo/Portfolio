import Imagem from 'next/image';
import Link from 'next/link';
export default function BotaoHome() {
  return (
          <Link href="/" className="flex flex-col items-center justify-center p-2 cursor-pointer">
        <Imagem
            className="h-8 w-8 sm:h-20 sm:w-20"
            src="/tux.svg"
            alt="Logo do site"
            height={40}
            width={40}
        />
        <p className='mt-[-20] rounded-full bg-neutral-900/80 px-3 py-1 text-sm font-extrabold uppercase tracking-[0.2em] text-white shadow-lg ring-1 ring-white/15'>Home</p>
      </Link>
  )
}