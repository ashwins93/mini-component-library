/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--padding': 0,
    '--borderRadius': '4px',
    '--height': '8px'
  },
  medium: {
    '--padding': 0,
    '--borderRadius':'4px',
    '--height': '12px',
  },
  large: {
    '--padding': '4px',
    '--borderRadius': '4px',
    '--height': '16px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <div>
    <VisuallyHidden>
      <label id="progresslabel">Progress:</label>
    </VisuallyHidden>
    <Wrapper aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} role="progressbar" style={styles}>
      <Progress style={{ width: value + '%' }} rounded={value === 100} />
    </Wrapper>
  </div>
};

const Wrapper = styled.div.attrs({
  'aria-labelledby': 'progresslabel',
})`
  padding: var(--padding);
  border-radius: var(--borderRadius);
  overflow: hidden;
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  background-color: ${COLORS.transparentGray15};
`;

const Progress = styled.div`
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: ${p => p.rounded ? 'var(--borderRadius)' : 'var(--borderRadius) 0 0 var(--borderRadius)'};
`;

export default ProgressBar;
