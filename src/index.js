import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import parsePropTypes from './parse-prop-types';
import decorateStyledSystemProps from './styled-system-decorator';
import PropRow from './PropRow'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { spacing, sizing, typography } from '@material-ui/system';
import transformStyledSystemProps from './styled-system'

// @TODO: 
// This import is required for this lib to work, apparently on each component
// PR against parse-prop-types to remove this dependency
// or write a new lib.
import 'parse-prop-types';

// const PropsTable = (props = {}) => {
//   const { component,  } = props;

//   const parsed = parsePropTypes(component);

//   return <PropsTablePresentation {...props} data={parsed} />;
// }

// function StyledSystemPropsTable(props = {}) {
//   const { component } = props;

//   const parsed = decorateStyledSystemProps(parsePropTypes(component));

//   return <PropsTablePresentation {...props} data={parsed} />;
// }


const entriesFromComponentProps = (component) => {
  const props = parsePropTypes(component);
  return Object.entries(props)
}

const reduceProps = (entries, transformers = []) => {
  return entries.reduce((acc, item) => {
    let out = {
      default: null,
      description: "",
      required: false,
      sortWeight: 0,
      type: ""
    }
    const [name, props] = item

    transformers.forEach(transformer => {
      const transformed = transformer(name, props)
      if (!transformed) {
        return
      }
      out = Object.assign(out, transformed)
    })

    return [...acc, [name, out]]
  }, [])
}

const PropsTable = ({ component, transformProps = [], ...rest }) => {
  const rows = reduceProps(entriesFromComponentProps(component), transformProps)

  return <PropsTablePresentation rows={rows} {...rest} />;
}

const StyledSystemPropsTable = ({ component, transformProps, ...rest }) => {
  const transformers = [transformStyledSystemProps, transformProps]
  const rows = reduceProps(entriesFromComponentProps(component), transformers)
  return <PropsTablePresentation rows={rows} {...rest} />;
}

function PropsTablePresentation(props = {}) {
  const {
    rows = [],
    size,
    transformProps,
    ...rest
  } = props;

  console.log(rows)

  return (
    <Table size={size} {...rest}>
      <TableHead>
        <TableRow>
          <TableCell><strong>Name</strong></TableCell>
          <TableCell><strong>Type</strong></TableCell>
          <TableCell><strong>Default</strong></TableCell>
          <TableCell><strong>Required</strong></TableCell>
          <TableCell><strong>Description</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows
          .sort(([aName, a], [bName, b]) => {
            if (a.sortWeight < b.sortWeight) return 1
            if (a.sortWeight > b.sortWeight) return -1
            if (aName > bName) return 1
            if (aName < bName) return -1
          })
          .map(([key = '', data = {}]) => {
            return (
              <PropRow key={key} {...data} name={key} >
                {data.description}
              </PropRow>
            );
          })}
      </TableBody>
    </Table>
  );
}

PropsTablePresentation.defaultProps = {
  data: {},
  size: "small"
}

// -- Styles

const StyledTableContainer = styled(TableContainer)`
  max-width: ${({ $maxWidth }) => $maxWidth};
  ${typography};
  ${sizing};
  ${spacing};
`

PropsTable.propTypes = {
  component: PropTypes.elementType
}


export { PropsTable, StyledSystemPropsTable };
