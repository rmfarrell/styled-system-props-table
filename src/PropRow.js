import React from 'react'
import styled from 'styled-components';
import { variant } from 'styled-system';

const PropRow = (props = {}) => {
  const {
    name = '',
    type = [],
    defaultValue = null,
    required = false,
    children,
    ...rest
  } = props;
  const sep = ', ',
    _type = Array.isArray(type) ? type.join(sep) : type;

  return (
    <StyledTr {...rest}>
      <td>{name}</td>
      <td>{_type}</td>
      <td>{defaultValue}</td>
      <td>{required ? 'x' : ''}</td>
      <td>{children}</td>
    </StyledTr>
  );
}

const StyledTr = styled.tr`
  opacity: ${({ verbose = false }) => (verbose ? 0.5 : 1)};
  ${variant({
  variants: {
    minor: {
      fontSize: '0.8em'
    }
  }
})}
  td {
    padding: ${({ variant = '' }) =>
    variant === 'minor'
      ? `0.5em 0 0.5em 0.5em`
      : `0.75em 0 0.75em 0.5em`};
  }
`;

export default PropRow