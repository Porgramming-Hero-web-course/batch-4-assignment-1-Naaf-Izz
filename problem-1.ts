function sumArray(numbersArr: number[]): number {
    return [...numbersArr].reduce((sum, num) => sum + num, 0);
  }
  