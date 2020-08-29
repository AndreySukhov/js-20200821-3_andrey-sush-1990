/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

  if (!size && size !== 0) {
    return string
  }

  if (size === 0 || !string) {
    return ''
  }

  let res = '';
  let lettersInRow = '';

  Array.from(string).forEach((char) => {
    if (lettersInRow.includes(char)) {
      lettersInRow += char;
      if (lettersInRow.length <= size) {
        res += char;
      }
    } else {
      res += char;
      lettersInRow = char;
    }
  })

  return res;
}
