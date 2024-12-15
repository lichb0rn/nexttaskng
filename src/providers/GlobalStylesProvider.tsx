'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const GlobalStyles = styled.div`
  padding: 2.5rem;
  height: 100%;
  display: flex;
  gap: 2.5rem;
`;

export default function GlobalStylesProvider({ children }: Props) {
  return <GlobalStyles>{children}</GlobalStyles>;
}
