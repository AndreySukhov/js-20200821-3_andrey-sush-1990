/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj) {

    if (!Object.keys(obj).length) {
      return {};
    }

    let res = {};

    Object.entries(obj).forEach((entry) => {
      res[entry[1]] = entry[0];
    })

    return res;
  }
}
