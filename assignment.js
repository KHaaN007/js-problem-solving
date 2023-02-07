
//Problem 1 

// function mindGame(result){
//     const goon = result * 3;
//     const plus = goon + 10;
//     const vag = plus / 2;
//     const biog = vag - 5;

//     return biog

// }

// const final = mindGame(33)
// console.log(final)


// problem 2


// function evenOdd(name){
//     const fullname = name.length % 2;
//     if (fullname === 0){
//         return 'Even'
//     }

//     else{
//         return 'Odd'
//     }

// }

// const result = evenOdd('pherokhan')
// console.log(result);




// porblem 3

function isLGSeven(number) {
    return (Math.abs(number - 7) < 7) ? (7 - number) : (number * 2);
}

const result = isLGSeven(6)
console.log(result)

//problem 4



// function findingBadData(array) {
//     let badDataCount = 0;
    
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < 0) {
//         badDataCount++;
//       }
//     }
//     return badDataCount;
//   }
  
//   const result = findingBadData( -4, -9, -5, -33, -55 )
//   console.log(result)




//problem 5


function gemsToDiamond(gems1, gems2, gems3) {
    let totalDiamonds = gems1 * 21 + gems2 * 32 + gems3 * 43;
    if (totalDiamonds >= 1000) {
        return totalDiamonds - 2000;
    } else {
        return totalDiamonds;
    }
}


const gemsConverter = gemsToDiamond(20, 200, 50)
console.log(gemsConverter)