import React from 'react'
import Desc from '../LinkedDescription'

const sortWeight = -60

export default {
    gridGap: {
        description: <Desc utility="grid">grid-gap</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridColumnGap: {
        description: <Desc utility="grid">grid-column-gap</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridRowGap: {
        description: <Desc utility="grid">grid-row-gap</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridColumn: {
        description: <Desc utility="grid">grid-column</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridRow: {
        description: <Desc utility="grid">grid-row</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridAutoFlow: {
        description: <Desc utility="grid">grid-auto-flow</Desc>,
        sortWeight
    },
    gridAutoColumns: {
        description: <Desc utility="grid">grid-auto-columns</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridAutoRows: {
        description: <Desc utility="grid">grid-auto-rows</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridTemplateColumns: {
        description: <Desc utility="grid">grid-template-columns</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridTemplateRows: {
        description: <Desc utility="grid">grid-template-rows</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridTemplateAreas: {
        description: <Desc utility="grid">grid-template-areas</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    gridArea: {
        description: <Desc utility="grid">grid-area</Desc>,
        sortWeight,
        themeKey: 'sizes'
    }
}