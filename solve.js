const checkAnagrams = (stringA, stringB) => {
    return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (str) => {
    return str.toLowerCase().split('').sort().join('')
}

const anagram = (arr) => {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const first = cleanString(arr[i])
    const temp = [arr[i]]

    for (let j = 0; j < arr.length; j++) {
      const second = cleanString(arr[j])

      if (i != j && checkAnagrams(first, second)) {
        temp.push(arr[j])
        arr.splice(j, 1)
        j--
      }
    }
    result.push(temp)
    arr.splice(i, 1)
    i--
  }

  return result
}

console.log(anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))
console.log(anagram(['CARS', 'REPAID', 'DUES', 'NOSE', 'SIGNED', 'LANE', 'PAIRED', 'ARCS', 'GRAB', 'USED', 'ONES', 'BRAG', 'SUED', 'LEAN', 'SCAR', 'DESIGN']))