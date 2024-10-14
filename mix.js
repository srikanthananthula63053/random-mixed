const astrologies = ["ashwini","bharani","rashi", "virgo"];
const  inspirationals = ["keep your face always", "toward the sunshine,", "and shadows will fail","behind you"];
const nonsensicals = ["why don't cats", "tell a lot of","stories?","They only have one tail."];
function mixed()  {
const astrologie = astrologies[Math.floor(Math.random() * astrologies.length )];
const inspirational = inspirationals[Math.floor(Math.random() * inspirationals.length)];
const nonsensical = nonsensicals[Math.floor(Math.random() * nonsensicals.length)];
return `${astrologie} ${inspirational} ${nonsensical}`;
}
mixed();
console.log(mixed());