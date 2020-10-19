import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip';
import { themeGet } from '@styled-system/theme-get'

const ThemeValues = ({ values = {}, $linkColor }) => {
    const text = JSON.stringify(values)
    const isTruncated = text.length > 18
    const expanded = isTruncated ? <pre>{JSON.stringify(values, null, 2)}</pre> : null

    return expanded ?
        <Tooltip title={expanded} placement="left">
            <HoverableStyledCode $linkColor={$linkColor}>
                {text}
            </HoverableStyledCode>
        </Tooltip> :
        <StyledCode>{text}</StyledCode>
}

const StyledCode = styled.div`
    font-family: monospace;
    max-width: 12em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const HoverableStyledCode = styled(StyledCode)`
    cursor: pointer;
    text-decoration: underline;
    color: ${({ $linkColor }) => themeGet(`colors.${$linkColor}`, 'inherit')};
`

export default ThemeValues

