import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


function getWidth(displayValue) {
  let tempOption = document.createElement('option');
  tempOption.textContent = displayValue;

  let tempSelect = document.createElement('select');
  tempSelect.style.visibility = "hidden";
  tempSelect.style.position = "fixed";
  tempSelect.style.fontSize = 'inherit';
  tempSelect.style.fontFamily = 'inherit';
  tempSelect.style.paddingRight = '54px';
  tempSelect.style.paddingLeft = '16px'
  tempSelect.style.border = 'none';
  tempSelect.style.appearance = 'none';
  tempSelect.appendChild(tempOption);
  document.body.appendChild(tempSelect);
  const width = tempSelect.clientWidth;
  tempSelect.remove();
  return width;
}

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const computedWidth = getWidth(displayedValue);
  return (
    <Wrapper>
      <SelectInput value={value} onChange={onChange} style={{ width: computedWidth }}>
        {children}
      </SelectInput>
      <Chevron id="chevron-down" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  appearance: none;
  display: inline-block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectInput = styled.select`
  color: inherit;
  appearance: none;
  background-color: transparent;
  border: none;
  font-size: inherit;
  font-family: inherit;
  padding: 12px 54px 12px 16px;
`;

const Chevron = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 12px auto 0;
  width: 24px;
  height: 24px;
`;

export default Select;
