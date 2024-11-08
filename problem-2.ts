function removeDuplicates(numbersarr: number[]): number[] {
    return numbersarr.filter((num: number, index: number): boolean => numbersarr.indexOf(num) === index);
  }