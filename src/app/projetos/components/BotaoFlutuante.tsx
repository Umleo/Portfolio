import Link from 'next/link';

export default function BotaoFlutuante() {
  return (
    <div className="fixed top-5 left-3 z-50">
      <Link
        href="/"
        aria-label="Voltar para a página inicial"
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300/40 bg-neutral-950 text-white ring-1 ring-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.65),0_0_14px_rgba(255,255,255,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-900 hover:ring-white/40 hover:shadow-[0_12px_34px_rgba(0,0,0,0.72),0_0_18px_rgba(255,255,255,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-14 sm:w-14"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)] transition-transform duration-200 group-hover:scale-110 sm:h-6 sm:w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 11.5 12 4l9 7.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10.5V20h14v-9.5"
          />
        </svg>
      </Link>
    </div>
  );
}
