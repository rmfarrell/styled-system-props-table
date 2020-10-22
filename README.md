# Styled System props table

This is a props table generator for documenting a React component's props using [Styled System](https://styled-system.com). The library can be extended to
suit your own implementation of styled-system but the idea is to output a table of props to document components with wide, highly repetitive props footprints 
by analyzing their `propTypes` and `defaultProps` settings and applying rich documentation to the table. This has several advantages over the [Storybook 
Docs add-on's props table generator](https://github.com/storybookjs/storybook/tree/master/addons/docs):

- Richer documenation, including links to Styled System documenation, so any component consumer can easily understand it.
- Inline references to your custom theme. Your library consumers can easily tell which values are available on your theme.
- Props are sorted by interpolation function so it's easy to quickly scan which prop categories are being used.
- Extending prop descriptions is done in the component itself using JSX, rather than reading code hints from the source file at compile time.

This component is recommned for use with Storybook, but compatible with any `jsx`-compatible format.

## Install

```
yarn add styled-system-props-table
```

## Simple Example

Only one prop is required `component` which takes a React component.

```jsx
import { StyledSystemPropsTable } from 'sytled-system-props-table'
import Card from '../path/to/components/Card'

<StyledSystemPropsTable component={Card} />
```

## Less-Simple Example

You can intercept and decorate individual prop rows as well, however all props should have reasonable data attached to them by default. The example below will populate a column for the `variant` prop on the Card column.


```jsx
import { StyledSystemPropsTable, PropRow } from 'sytled-system-props-table'
import Card from 'path-to-components/Card'
import theme from './path/to/your-styled-system-theme'

const transformProps = (name = '', properties = {}) => {
  if (name === 'variant') return {
    ...properties,
    description: <ul>
      <li><strong>EMPTY</strong> Empty placeholder card</li>
      <li><strong>PRODUCT</strong> applies rouned corner and displays a ProductImage</li>
      <li>SHARP_TOP_CORNER</li>
      ...
    </ul>
  }
}

<StyledSystemPropsTable 
  component={Card} 
  theme={theme}
  transformProps={transformProps}
/>
```

Other data you can modify this way include

`description`: prop description

`type`: Overrides the type from `propTypes` assignmemnt

`themeKey`: If `theme` is passed, available theme properties relevant to the prop will appear in the Theme Values column 

`required`

`sortWeight`: make the prop appear higher or lower in the output table. Highest appears first. Default is `0`

## DEMO

TODO

## Extending

This library exports `props-table` as well as `styled-system-props-table`. The difference is that `styled-system-props-table` includes a `props-table` wrapped with a large library of prop transformers mapped to the styled-system API. However, if you are using another interface you wrap your own `props-table` with your own transformers.

```jsx
<PropsTable transformProps={[yourOwnStyledSystem, otherDecorators]} component={...}/>
```

### Customization

TODO

### Caveats

at the moment you must call in [parse-prop-types](https://github.com/diegohaz/parse-prop-types) at the root of your React project. This is necessary because under the hood, this library depends on it to preserve proptype metadata.


