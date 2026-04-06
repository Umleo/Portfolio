import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Portfólio - Leonardo',
  description: 'Portfólio de projetos e currículo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        {children}
        <footer className="bg-black sm:text-base text-xs sm:mx-auto border-t border-neutral-900 sm:max-w-1/2 text-white text-center py-6">
          <p>Abril - {new Date().getFullYear()} | Desenvolvido por Leonardo</p>
        </footer>
      </body>
    </html>
  );
}
