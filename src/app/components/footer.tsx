'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pahtname = usePathname();

  // Se a rota for "/projetos", o Footer não renderiza nada
  if (pahtname.startsWith('/projetos')) {
    return null;
  }

  return (
    <footer className="sm:text-base text-xs sm:mx-auto border-t border-neutral-900 sm:max-w-1/2 text-white text-center py-6">
      <p>Abril - {new Date().getFullYear()} | Desenvolvido por Leonardo</p>
    </footer>
  );
}
