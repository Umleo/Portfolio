'use client';

import { TypeAnimation } from 'react-type-animation';

interface SiteProps {
  site?: boolean;
  title?: string;
}

export default function Titulo({ site, title }: SiteProps) {
  return (
    <>
      {site ? (
        <TypeAnimation
          cursor={false}
          className={`type text-5xl font-bold text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]  cursor-grab`}
          sequence={[
            '',
            300,
            title!,
            1000,
            (el) => el!.classList.remove('type'),
            // A reference to the element gets passed as the first argument of a callback function
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          style={{ display: 'inline-block' }}
        />
      ) : (
        <TypeAnimation
          cursor={false}
          className={`type font-bold text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.55)] text-9xl cursor-grab`}
          sequence={[
            '',
            500,
            'Olá!',
            1000,
            'Welcome!',
            100,
            'ops...',
            100,
            'Bem-Vindo!',
            1500,
            (el) => el!.classList.remove('type'), // A reference to the element gets passed as the first argument of a callback function
          ]}
          wrapper="span"
          speed={40}
          repeat={0}
          style={{ display: 'inline-block' }}
        />
      )}
    </>
  );
}
