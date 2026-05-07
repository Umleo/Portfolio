import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos - Linux',
  description: 'Projetos relacionados a sistemas Linux.',
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
