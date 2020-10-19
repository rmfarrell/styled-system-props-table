import React, { useState } from 'react';
import styled from 'styled-components';
import parsePropTypes from './parse-prop-types';
import PropRow from './PropRow'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { spacing, sizing, typography } from '@material-ui/system';
import transformStyledSystemProps from './styled-system'
import ThemeTable from './ThemeTable'
import ThemeModal from './ThemeModal'

// @TODO: 
// This import is required for this lib to work, apparently on each component
// PR against parse-prop-types to remove this dependency
// or write a new lib.
import 'parse-prop-types';

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

const LinkToTheme = ({ children, themeKey = '', ...rest }) => {
  return <div {...rest}>{children}</div>
}

function PropsTablePresentation(props = {}) {
  const {
    rows = [],
    size,
    theme,
    transformProps,
    ...rest
  } = props;

  const [openModal, setOpenModal] = useState(true)

  return (
    <>
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
              const { themeKey } = data
              return (
                <PropRow key={key} {...data} name={key} >
                  {data.description}
                  {theme && <StyledThemeKey themeKey={themeKey} ml="0.25em">
                    (Theme key: {themeKey})
                </StyledThemeKey>}
                </PropRow>
              );
            })}
        </TableBody>
      </Table>
      <ThemeModal open={openModal} onClose={() => setOpenModal(false)} theme={theme} />
    </>
  );
}

PropsTablePresentation.defaultProps = {
  data: {},
  size: "small",
}

// -- Styles

const StyledThemeKey = styled(LinkToTheme)`
  display: inline-block;
  border: 1px solid red;
  ${spacing};
`

PropsTable.propTypes = {
  component: PropTypes.elementType.isRequired,
  theme: PropTypes.object
}


export { PropsTable, StyledSystemPropsTable, ThemeTable };
