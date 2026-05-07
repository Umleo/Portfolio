'use client';

import Titulo from './Titulo';
import { useSiteTitle } from '../store/siteModal';
import Image from 'next/image';
import { useState } from 'react';
import Bendita from './utilitarios/projetos/Bendita';
import Nfemanager from './utilitarios/projetos/Nfemanager';

type ModalSiteProps = {
  desenvolvimento?: boolean;
};

export default function ModalSite({ desenvolvimento = false }: ModalSiteProps) {
  const { title } = useSiteTitle();

  return (
    <>
      {title === 'Bendita' && <Bendita />}
      {title === 'NFE Manager' && <Nfemanager />}
    </>
  );
}
