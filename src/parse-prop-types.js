import _parsePropTypes from 'parse-prop-types';

const parsePropTypes = (component) => {
  if (!component) {
    console.error('component required.')
    return {}
  }
  return Object.entries(_parsePropTypes(component))
    .map(transformParsedProps)
    .reduce(reduceEntriesToObject, {});
}

const transformParsedProps = ([key, value]) => {
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

const typeToString = (type) => {
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

const reduceEntriesToObject = (acc, [key, value]) => {
  acc[key] = value;
  return acc;
}

export default parsePropTypes;
