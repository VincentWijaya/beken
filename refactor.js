// function findFirstStringInBracket(str) {
//   if (str.length > 0) {
//     let indexFirstBracketFound = str.indexOf("("); if (indexFirstBracketFound >= 0) {
//       let wordsAfterFirstBracket = str.substr(indexFirstBracketFound); if (wordsAfterFirstBracket) {
//         wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1); let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")"); if (indexClosingBracketFound >= 0) {
//           return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
//         } else { return ''; }
//       } else { return ''; }
//     } else { return ''; }
//   } else { return ''; }
// }

function findFirstStringInBracket(str) {
  let result = ''
  let isBracketFound = false

  if (str.length < 1) {
    return ''
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      isBracketFound = true
      continue
    }

    if (str[i] == ')') {
      isBracketFound = false
      break
    }

    if (isBracketFound) {
      result += str[i]
    }
  }

  return result
}

console.log(findFirstStringInBracket('(aku kamu)'))
console.log(findFirstStringInBracket('asdasdasd(kamu)'))
