import React from 'react'
import Desc from '../LinkedDescription'

const sortWeight = -30

export default {
    fontFamily: {
        description: <Desc utility="typography">font-family</Desc>,
        sortWeight,
        themeKey: 'fonts'
    },
    fontSize: {
        description: <Desc utility="typography">font-size</Desc>,
        sortWeight,
        themeKey: 'fontSizes'
    },
    fontWeight: {
        description: <Desc utility="typography">font-weight</Desc>,
        sortWeight,
        themeKey: 'fontWeights'
    },
    lineHeight: {
        description: <Desc utility="typography">line-height</Desc>,
        sortWeight,
        themeKey: 'lineHeights'
    },
    letterSpacing: {
        description: <Desc utility="typography">letter-spacing</Desc>,
        sortWeight,
        themeKey: 'letterSpacings'
    },
    textAlign: {
        description: <Desc utility="typography">text-align</Desc>,
        sortWeight,
    },
    fontStyle: {
        description: <Desc utility="typography">font-style</Desc>,
        sortWeight,
    }
}