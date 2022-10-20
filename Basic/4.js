// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const x = 5, y = 6, z = 7;
let semiperimeter = (x + y + z) / 2;
let area = 0;

area = Math.sqrt(((semiperimeter - x) * (semiperimeter - y) * (semiperimeter - z)) * semiperimeter);

console.log(area);