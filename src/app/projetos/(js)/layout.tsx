import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos - JavaScript',
  description: 'Projetos desenvolvidos em JavaScript',
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
