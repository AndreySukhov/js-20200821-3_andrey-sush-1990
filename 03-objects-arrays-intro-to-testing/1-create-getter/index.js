/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

  const splitArr = path.split('.')

  return (obj) => {
    return splitArr.reduce((acc, cur) => {
      if (acc) {
        return acc[cur]
      }
    }, obj)
  }
}
