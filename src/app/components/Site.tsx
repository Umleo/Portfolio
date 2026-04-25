import Image from 'next/image';
import { useSiteTitle } from '../store/siteModal';
import { use } from 'react';

export default function Site({
  setModal,
  image,
  title,
  dev,
}: {
  setModal: (value: boolean) => void;
  image?: string;
  dev?: boolean;
  title: string;
}) {
  const handleClick = () => {
    setModal(true);
    useSiteTitle.setState({ title });
    useSiteTitle.setState({ dev });
  };

  return (
    <div className="relative h-[240px] w-[300px] lg:h-[320px] lg:w-[380px] lg:hover:scale-105">
      <Image
        onClick={handleClick}
        src={image || ''}
        alt="Imagem do site"
        fill
        className={`rounded-3xl object-cover cursor-pointer animate-pulse-interactive sm:animate-none`}
      />
    </div>
  );
}
