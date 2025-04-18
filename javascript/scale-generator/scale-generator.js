//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
    this.tonicUpperCase = tonic.charAt(0).toUpperCase() + tonic.slice(1).toLowerCase(); 

    const sharpMajors = ['C', 'G', 'D', 'A', 'E', 'B', 'F#'];
    const sharpMinors = ['a', 'e', 'b', 'f#', 'c#', 'g#', 'd#'];
    const flatMajors = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb'];
    const flatMinors = ['d', 'g', 'c', 'f', 'bb', 'eb'];
    const sharpScale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const flatScale = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

    if (sharpMajors.includes(this.tonic)) { this.scale = sharpScale.slice(sharpScale.indexOf(this.tonic)).concat(sharpScale.slice(0, sharpScale.indexOf(this.tonic)));}
    if (sharpMinors.includes(this.tonic)) { this.scale = sharpScale.slice(sharpScale.indexOf(this.tonicUpperCase)).concat(sharpScale.slice(0, sharpScale.indexOf(this.tonicUpperCase)));}
    if (flatMajors.includes(this.tonic)) { this.scale = flatScale.slice(flatScale.indexOf(this.tonic)).concat(flatScale.slice(0, flatScale.indexOf(this.tonic)));}
    if (flatMinors.includes(this.tonic)) { this.scale = flatScale.slice(flatScale.indexOf(this.tonicUpperCase)).concat(flatScale.slice(0, flatScale.indexOf(this.tonicUpperCase)));}
  }

  chromatic() {
    return this.scale;
  }

  interval(intervals) {
    const shift = [...intervals].map(letter => letter === 'm' ? 1 : letter === 'M' ? 2 : 3);
    let pos = 0;
    return shift.reduce((acc, val) => {
      pos += val;
      acc.push(this.scale[pos % this.scale.length]);
      return acc;
    }, [this.scale[0]]);
  }
}