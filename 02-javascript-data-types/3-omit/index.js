/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  return Object.entries({...obj}).reduce((acc, curr) => {
    if (!fields.includes(curr[0])) {
      return {...acc, [curr[0]]: curr[1]}
    }
    return acc
  }, {})
};
