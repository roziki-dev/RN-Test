// funtion conver to roman number
export const Romawi = (number) => {
  let roman = ''
  const romanNumber = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ]
  for (let i = 0; i < romanNumber.length; i++) {
    while (number >= romanNumber[i][1]) {
      roman += romanNumber[i][0]
      number -= romanNumber[i][1]
    }
  }
  return roman
}
