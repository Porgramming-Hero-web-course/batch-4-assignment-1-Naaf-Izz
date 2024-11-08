function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return [...keys].reduce((result: boolean, key: keyof T) => result && key in obj, true);
  }
