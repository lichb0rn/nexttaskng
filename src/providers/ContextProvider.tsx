'use client';

import { ReactNode } from 'react';
import { GlobalProvider } from '@/context/GlobalProvider';

interface Props {
  children: ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
