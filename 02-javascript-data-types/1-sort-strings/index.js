/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param !== 'asc' && param !== 'desc') {
    console.error('invalid sort direction')
    return arr
  }

  return [...arr].sort((a, b) => {

    const isAsc = param === 'asc'
    const str = isAsc ? a: b
    const compareString = isAsc ? b : a

    return str.localeCompare(compareString, undefined, { caseFirst: 'upper' })
  })

}
