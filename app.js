// const checkCashRegister = (price, cash, cid) => {
//   let changeValue = cash - price;
//   let pennies = cid[0][1] / 0.01;
//   let nickels = (cid[1][1] / 0.05).toFixed(0);
//   let dimes = cid[2][1] / 0.1;
//   let quarters = cid[3][1] / 0.25;
//   let ones = cid[4][1];
//   let fives = cid[5][1] / 5;
//   let tens = cid[6][1] / 10;
//   let twenties = cid[7][1] / 20;
//   let hundreds = cid[8][1] / 100;
//   // Calculate all the availble change
//   let allChange = cid.reduce((acc, curr) => {
//     acc += curr[1];
//     return acc;
//   }, 0)
//   allChange = allChange.toFixed(2);
//   if(changeValue > allChange) {
//     console.log({status: "INSUFFICIENT_FUNDS", change: []})
//     return {status: "INSUFFICIENT_FUNDS", change: []}
//   }

//   [changeValue, hundreds] = calcValue(changeValue, hundreds)
//   console.log(changeValue, hundreds);
// }

// const integerDivision = (numer1, number2) => Math.floor(numer1 / number2);

// const calcValue = (value, currency) => {
//   for(currency; currency > 0; currency--) {
//     console.log(value);
//     if(integerDivision(value, 100) > 0) {
//       value -= 100;
//     } else {
//       break
//     }
//   }
//   return [value, currency]
// }

const checkCashRegister = (price, cash, cid) => {
  let changeValue = cash - price;

  console.log(changeValue);

  let hundreds = cid[8][1] / 100;
  let i = 1
  while (i > 0) {
    if (changeValue > cid[8][1]) {
      cid[8][1] -= 100
      console.log(cid[8][1])
      changeValue = changeValue - 100
      console.log(changeValue)
    }
    i--
  }
  console.log(cid[8][1])
  console.log(changeValue)

}

checkCashRegister(19.5, 200, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 200]
])

// console.log(2357.5 % 100)
// console.log(57.5 - (integerDivision(55, 20) * 20))
// console.log(17.5 - (integerDivision(15, 10) * 10))
// console.log(7.5 - (integerDivision(7.5, 5) * 5))
// console.log(2.5 - (integerDivision(2.5, 1)))
// console.log(0.5 - (integerDivision(0.5, 0.25) * 0.25))
