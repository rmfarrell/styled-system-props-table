import React from 'react';

const decorateStyledSystemProps = (data = {}) => {
  const responsiveSpace = ['number', 'string', 'number[]', 'string[]'],
    responsiveString = ['string', 'string[]'],
    verbose = true,
    space1 = {
      m: {
        description: <Desc utility="space">margin</Desc>
      },
      p: {
        description: <Desc utility="space">padding</Desc>
      }
    },
    space2 = {
      mx: {
        description: <Desc utility="space">margin-left & margin-right</Desc>
      },
      my: {
        description: <Desc utility="space">margin-top & margin-bottom</Desc>
      },
      px: {
        description: <Desc utility="space">padding-left & padding-right</Desc>
      },
      py: {
        description: <Desc utility="space">padding-top & padding-bottom</Desc>
      }
    },
    space3 = {
      mt: {
        description: <Desc utility="space">margin-top</Desc>
      },
      mr: {
        description: <Desc utility="space">margin-right</Desc>
      },
      mb: {
        description: <Desc utility="space">margin-bottom</Desc>
      },
      ml: {
        description: <Desc utility="space">margin-left</Desc>
      },
      pt: {
        description: <Desc utility="space">padding-top</Desc>
      },
      pr: {
        description: <Desc utility="space">padding-right</Desc>
      },
      pb: {
        description: <Desc utility="space">padding-bottom</Desc>
      },
      pl: {
        description: <Desc utility="space">padding-left</Desc>
      }
    },
    space4 = {
      marginX: {
        description: <Desc utility="space">margin-left & margin-right</Desc>
      },
      marginY: {
        description: <Desc utility="space">margin-top & margin-bottom</Desc>
      },
      paddingX: {
        description: <Desc utility="space">padding-left & padding-right</Desc>
      },
      paddingY: {
        description: <Desc utility="space">padding-top & padding-bottom</Desc>
      }
    },
    space5 = {
      margin: {
        description: <Desc utility="space">margin</Desc>
      },
      marginTop: {
        description: <Desc utility="space">margin-top</Desc>
      },
      marginRight: {
        description: <Desc utility="space">margin-right</Desc>
      },
      marginBottom: {
        description: <Desc utility="space">margin-bottom</Desc>
      },
      marginLeft: {
        description: <Desc utility="space">margin-left</Desc>
      },
      padding: {
        description: <Desc utility="space">padding</Desc>
      },
      paddingTop: {
        description: <Desc utility="space">padding-top</Desc>
      },
      paddingRight: {
        description: <Desc utility="space">padding-right</Desc>
      },
      paddingBottom: {
        description: <Desc utility="space">padding-bottom</Desc>
      },
      paddingLeft: {
        description: <Desc utility="space">padding-left</Desc>
      }
    },
    layout1 = {
      width: {
        description: <Desc utility="layout">width</Desc>
      },
      maxWidth: {
        description: <Desc utility="layout">max-width</Desc>
      },
      size: {
        description: <Desc utility="layout">width & height</Desc>
      },
      height: {
        description: <Desc utility="layout">height</Desc>
      }
    },
    layout2 = {
      display: {
        description: <Desc utility="layout">display</Desc>
      },
      minWidth: {
        description: <Desc utility="layout">min-width</Desc>
      },
      minHeight: {
        description: <Desc utility="layout">min-height</Desc>
      },
      maxHeight: {
        description: <Desc utility="layout">max-height</Desc>
      },
      verticalAlign: {
        description: <Desc utility="layout">vertical-align</Desc>
      },
      overflow: {
        description: <Desc utility="layout">overflow</Desc>
      },
      overflowX: {
        description: <Desc utility="layout">overflow-x</Desc>
      },
      overflowY: {
        description: <Desc utility="layout">overflow-x</Desc>
      }
    },
    color1 = {
      color: {
        description: <Desc utility="color">padding-left</Desc>
      },
      bg: {
        description: <Desc utility="color">padding-left</Desc>
      }
    },
    color2 = {
      backgroundColor: {
        description: <Desc utility="color">padding-left</Desc>
      }
    },
    type = {
      fontFamily: {
        description: <Desc utility="typography">font-family</Desc>
      },
      fontSize: {
        description: <Desc utility="typography">font-size</Desc>
      },
      fontWeight: {
        description: <Desc utility="typography">font-weight</Desc>
      },
      lineHeight: {
        description: <Desc utility="typography">line-height</Desc>
      },
      letterSpacing: {
        description: <Desc utility="typography">letter-spacing</Desc>
      },
      textAlign: {
        description: <Desc utility="typography">text-align</Desc>
      },
      fontStyle: {
        description: <Desc utility="typography">font-style</Desc>
      }
    },
    flex1 = {
      flex: {

        description: <Desc utility="flex">flex</Desc>
      },
      order: {

        description: <Desc utility="flex">order</Desc>
      },
      alignItems: {

        description: <Desc utility="flex">align-items</Desc>
      },
      alignContent: {

        description: <Desc utility="flex">align-content</Desc>
      },
      justifyItems: {

        description: <Desc utility="flex">justify-items</Desc>
      },
      justifyContent: {

        description: <Desc utility="flex">justify-content</Desc>
      },
      flexWrap: {

        description: <Desc utility="flex">flex-wrap</Desc>
      },
      flexDirection: {

        description: <Desc utility="flex">flex-direction</Desc>
      },
      justifySelf: {

        description: <Desc utility="flex">justify-self</Desc>
      },
      alignSelf: {

        description: <Desc utility="flex">align-self</Desc>
      }
    },
    flex2 = {
      flexGrow: {

        description: <Desc utility="flex">flex-grow</Desc>
      },
      flexShrink: {

        description: <Desc utility="flex">flex-shrink</Desc>
      },
      flexBasis: {

        description: <Desc utility="flex">flex-basis</Desc>
      }
    },
    // TODO:
    // Grid Layout
    // Background
    // Border
    // Position
    // Shadow
    grid = {},
    styledSystemDocs = {
      ...addProperties(space1, { sortWeight: -10, }),
      ...addProperties(space2, { sortWeight: -20, }),
      ...addProperties(space3, { sortWeight: -30, }),
      ...addProperties(space4, {
        sortWeight: -40,
        verbose,
      }),
      ...addProperties(space5, {
        sortWeight: -50,
        verbose,
      }),
      ...addProperties(layout1, { sortWeight: -55, }),
      ...addProperties(layout2, { sortWeight: -56 }),
      ...addProperties(color1, { sortWeight: -60 }),
      ...addProperties(color2, { sortWeight: -70, verbose }),
      ...addProperties(type, { sortWeight: -80 }),
      ...addProperties(flex1, { sortWeight: -90 }),
      ...addProperties(flex2, { sortWeight: -100, verbose })
    };

  return mergeProperties(data, styledSystemDocs);
}

const reduceEntriesToObject = (acc, [key, value]) => {
  acc[key] = value;
  return acc;
}

const addProperties = (obj = {}, newProps = {}) => {
  return Object.entries(obj)
    .map(([key = '', value = {}]) => {
      return [key, Object.assign(value, newProps)];
    })
    .reduce(reduceEntriesToObject, {});
}

const mergeProperties = (base = {}, decorator = {}) => {
  // const out = Object.assign(base, {});
  return Object.entries(base)
    .map(([key = '', value = {}]) => {
      if (!decorator[key]) {
        return [key, value];
      }
      return [key, Object.assign(value, decorator[key])];
    })
    .sort(([{ }, a], [{ }, b]) => {
      const { sortWeight: aSortWeight = 0 } = a;
      const { sortWeight: bSortWeight = 0 } = b;

      return aSortWeight < bSortWeight ? 1 : -1;
    })
    .reduce(reduceEntriesToObject, {});
}

const Desc = (props = {}) => {
  const { children, utility = '' } = props;
  const urlBase = 'https://styled-system.com/api/';
  return (
    <span>
      <a href={`${urlBase}#${utility}`} target="_blank">
        {children}
      </a>
    </span>
  );
};

const Link = (props = {}) => {
  const { children, to = '' } = props;
  return (
    <a href={to} target="_blank">
      {children}
    </a>
  );
};

export default decorateStyledSystemProps;
