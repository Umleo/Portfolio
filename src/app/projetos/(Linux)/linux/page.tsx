import Link from 'next/link';
import BotaoHome from '../../components/BotaoHome';

export default function Projetos() {
  const inicianteClass = "rounded-full border border-green-600 bg-green-100 px-3 py-1 text-green-700 shadow-sm";
  const intermediarioClass = "rounded-full border border-yellow-500 bg-yellow-100 px-3 py-1 text-yellow-700 shadow-sm";
  const dificilClass = "rounded-full border border-red-600 bg-red-100 px-3 py-1 text-red-700 shadow-sm";

  const projetos = [
    {
      name: "Status Server",
      description: "Estatisticas do servidor - CPU, RAM, etc",
      nivel: "Iniciante",
      link: "/projetos/linux/status-server"
    },
    {
      name: "Log-Archive",
      description: "Criação de arquivos compactados tar.gz",
      nivel: "Iniciante",
      link: "/projetos/linux/log-archive"
    }
  ];

  return (
    <>
      <BotaoHome  />
      {projetos.map((projeto, index) => (
        <Link href={projeto.link} key={index}>
        <div key={index} className="hover:bg-neutral-900 hover:scale-101 transition-transform duration-200 grid grid-cols-2 md:grid-cols-[25%_60%_15%] mx-2 mb-6 p-2 px-6 border-gray-400 border-2 rounded-2xl">
          <div className="flex items-center md:border-r-2 mr-2">
              <p className='lg:text-2xl'>{projeto.name}</p>
          </div>
          <div className="hidden md:flex md:max-w-full items-center md:border-r-2 mr-2">
            <p className="text-sm lg:text-xl">{projeto.description}</p>
          </div>
          <div className="flex justify-end">
            <p
              className={`${
                projeto.nivel === "Iniciante"
                  ? inicianteClass
                  : projeto.nivel === "Intermediário"
                    ? intermediarioClass
                    : dificilClass
              } text-sm lg:text-xl`}
            >
              {projeto.nivel}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
}
