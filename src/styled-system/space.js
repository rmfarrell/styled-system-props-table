import React from 'react'
import Desc from '../LinkedDescription'

const rest = {
    sortWeight: -10,
    themeKey: 'space'
}

export default {
    m: {
        description: <Desc utility="space">margin</Desc>,
        ...rest
    },
    p: {
        description: <Desc utility="space">padding</Desc>,
        ...rest
    },
    mx: {
        description: <Desc utility="space">padding</Desc>,
        ...rest
    },
    my: {
        description: <Desc utility="space">margin-top & margin-bottom</Desc>,
        ...rest
    },
    px: {
        description: <Desc utility="space">padding-left & padding-right</Desc>,
        ...rest
    },
    py: {
        description: <Desc utility="space">padding-top & padding-bottom</Desc>,
        ...rest
    },
    mt: {
        description: <Desc utility="space">margin-top</Desc>,
        ...rest
    },
    mr: {
        description: <Desc utility="space">margin-right</Desc>,
        ...rest
    },
    mb: {
        description: <Desc utility="space">margin-bottom</Desc>,
        ...rest
    },
    ml: {
        description: <Desc utility="space">margin-left</Desc>,
        ...rest
    },
    pt: {
        description: <Desc utility="space">padding-top</Desc>,
        ...rest
    },
    pr: {
        description: <Desc utility="space">padding-right</Desc>,
        ...rest
    },
    pb: {
        description: <Desc utility="space">padding-bottom</Desc>,
        ...rest
    },
    pl: {
        description: <Desc utility="space">padding-left</Desc>,
        ...rest
    },
    marginX: {
        ...rest,
        description: <Desc utility="space">margin-left & margin-right</Desc>,
        sortWeight: -15
    },
    marginY: {
        ...rest,
        description: <Desc utility="space">margin-top & margin-bottom</Desc>,
        sortWeight: -15
    },
    paddingX: {
        ...rest,
        description: <Desc utility="space">padding-left & padding-right</Desc>,
        sortWeight: -15
    },
    paddingY: {
        ...rest,
        description: <Desc utility="space">padding-top & padding-bottom</Desc>,
        sortWeight: -15
    },
    margin: {
        ...rest,
        description: <Desc utility="space">margin</Desc>,
        sortWeight: -15
    },
    marginTop: {
        ...rest,
        description: <Desc utility="space">margin-top</Desc>,
        sortWeight: -15
    },
    marginRight: {
        ...rest,
        description: <Desc utility="space">margin-right</Desc>,
        sortWeight: -15
    },
    marginBottom: {
        ...rest,
        description: <Desc utility="space">margin-bottom</Desc>,
        sortWeight: -15
    },
    marginLeft: {
        ...rest,
        description: <Desc utility="space">margin-left</Desc>,
        sortWeight: -15
    },
    padding: {
        ...rest,
        description: <Desc utility="space">padding</Desc>,
        sortWeight: -15
    },
    paddingTop: {
        ...rest,
        description: <Desc utility="space">padding-top</Desc>,
        sortWeight: -15
    },
    paddingRight: {
        ...rest,
        description: <Desc utility="space">padding-right</Desc>,
        sortWeight: -15
    },
    paddingBottom: {
        ...rest,
        description: <Desc utility="space">padding-bottom</Desc>,
        sortWeight: -15
    },
    paddingLeft: {
        ...rest,
        description: <Desc utility="space">padding-left</Desc>,
        sortWeight: -15
    },
}