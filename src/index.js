import React, { useState } from 'react';
import parsePropTypes from './parse-prop-types';
import PropRow from './PropRow'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import transformStyledSystemProps from './styled-system'

// @TODO: 
// This import is required for this lib to work, apparently on each component
// PR against parse-prop-types to remove this dependency
// or write a new lib.
import 'parse-prop-types';

const LINK_COLOR = "#3f51b5"

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
    theme,
    transformProps,
    ...rest
  } = props;

  return (
    <Table size={size} {...rest}>
      <TableHead>
        <TableRow>
          <TableCell><strong>Name</strong></TableCell>
          <TableCell><strong>Type</strong></TableCell>
          <TableCell><strong>Default</strong></TableCell>
          <TableCell><strong>Description</strong></TableCell>
          {theme && <TableCell><strong>Theme values</strong></TableCell>}
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
            const { themeKey } = data
            const themeValues = theme && theme[themeKey]
            return (
              <PropRow
                {...data}
                key={key}
                $linkColor={LINK_COLOR}
                name={key}
                themeValues={themeValues}
              >
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
  size: "small",
}

// -- Styles

PropsTable.propTypes = {
  component: PropTypes.elementType.isRequired,
  linkColor: PropTypes.string,
  theme: PropTypes.object
}


export { PropsTable, StyledSystemPropsTable };
