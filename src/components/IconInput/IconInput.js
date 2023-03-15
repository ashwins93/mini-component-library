import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--fontSize': '14px',
    '--borderWidth': '1px',
    '--padding': '4px 24px'
  },
  large: {
    '--fontSize': '18px',
    '--borderWidth': '2px',
    '--padding': '8px 36px'
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  styles['--width'] = `${width}px`;
  return <Wrapper style={styles}>
    <VisuallyHidden>
      {label}
    </VisuallyHidden>
    <Input type="text" placeholder={placeholder} />
    <InputIcon id={icon} size={size === 'small' ? 16 : 24} />
  </Wrapper>;
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  font-size: var(--fontSize);
  font-family: inherit;
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  outline-offset: 2px;
  width: var(--width);
  padding: var(--padding);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`
export default IconInput;
