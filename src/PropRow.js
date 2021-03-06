import React from 'react'
import styled from 'styled-components';
import TableRow from '@material-ui/core/TableRow';
import _TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types'
import ThemeValues from './ThemeValues'
import { themeGet } from '@styled-system/theme-get'

const PropRow = (props = {}) => {
  const {
    children,
    defaultValue = null,
    $linkColor,
    name: _name = '',
    type = [],
    required = false,
    sortWeight,
    themeValues,
    ...rest
  } = props;
  const sep = ', ',
    _type = Array.isArray(type) ? type.join(sep) : type;

  const name = required ? <strong>{_name}*</strong> : _name

  const tableCellProps = {
    style: { verticalAlign: 'top' }
  }

  const TableCell = props => <_TableCell {...props} style={{ verticalAlign: 'top' }} />

  return (
    <StyledTableRow {...rest} $linkColor={$linkColor}>
      <TableCell
        style={{ verticalAlign: 'top' }}>{name}</TableCell>
      <TableCell>{_type}</TableCell>
      <TableCell>{defaultValue}</TableCell>
      <TableCell>{children}</TableCell>
      <TableCell>
        {themeValues && <ThemeValues values={themeValues} $linkColor={$linkColor} />}</TableCell>
    </StyledTableRow>
  );
}

const StyledTableRow = styled(TableRow)`
  a {
    color: ${({ $linkColor }) => $linkColor};
  }
`

PropRow.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.any,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  required: PropTypes.bool,
  themeValues: PropTypes.any
}

PropRow.defaultProps = {
  $linkColor: '#3f51b5',
}

export default PropRow