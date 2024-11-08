class Car {
   make: string; // i could put public/private/protected/readonly here but didnt to avoid unnecessary jhamela
   model: string;
   year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getCarAge(currentYear: number = new Date().getFullYear()): number {
      return currentYear - this.year; // if your car is from future it could produce minus value which seems absurd! 
    }
  }
  