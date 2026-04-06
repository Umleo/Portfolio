export default function ModalCertificado({
  setModal,
  name,
}: {
  name: string;
  setModal: (value: boolean) => void;
}) {
  return (
    <div className=" flex justify-center items-center fixed inset-0 z-50 h-screen w-screen bg-black/50">
      <div className="flex h-[50vh] w-full flex-col rounded-lg bg-gray-800 p-4 text-center lg:max-w-[50vw] lg:p-6 lg:h-[70vh]">
        <button
          className="self-end w-fit bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
          onClick={() => setModal(false)}
        >
          Fechar
        </button>
        <div className="relative mt-4 flex-1 w-full overflow-hidden rounded-2xl border border-gray-200">
          <iframe
            src={`/certificados/${name}.pdf#toolbar=0`}
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
