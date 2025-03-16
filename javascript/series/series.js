//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (series.length === 0) throw new Error("series cannot be empty");
    this.series = [...series].map(Number);
  };
  
  slices(sliceLength) {
    return this.isValid(sliceLength) && 
      Array.from({length:this.series.length - sliceLength + 1},
                (_,i) => this.series.slice(i, i+sliceLength));
  };

  isValid(sliceLength) {
    if (sliceLength > this.series.length) throw new Error("slice length cannot be greater than series length");
    if (sliceLength === 0) throw new Error("slice length cannot be zero");
    if (sliceLength < 0) throw new Error("slice length cannot be negative");
    return true;
  };
}