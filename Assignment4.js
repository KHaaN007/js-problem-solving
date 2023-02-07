//Problem 1


// function mindGame(gameNum){
//     const multiplication = gameNum * 3;
//     const plus = multiplication + 10;
//     const divided = plus / 2;
//     const minus = divided - 5;

//     return minus

// }

// const gameNum = mindGame(5)
// console.log(gameNum)




// Problem 2


// function evenOdd(input) {
//     if (input.length % 2 === 0) {
//       return "even";
//     } else {
//       return "odd";
//     }
//   }

//   const input = evenOdd('chatgpt')
//   console.log(input)




//problem 3


function isLGSeven(num) {
    let difference = num % 7;
    if (difference < 0) {
      difference = - difference;
    }
    if (difference > 7) {
      return 7 - difference;
    } else {
      return num * 2;
    }
  }

  const num = isLGSeven(1)
  console.log (num)
  


//problem 4
//Not Solved yet


function findingBadData(arr) {
    let badDataCount = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}

const arr = findingBadData( -4, -9, -5, -33, -55)
console.log(arr)




//problem 5


// function gemsToDiamond(gems1, gems2, gems3) {
//     let totalDiamonds = gems1 * 21 + gems2 * 32 + gems3 * 43;
//     if (totalDiamonds >= 1000) {
//         return totalDiamonds - 2000;
//     } else {
//         return totalDiamonds;
//     }
// }


// const gemsConverter = gemsToDiamond(1, 1, 1)
// console.log(gemsConverter)