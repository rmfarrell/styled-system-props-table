import React from 'react'
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import { color, layout } from 'styled-system'
import ThemeTable from './ThemeTable'

const modalStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const ThemeModal = ({
    onClose,
    open, theme = {},
    themeKey = "",
    highlightColor = "yellow",
    ...rest }) => {
    return <Modal
        onClose={onClose}
        open={open}
        style={modalStyles}
        {...rest}
    >
        <StyledModalContent bg="white" maxHeight="80vh" minWidth="32em">
            <StyledModalClose onClick={onClose}>
                &times;
            </StyledModalClose>
            <ThemeTable highlightColor={highlightColor} theme={theme} themeKey={themeKey} >
                <p>This will be appended after the table</p>
            </ThemeTable>
        </StyledModalContent>
    </Modal>
}

const StyledModalClose = styled.button` 
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 0;
    background: rgba(0,0,0,0.25);
    font-size: 1.5em;
    position: sticky;
    top: 0;
    z-index: 2;
`

const StyledModalContent = styled.div`
    margin: auto;
    overflow-y: auto;
    position: relative;
    ${color};
    ${layout};
`

const StyledModalHeader = styled.h2`
  font-size: 1.2em;
  font-weight: strong;
  max-width: 10em;
`

export default ThemeModal