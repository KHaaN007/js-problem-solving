// Problem 1


function mindGame(gameNum){
    const multiplication = gameNum * 3;
    const plus = multiplication + 10;
    const divided = plus / 2;
    const minus = divided - 5;

    return minus

}

const gameNum = mindGame(33)
console.log(gameNum)




// Problem 2


function evenOdd(input) {
    if (input.length % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }

  const input = evenOdd('chatgpt')
  console.log(input)




// problem 3
// not solved yet





// problem 4
// Not Solved yet





// problem 5


function gemsToDiamond(gems1, gems2, gems3) {
    let totalDiamonds = gems1 * 21 + gems2 * 32 + gems3 * 43;
    if (totalDiamonds >= 1000) {
        return totalDiamonds - 2000;
    } else {
        return totalDiamonds;
    }
}


const gemsConverter = gemsToDiamond(1, 1, 1)
console.log(gemsConverter)