/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

function bubbleSort(numArray) {
  //loop length
  const arrayLen = numArray.length;

  for (let i = 0; i < arrayLen; i++) {
    //cycle through arr items
    for (let j = 0; j < arrayLen; j++) {
      //compare numbers in array
      if (numArray[j] > numArray[j + 1]) {
        let temp = numArray[j];
        numArray[j] = numArray[j + 1];
        numArray[j + 1] = temp;
      }
    }
  }

  return numArray;
}

bubbleSort([12, 16, 44, 32, 2, 8]);
