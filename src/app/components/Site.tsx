import Image from 'next/image';

export default function Site({
  setModal,
}: {
  setModal: (value: boolean) => void;
}) {
  return (
    <Image
      onClick={() => setModal(true)}
      src="/bendita.png"
      alt="Imagem do site"
      height={288}
      width={480}
      className="rounded-3xl object-cover cursor-pointer"
    />
  );
}
