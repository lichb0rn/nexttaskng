'use client';
import { useGlobalState } from '@/context/GlobalProvider';
import styled from 'styled-components';

export default function Tasks() {
  const { theme } = useGlobalState();
  return <TasksStyled theme={theme}>Tasks</TasksStyled>;
}

const TasksStyled = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
