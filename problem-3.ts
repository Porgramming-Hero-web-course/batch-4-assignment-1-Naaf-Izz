function countWordOccurrences(sentence: string, word: string): number {
    return sentence
      .toLowerCase() //type : string
      .split(' ')     // type is not string now, rather it is array of string : string[]
      .reduce((count: number, currentWord: string): number => currentWord === word.toLowerCase() ? count + 1 : count, 0); // Counting occurrences of word
  }
  