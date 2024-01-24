function calculateAverage(numbers) {
    if (numbers.length === 0) {
     
      return false;
    }
  
   
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
  
    return average;
  }
  

  const numbersArray = [1, 2, 3, 4, 5];
  
 
  const result = calculateAverage(numbersArray);
  
  console.log(result);