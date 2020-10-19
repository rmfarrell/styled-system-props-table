import React from 'react'
import Desc from '../LinkedDescription'

const rest = {
    sortWeight: -100,
    themeKey: 'shadows'
}

export default {
    boxShadow: {
        description: <Desc utility="shadow">box-shadow</Desc>,
        ...rest
    },
    textShadow: {
        description: <Desc utility="shadow">text-shadow</Desc>,
        ...rest
    }
}