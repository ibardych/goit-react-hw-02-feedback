import styled from '@emotion/styled';
import { transition } from 'helpers';

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  ${transition('all')}
`;
