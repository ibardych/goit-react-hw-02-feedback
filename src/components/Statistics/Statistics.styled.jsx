import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { colors } from 'constants';

const expandSection = keyframes`
  from {
    height: 19px;
    overflow: hidden;
  }
  to {
    height: 196px;
    overflow: visible;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 19px;
  font-size: 20px;
  font-weight: 600;
  animation: ${expandSection} 0.5s ease forwards;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  ${props => {
    return props.type !== undefined && `color: ${colors[props.type]};`;
  }}

  ${props => {
    return (
      props.last !== undefined &&
      `
        border-bottom: 1px dashed #535353;
        padding-bottom: 20px;
        margin-bottom: 15px;
      `
    );
  }}

  & span {
    font-weight: 400;
  }
`;
