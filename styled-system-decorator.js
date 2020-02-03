import React from 'react';
import { reduceEntriesToObject } from './helpers';

/**
 *
 * @prop {object} data
 */
function decorateStyledSystemPros(data = {}) {
  const responsiveSpace = ['number', 'string', 'number[]', 'string[]'],
    responsiveString = ['string', 'string[]'],
    verbose = true,
    space1 = {
      m: {
        desc: <Desc utility="space">margin</Desc>
      },
      p: {
        desc: <Desc utility="space">padding</Desc>
      }
    },
    space2 = {
      mx: {
        desc: <Desc utility="space">margin-left & margin-right</Desc>
      },
      my: {
        desc: <Desc utility="space">margin-top & margin-bottom</Desc>
      },
      px: {
        desc: <Desc utility="space">padding-left & padding-right</Desc>
      },
      py: {
        desc: <Desc utility="space">padding-top & padding-bottom</Desc>
      }
    },
    space3 = {
      mt: {
        desc: <Desc utility="space">margin-top</Desc>
      },
      mr: {
        desc: <Desc utility="space">margin-right</Desc>
      },
      mb: {
        desc: <Desc utility="space">margin-bottom</Desc>
      },
      ml: {
        desc: <Desc utility="space">margin-left</Desc>
      },
      pt: {
        desc: <Desc utility="space">padding-top</Desc>
      },
      pr: {
        desc: <Desc utility="space">padding-right</Desc>
      },
      pb: {
        desc: <Desc utility="space">padding-bottom</Desc>
      },
      pl: {
        desc: <Desc utility="space">padding-left</Desc>
      }
    },
    space4 = {
      marginX: {
        desc: <Desc utility="space">margin-left & margin-right</Desc>
      },
      marginY: {
        desc: <Desc utility="space">margin-top & margin-bottom</Desc>
      },

      paddingX: {
        desc: <Desc utility="space">padding-left & padding-right</Desc>
      },
      paddingY: {
        desc: <Desc utility="space">padding-top & padding-bottom</Desc>
      }
    },
    space5 = {
      margin: {
        desc: <Desc utility="space">margin</Desc>
      },
      marginTop: {
        desc: <Desc utility="space">margin-top</Desc>
      },
      marginRight: {
        desc: <Desc utility="space">margin-right</Desc>
      },
      marginBottom: {
        desc: <Desc utility="space">margin-bottom</Desc>
      },
      marginLeft: {
        desc: <Desc utility="space">margin-left</Desc>
      },
      padding: {
        desc: <Desc utility="space">padding</Desc>
      },
      paddingTop: {
        desc: <Desc utility="space">padding-top</Desc>
      },
      paddingRight: {
        desc: <Desc utility="space">padding-right</Desc>
      },
      paddingBottom: {
        desc: <Desc utility="space">padding-bottom</Desc>
      },
      paddingLeft: {
        desc: <Desc utility="space">padding-left</Desc>
      }
    },
    layout1 = {
      width: {
        desc: <Desc utility="layout">width</Desc>
      },
      maxWidth: {
        desc: <Desc utility="layout">max-width</Desc>
      },
      size: {
        desc: <Desc utility="layout">width & height</Desc>
      },
      height: {
        type: responsiveSpace,
        desc: <Desc utility="layout">height</Desc>
      }
    },
    layout2 = {
      display: {
        type: ['string', 'string[]'],
        desc: <Desc utility="layout">display</Desc>
      },
      minWidth: {
        type: responsiveSpace,
        desc: <Desc utility="layout">min-width</Desc>
      },
      minHeight: {
        type: responsiveSpace,
        desc: <Desc utility="layout">min-height</Desc>
      },
      maxHeight: {
        type: responsiveSpace,
        desc: <Desc utility="layout">max-height</Desc>
      },
      verticalAlign: {
        type: responsiveString,
        desc: <Desc utility="layout">vertical-align</Desc>
      },
      overflow: {
        type: responsiveString,
        desc: <Desc utility="layout">overflow</Desc>
      },
      overflowX: {
        type: responsiveString,
        desc: <Desc utility="layout">overflow-x</Desc>
      },
      overflowY: {
        type: responsiveString,
        desc: <Desc utility="layout">overflow-x</Desc>
      }
    },
    color1 = {
      color: {
        type: [`string`],
        desc: <Desc utility="color">padding-left</Desc>
      },
      bg: {
        type: [`string`],
        desc: <Desc utility="color">padding-left</Desc>
      }
    },
    color2 = {
      backgroundColor: {
        type: [`string`],
        desc: <Desc utility="color">padding-left</Desc>
      }
    },
    type = {
      fontFamily: {
        type: ['string'],
        desc: <Desc utility="typography">font-family</Desc>
      },
      fontSize: {
        type: responsiveSpace,
        desc: <Desc utility="typography">font-size</Desc>
      },
      fontWeight: {
        type: responsiveString,
        desc: <Desc utility="typography">font-weight</Desc>
      },
      lineHeight: {
        type: responsiveSpace,
        desc: <Desc utility="typography">line-height</Desc>
      },
      letterSpacing: {
        type: responsiveString,
        desc: <Desc utility="typography">letter-spacing</Desc>
      },
      textAlign: {
        type: responsiveString,
        desc: <Desc utility="typography">text-align</Desc>
      },
      fontStyle: {
        type: responsiveSpace,
        desc: <Desc utility="typography">font-style</Desc>
      }
    },
    flex1 = {
      flex: {
        type: responsiveSpace,
        desc: <Desc utility="flex">flex</Desc>
      },
      order: {
        type: responsiveSpace,
        desc: <Desc utility="flex">order</Desc>
      },
      alignItems: {
        type: responsiveString,
        desc: <Desc utility="flex">align-items</Desc>
      },
      alignContent: {
        type: responsiveString,
        desc: <Desc utility="flex">align-content</Desc>
      },
      justifyItems: {
        type: responsiveString,
        desc: <Desc utility="flex">justify-items</Desc>
      },
      justifyContent: {
        type: responsiveString,
        desc: <Desc utility="flex">justify-content</Desc>
      },
      flexWrap: {
        type: responsiveString,
        desc: <Desc utility="flex">flex-wrap</Desc>
      },
      flexDirection: {
        type: responsiveString,
        desc: <Desc utility="flex">flex-direction</Desc>
      },
      justifySelf: {
        type: responsiveString,
        desc: <Desc utility="flex">justify-self</Desc>
      },
      alignSelf: {
        type: responsiveString,
        desc: <Desc utility="flex">align-self</Desc>
      }
    },
    flex2 = {
      flexGrow: {
        type: responsiveString,
        desc: <Desc utility="flex">flex-grow</Desc>
      },
      flexShrink: {
        type: responsiveString,
        desc: <Desc utility="flex">flex-shrink</Desc>
      },
      flexBasis: {
        type: responsiveString,
        desc: <Desc utility="flex">flex-basis</Desc>
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
      ...addProperties(space1, { sortWeight: -10, type: responsiveSpace }),
      ...addProperties(space2, { sortWeight: -20, type: responsiveSpace }),
      ...addProperties(space3, { sortWeight: -30, type: responsiveSpace }),
      ...addProperties(space4, {
        sortWeight: -40,
        verbose,
        type: responsiveSpace
      }),
      ...addProperties(space5, {
        sortWeight: -50,
        verbose,
        type: responsiveSpace
      }),
      ...addProperties(layout1, { sortWeight: -55, type: responsiveSpace }),
      ...addProperties(layout2, { sortWeight: -56 }),
      ...addProperties(color1, { sortWeight: -60 }),
      ...addProperties(color2, { sortWeight: -70, verbose }),
      ...addProperties(type, { sortWeight: -80 }),
      ...addProperties(flex1, { sortWeight: -90 }),
      ...addProperties(flex2, { sortWeight: -100, verbose })
    };

  return mergeProperties(data, styledSystemDocs);
}

function addProperties(obj = {}, newProps = {}) {
  return Object.entries(obj)
    .map(([key = '', value = {}]) => {
      return [key, Object.assign(value, newProps)];
    })
    .reduce(reduceEntriesToObject, {});
}

function mergeProperties(base = {}, decorator = {}) {
  // const out = Object.assign(base, {});
  return Object.entries(base)
    .map(([key = '', value = {}]) => {
      if (!decorator[key]) {
        return [key, value];
      }
      return [key, Object.assign(value, decorator[key])];
    })
    .sort(([{}, a], [{}, b]) => {
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

export default decorateStyledSystemPros;
