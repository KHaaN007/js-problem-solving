// Problem 1


function mindGame(gameNum){
    const multiplication = gameNum * 3;
    const plus = multiplication + 10;
    const divided = plus / 2;
    const minus = divided - 5;

    return minus

}






// Problem 2


function evenOdd(input) {
    if (input.length % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }

//problem 3

function isLGSeven(num) {
  let difference = num - 7;
  if (difference < 7) {
    return difference;
  } else {
    return num * 2;
  }
}


//problem 4

function findingBadData(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count = count+1;
      }
    }
    return count;
  }


// problem 5


function gemsToDiamond(gems1, gems2, gems3) {
    let totalDiamonds = gems1 * 21 + gems2 * 32 + gems3 * 43;
    if (totalDiamonds >= 1000) {
        return totalDiamonds - 2000;
    } else {
        return totalDiamonds;
    }
}


