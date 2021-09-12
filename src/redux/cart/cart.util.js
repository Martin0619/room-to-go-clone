export const round = (number, precision = 2) =>
  Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
