/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  const directions = {
    asc: 1,
    desc: -1
  };


  if (!directions[param]) {
    console.error('invalid sort direction param')
    return [...arr]
  }

  return [...arr].sort((a, b) => {

    return directions[param] * a.localeCompare(b, 'default', { caseFirst: 'upper' })
  })

}
