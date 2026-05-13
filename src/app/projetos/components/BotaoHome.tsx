import Imagem from 'next/image';
import Link from 'next/link';
export default function BotaoHome() {
  return (
    <div className='flex justify-center items-center'>
      <div className="max-h-20 w-auto sm:h-20 sm:w-20 flex items-center mb-2">
      <Link href="/" className="flex hover:scale-105 transition-transform duration-200 cursor-pointer flex-col items-center justify-center p-2">
          <Imagem
              className=""
              src="/tux.svg"
              alt="Logo do site"
              height={50}
              width={50}
          />
          <p className='mt-[-20] rounded-full bg-neutral-900/80 px-3 py-1 text-sm font-extrabold uppercase tracking-[0.2em] text-white shadow-lg ring-1 ring-white/15'>Home</p>
      </Link>
      </div>
    </div>
  )
}