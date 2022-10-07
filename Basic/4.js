// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const a = 5, b = 6, c = 7;
const semi_perimeter = ((a + b + c) / 2);

const areaOfATriangle = Math.sqrt(semi_perimeter * ((semi_perimeter - a) * (semi_perimeter - b) * (semi_perimeter - c)));
console.log(semi_perimeter);
console.log(areaOfATriangle);