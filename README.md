# Styled System props table

This is a props table generator for documenting a React component's props using [Styled System](https://styled-system.com). The library can be extended to
suit your own implementation of styled-system but the idea is to output a table of props to document components with wide, highly repetitive props footprints 
by analyzing their `propTypes` and `defaultProps` settings and applying rich documentation to the table. This has several advantages over the [Storybook 
Docs add-on's props table generator](https://github.com/storybookjs/storybook/tree/master/addons/docs):

- Richer documenation, including links to Styled System documenation, so any component consumer can easily understand it.
- Props are sorted by interpolation function so it's easy to quickly scan which prop categories are being used.
- Table has highlights custom props for faster readability
- Extending prop descriptions is done in the component itself using JSX, rather than reading code hints from the source file at compile time.

Compatible with `csf`, `mdx`, or any `jsx`-compatible format.

## Install

```
yarn add styled-system-props-table
```

## Simple Example

Only one prop is required `component` which takes a React component.

```jsx
import { StyledSystemPropsTable } from 'sytled-system-props-table'
import Card from 'path-to-components/Card'

<StyledSystemPropsTable component={Card} />
```

## Less-Simple Example

You can intercept and decorate individual prop rows as well. The component contains a render function which passes an object of all analyzed props properties 
as its argument. Just import the PropRow component and give it a name prop which matches the name of the prop you want to modify.

```jsx
import { StyledSystemPropsTable, PropRow } from 'sytled-system-props-table'
import Card from 'path-to-components/Card'

<StyledSystemPropsTable component={Card} >
  {(props) => {
    return [
      <PropRow name="someProp" {...props.someProp}>
        Put a rich description here. This is JSX so go nuts.
      </PropRow>
    ]
  }}
</StyledSystemPropsTable>
```

## DEMO

TODO

## Extending the Styled System decorator

TODO


