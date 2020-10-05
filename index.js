import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import parsePropTypes from './parse-prop-types';
import decorateStyledSystemProps from './styled-system-decorator';
import PropRow from './PropRow'

const PropsTable = (props = {}) => {
  const { component } = props;

  const parsed = parsePropTypes(component);

  return <PropsTablePresentation {...props} data={parsed} />;
}

function StyledSystemPropsTable(props = {}) {
  const { component } = props;

  const parsed = decorateStyledSystemProps(parsePropTypes(component));

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
              <PropRow key={key} name={key} {...data} variant="minor">
                {data.desc}
              </PropRow>
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

const StyledTHead = styled.thead`
  th {
    font-weight: bold;
    text-align: left;
    padding: 1em 0 0.25em 0.5rem;
    background: #333;
    color: #fff;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 0.8em;
  }
`;

export { PropRow, PropsTable, StyledSystemPropsTable };
