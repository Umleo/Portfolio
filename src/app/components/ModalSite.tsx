'use client';

import Titulo from './Titulo';

export default function ModalSite() {
  return (
    <>
      <section className="flex h-full w-full text-white p-8">
        <div className="flex-1 flex flex-col gap-4">
          <div id="titulo" className="flex justify-center">
            <Titulo site={true} title="Projeto Bendita" />
          </div>
          {/* minimal-scrollbar - definições no arquivo css */}
          <p className="minimal-scrollbar text-2xl m-4 p-6 rounded-2xl cursor-text overflow-auto bg-neutral-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            dictum libero. Duis bibendum scelerisque tortor, quis cursus arcu
            euismod eu. Integer eget orci vitae leo tempus rhoncus nec eget
            odio. In posuere, lacus eu dignissim laoreet, augue sapien egestas
            ligula, sed pharetra lorem neque ac erat. Morbi felis tellus,
            pretium id consequat mollis, sagittis sit amet felis. Donec
            malesuada neque in arcu auctor aliquam. Sed at imperdiet nunc.
            Nullam facilisis, orci id convallis laoreet, purus libero tempor
            lacus, auctor mattis sapien dolor sit amet sem. Sed tincidunt velit
            et laoreet mattis. Donec nec posuere neque. Donec imperdiet dapibus
            aliquam. Quisque lobortis iaculis turpis, ut ultrices metus pharetra
            nec. Nunc pharetra nibh ipsum, ut ultricies sapien porta et. Etiam
            vel dictum nisi, eget condimentum velit. Vestibulum porta urna in
            risus vestibulum, sit amet elementum felis pellentesque. Nunc
            dignissim, orci a convallis dignissim, dolor sapien consectetur
            neque, quis malesuada dui felis porttitor sapien. Cras odio lorem,
            iaculis eget congue vel, malesuada in sem. Etiam a condimentum mi.
            Integer et dui diam. Integer elementum mauris enim, ac efficitur
            tortor cursus quis. Suspendisse sodales tempus neque eu eleifend.
            Pellentesque a tempus dui, fermentum efficitur nunc. Vivamus nisl
            tellus, tempor feugiat neque sit amet, dignissim condimentum eros.
            Quisque aliquet at sem quis dapibus. Nulla pulvinar lacus nec nulla
            pulvinar malesuada. Proin sit amet risus metus. Aenean purus odio,
            fermentum ac porta non, facilisis sit amet lorem. Sed nec pretium
            tortor. Duis vel dui at lectus sollicitudin volutpat. Suspendisse
            bibendum ac nulla ut tempor. Nulla id scelerisque erat. Nulla
            elementum porttitor tristique. Etiam molestie, ante et suscipit
            ornare, nunc purus ultricies nunc, efficitur scelerisque lectus erat
            ultrices tellus. Proin iaculis lorem nec facilisis commodo. Integer
            leo dui, rutrum eu consectetur ut, venenatis in libero. Sed finibus,
            tellus eget lacinia cursus, mauris velit consequat purus, in
            pharetra neque neque a ante. Etiam non sem et tortor fermentum
            placerat. In sapien ipsum, venenatis in erat ut, tincidunt porttitor
            ante. Sed velit magna, eleifend luctus justo et, gravida porta erat.
            Donec hendrerit, urna et facilisis efficitur, turpis orci accumsan
            ligula, ac mattis nisl lorem in est. Aliquam quis ultrices velit.
            Morbi id eros nec lacus semper varius eu sed ante. Sed dolor nisi,
            bibendum sed neque sed, porttitor dictum mauris. Cras eget massa
            nulla. Sed ultricies nibh sit amet porta interdum. Maecenas aliquet
            efficitur quam, vel tincidunt libero. Morbi bibendum placerat
            lectus, sed egestas felis eleifend ac. Sed eu nibh non lorem
            hendrerit euismod eget id ante. Morbi dapibus nunc quis neque
            sollicitudin, nec molestie risus ornare. Quisque venenatis aliquam
            enim, eget dapibus purus blandit vel. Morbi feugiat aliquet lacus,
            vitae congue ipsum lobortis eu. Aenean gravida dapibus orci
            convallis lobortis. Pellentesque venenatis ante in feugiat tempus.
            Nam tincidunt vel dui id tempor. Sed dapibus ipsum ac tempor
            tincidunt. Nullam eu ipsum ac risus lacinia pretium vitae eu massa.
            Donec interdum ex at consectetur gravida. Cras ornare vehicula eros
            consectetur porta. Pellentesque ullamcorper scelerisque feugiat. Nam
            porttitor ullamcorper ante in gravida. Sed justo massa, imperdiet
            nec nulla vitae, varius luctus elit. Vestibulum malesuada diam ut
            elementum pellentesque. Proin tristique orci tortor, non suscipit
            tortor fringilla sed. Donec tincidunt dapibus convallis. Integer
            egestas venenatis finibus. Maecenas sit amet pharetra nisl. Aliquam
            mauris mauris, suscipit id vulputate at, tristique eget augue. Ut
            pharetra felis nec orci ornare, vitae pharetra lectus ultrices.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            dictum libero. Duis bibendum scelerisque tortor, quis cursus arcu
            euismod eu. Integer eget orci vitae leo tempus rhoncus nec eget
            odio. In posuere, lacus eu dignissim laoreet, augue sapien egestas
            ligula, sed pharetra lorem neque ac erat. Morbi felis tellus,
            pretium id consequat mollis, sagittis sit amet felis. Donec
            malesuada neque in arcu auctor aliquam. Sed at imperdiet nunc.
            Nullam facilisis, orci id convallis laoreet, purus libero tempor
            lacus, auctor mattis sapien dolor sit amet sem. Sed tincidunt velit
            et laoreet mattis. Donec nec posuere neque. Donec imperdiet dapibus
            aliquam. Quisque lobortis iaculis turpis, ut ultrices metus pharetra
            nec. Nunc pharetra nibh ipsum, ut ultricies sapien porta et. Etiam
            vel dictum nisi, eget condimentum velit. Vestibulum porta urna in
            risus vestibulum, sit amet elementum felis pellentesque. Nunc
            dignissim, orci a convallis dignissim, dolor sapien consectetur
            neque, quis malesuada dui felis porttitor sapien. Cras odio lorem,
            iaculis eget congue vel, malesuada in sem. Etiam a condimentum mi.
            Integer et dui diam. Integer elementum mauris enim, ac efficitur
            tortor cursus quis. Suspendisse sodales tempus neque eu eleifend.
            Pellentesque a tempus dui, fermentum efficitur nunc. Vivamus nisl
            tellus, tempor feugiat neque sit amet, dignissim condimentum eros.
            Quisque aliquet at sem quis dapibus. Nulla pulvinar lacus nec nulla
            pulvinar malesuada. Proin sit amet risus metus. Aenean purus odio,
            fermentum ac porta non, facilisis sit amet lorem. Sed nec pretium
            tortor. Duis vel dui at lectus sollicitudin volutpat. Suspendisse
            bibendum ac nulla ut tempor. Nulla id scelerisque erat. Nulla
            elementum porttitor tristique. Etiam molestie, ante et suscipit
            ornare, nunc purus ultricies nunc, efficitur scelerisque lectus erat
            ultrices tellus. Proin iaculis lorem nec facilisis commodo. Integer
            leo dui, rutrum eu consectetur ut, venenatis in libero. Sed finibus,
            tellus eget lacinia cursus, mauris velit consequat purus, in
            pharetra neque neque a ante. Etiam non sem et tortor fermentum
            placerat. In sapien ipsum, venenatis in erat ut, tincidunt porttitor
            ante. Sed velit magna, eleifend luctus justo et, gravida porta erat.
            Donec hendrerit, urna et facilisis efficitur, turpis orci accumsan
            ligula, ac mattis nisl lorem in est. Aliquam quis ultrices velit.
            Morbi id eros nec lacus semper varius eu sed ante. Sed dolor nisi,
            bibendum sed neque sed, porttitor dictum mauris. Cras eget massa
            nulla. Sed ultricies nibh sit amet porta interdum. Maecenas aliquet
            efficitur quam, vel tincidunt libero. Morbi bibendum placerat
            lectus, sed egestas felis eleifend ac. Sed eu nibh non lorem
            hendrerit euismod eget id ante. Morbi dapibus nunc quis neque
            sollicitudin, nec molestie risus ornare. Quisque venenatis aliquam
            enim, eget dapibus purus blandit vel. Morbi feugiat aliquet lacus,
            vitae congue ipsum lobortis eu. Aenean gravida dapibus orci
            convallis lobortis. Pellentesque venenatis ante in feugiat tempus.
            Nam tincidunt vel dui id tempor. Sed dapibus ipsum ac tempor
            tincidunt. Nullam eu ipsum ac risus lacinia pretium vitae eu massa.
            Donec interdum ex at consectetur gravida. Cras ornare vehicula eros
            consectetur porta. Pellentesque ullamcorper scelerisque feugiat. Nam
            porttitor ullamcorper ante in gravida. Sed justo massa, imperdiet
            nec nulla vitae, varius luctus elit. Vestibulum malesuada diam ut
            elementum pellentesque. Proin tristique orci tortor, non suscipit
            tortor fringilla sed. Donec tincidunt dapibus convallis. Integer
            egestas venenatis finibus. Maecenas sit amet pharetra nisl. Aliquam
            mauris mauris, suscipit id vulputate at, tristique eget augue. Ut
            pharetra felis nec orci ornare, vitae pharetra lectus ultrices.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="w-100 h-150 relative overflow-hidden rounded-2xl bg-gray-800">
            <iframe
              src="https://bendita.vercel.app/"
              className="w-full h-full rounded-2xl cursor-pointer"
              title="Projeto Bendita"
              loading="lazy"
              scrolling="no" //erro estranho - funcionando
            />
            {/* Overlay para permitir o clique de redirecionamento */}
            <a
              href="https://bendita.vercel.app/"
              target="_blank"
              className="absolute inset-0 bg-transparent"
            >
              {/* Este link cobre o iframe para capturar o clique e te levar ao site */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
