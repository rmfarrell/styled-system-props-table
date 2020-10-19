import React from 'react'
import styled from 'styled-components';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types'

const PropRow = (props = {}) => {
  const {
    children,
    defaultValue = null,
    name = '',
    type = [],
    required = false,
    sortWeight,
    verbose,
    ...rest
  } = props;
  const sep = ', ',
    _type = Array.isArray(type) ? type.join(sep) : type;

  return (
    <TableRow {...rest}>
      <TableCell>{name}</TableCell>
      <TableCell>{_type}</TableCell>
      <TableCell>{defaultValue}</TableCell>
      <TableCell>{required ? <em>required</em> : ''}</TableCell>
      <TableCell>{children}</TableCell>
    </TableRow>
  );
}

PropRow.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.any,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  required: PropTypes.bool,
}

export default PropRow