import React from 'react'
import styled from 'styled-components';
import PropRow from './PropRow'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function ThemeTable(props = {}) {
    const {
        children,
        size = 'small',
        theme = {},
        ...rest
    } = props;

    console.log(theme)

    return (
        <Table size={size} {...rest}>
            <TableBody>
                {Object.keys(theme).map((key, idx) => {

                    return <TableRow key={key}>
                        <TableCell id="key">{key}</TableCell>
                        <TableCell>
                            <code>
                                <pre>
                                    {JSON.stringify(theme[key], null, 2)}
                                </pre>
                            </code>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    );
}

export default ThemeTable;
