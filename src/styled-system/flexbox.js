import React from 'react'
import Desc from '../LinkedDescription'

const sortWeight = -50

export default {
    flex: {
        description: <Desc utility="flexbox">flex</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    flexDirection: {
        description: <Desc utility="flexbox">flex-direction</Desc>,
        sortWeight,
    },
    flexGrow: {
        description: <Desc utility="flexbox">flex-grow</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    flexShrink: {
        description: <Desc utility="flexbox">flex-shrink</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    flexWrap: {
        description: <Desc utility="flexbox">flex-wrap</Desc>,
        sortWeight,
    },
    flexBasis: {
        description: <Desc utility="flexbox">flex-basis</Desc>,
        sortWeight,
        themeKey: 'sizes'
    },
    alignItems: {
        description: <Desc utility="flexbox">align-items</Desc>,
        sortWeight
    },
    alignContent: {
        description: <Desc utility="flexbox">align-content</Desc>,
        sortWeight
    },
    justifyItems: {
        description: <Desc utility="flexbox">justify-items</Desc>,
        sortWeight
    },
    justifyContent: {
        description: <Desc utility="flexbox">justify-content</Desc>,
        sortWeight
    },
    justifySelf: {
        description: <Desc utility="flexbox">justify-self</Desc>,
        sortWeight
    },
    alignSelf: {
        description: <Desc utility="flexbox">align-self</Desc>,
        sortWeight
    },
    order: {
        description: <Desc utility="flexbox">order</Desc>,
        sortWeight
    }
}