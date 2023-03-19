import styled from '@emotion/styled';
import { transition } from 'helpers';

export const SectionContainer = styled.section`
  width: 400px;
  max-width: 100%;
  height: auto;
  background-color: rgb(0 0 0 / 0.3);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px -1px rgb(0 0 0 / 0.1);
  backdrop-filter: blur(2px);
  overflow: hidden;

  ${transition('height')}
`;

export const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 30px;
`;
