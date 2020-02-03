import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import parsePropTypes from './use-parse-prop-types';
import decorateStyledSystemPros from './styled-system-decorator';

function PropsTable(props = {}) {
  const { component } = props;

  const parsed = parsePropTypes(component);

  return <PropsTablePresentation {...props} data={parsed} />;
}

function StyledSystemPropsTable(props = {}) {
  const { component } = props;

  const parsed = decorateStyledSystemPros(parsePropTypes(component));

  return <PropsTablePresentation {...props} data={parsed} />;
}

function PropsTablePresentation(props = {}) {
  const { data = {}, children } = props;

  let remove = [];

  return (
    <StyledTable>
      <StyledTHead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
          <th>Notes</th>
        </tr>
      </StyledTHead>
      <tbody>
        {render()}
        {Object.entries(data)
          .filter(([key = '']) => !remove.includes(key))
          .map(([key = '', data = {}]) => {
            return (
              <Prop key={key} name={key} {...data} variant="minor">
                {data.desc}
              </Prop>
            );
          })}
      </tbody>
    </StyledTable>
  );

  function render() {
    return children(data).map(child => {
      child.props.name;
      remove = [child.props.name, ...remove];
      return child;
    });
  }
}

function Prop(props = {}) {
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

// -- Styles

const StyledTable = styled.table`
  font: 1em sans-serif;
  border-collapse: collapse;
  width: 100%;

  td {
    background: ${themeGet('tables.even-row-color', '#fff')};
  }

  tr:nth-child(even) td {
    background: ${themeGet('tables.odd-row-color', '#efefef')};
  }
`;

const yMargin = '0.5rem';

const StyledTHead = styled.thead`
  th {
    font-weight: bold;
    text-align: left;
    padding: 1em 0 0.25em ${yMargin};
    background: #333;
    color: #fff;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 0.8em;
  }
`;

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
        ? `0.5em 0 0.5em ${yMargin}`
        : `0.75em 0 0.75em ${yMargin}`};
  }
`;

/**
name|default|required|desc|variant|weight
 */

export { Prop, PropsTable, StyledSystemPropsTable };
