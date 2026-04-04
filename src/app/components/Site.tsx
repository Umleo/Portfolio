import Image from 'next/image';
import { useSiteTitle } from '../store/siteModal';

export default function Site({
  setModal,
  image,
  title,
}: {
  setModal: (value: boolean) => void;
  image?: string;
  title: string;
}) {
  const handleClick = () => {
    setModal(true);
    useSiteTitle.setState({ title });
  };

  return (
    <Image
      onClick={handleClick}
      src={image || ''}
      alt="Imagem do site"
      height={288}
      width={480}
      className="rounded-3xl object-cover cursor-pointer"
    />
  );
}
