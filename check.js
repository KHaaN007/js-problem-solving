//problem 4

// function isLGSeven(num) {
//     let difference = num - 7;
//     if (difference < 7) {
//       return difference;
//     } else {
//       return num * 2;
//     }
//   }
  
  
//   const result = isLGSeven(6)
//   console.log(result)

//problem 5

const arr = [1,2,5]

function findingBadData(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count = count+1;
      }
    }
    return count;
  }

  const result = findingBadData(arr)
  console.log(result)
