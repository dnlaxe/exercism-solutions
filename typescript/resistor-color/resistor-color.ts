export const colorCode = (color : string) : number => {
  return COLORS.findIndex(c => c.toLowerCase() === color.toLowerCase());
}

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
