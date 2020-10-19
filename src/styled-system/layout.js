import React from 'react'
import Desc from '../LinkedDescription'

const sortWeight = -40

const themeKey = 'sizes'

export default {
    width: {
        description: <Desc utility="layout">width</Desc>,
        sortWeight,
        themeKey
    },
    height: {
        description: <Desc utility="layout">height</Desc>,
        sortWeight,
        themeKey
    },
    display: {
        description: <Desc utility="layout">display</Desc>,
        sortWeight
    },
    minWidth: {
        description: <Desc utility="layout">min-width</Desc>,
        sortWeight,
        themeKey
    },
    minHeight: {
        description: <Desc utility="layout">min-height</Desc>,
        sortWeight,
        themeKey
    },
    maxWidth: {
        description: <Desc utility="layout">max-width</Desc>,
        sortWeight,
        themeKey
    },
    maxHeight: {
        description: <Desc uiltity="layout">max-height</Desc>,
        sortWeight,
        themeKey
    },
    size: {
        description: <Desc uiltity="layout">width & height</Desc>,
        sortWeight,
        themeKey
    },
    verticalAlign: {
        description: <Desc uiltity="layout">vetical-align</Desc>,
        sortWeight
    },
    overflow: {
        description: <Desc uiltity="layout">overflow</Desc>,
        sortWeight
    },
    overflowX: {
        description: <Desc uiltity="layout">overflow-x</Desc>,
        sortWeight
    },
    overflowY: {
        description: <Desc uiltity="layout">overflow-y</Desc>,
        sortWeight
    }
}