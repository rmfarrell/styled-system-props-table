function reduceEntriesToObject(acc, [key, value]) {
    acc[key] = value;
    return acc;
  }
  
  export { reduceEntriesToObject };