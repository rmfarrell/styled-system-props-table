import React from 'react'
import Desc from '../LinkedDescription'

const rest = {
    sortWeight: -20,
    themeKey: 'colors'
}

export default {
    color: {
        description: <Desc utility="color">color</Desc>,
        ...rest
    },
    bg: {
        description: <Desc utility="color">background-color</Desc>,
        ...rest
    },
    backgroundColor: {
        description: <Desc utility="color">background-color</Desc>,
        ...rest
    }
}