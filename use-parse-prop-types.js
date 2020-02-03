import parsePropTypes from 'parse-prop-types';
import { reduceEntriesToObject } from './helpers';

function useParsePropTypes(component) {
  return Object.entries(parsePropTypes(component))
    .map(transformParsedProps)
    .reduce(reduceEntriesToObject, {});
}

// -- Helpers

function transformParsedProps([key, value]) {
  const { required, defaultValue = {}, type = {} } = value;
  const defaultValueJson = JSON.stringify(defaultValue.value);
  const typeString = typeToString(type);
  return [
    key,
    {
      type: typeString,
      defaultValue: defaultValueJson,
      required
    }
  ];
}

function typeToString(type) {
  const { name = '', value = {} } = type;
  if (name === 'arrayOf') {
    return `${value.name}[]`;
  }
  if (name === 'oneOf') {
    return value.map(prop => {
      return typeToString(prop);
    });
  }
  if (name === 'oneOfType') {
    return value.map(prop => {
      return typeToString(prop);
    });
  }
  return name;
}

export default useParsePropTypes;
