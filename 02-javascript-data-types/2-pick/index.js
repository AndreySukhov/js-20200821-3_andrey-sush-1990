/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  return Object.entries({...obj}).reduce((acc, curr) => {
    if (fields.includes(curr[0])) {
      return {...acc, [curr[0]]: curr[1]}
    };
    return acc
  }, {});
};
