import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Button = styled.button`
  border: none;
  flex-basis: 50%;
  border-radius: 3px;
  background-color: ${props => colors[props.type]};
  padding: 6px 20px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  ${() => transition('transform', 'box-shadow', 'border-radius')};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px 5px ${props => colors[props.type]};
    border-radius: 10px;
  }
`;
