let a = prompt('Enter a:', '');
let p = prompt('Enter p:', '');
let m1 = prompt('Enter m1:', '');
let m2 = prompt('Enter m2:', '');

let G = (a, p, m1, m2) => 4 * Math.pow(Math.PI, 2) * Math.pow(a, 3) / (Math.pow(p, 2) * (m1 + m2));

alert ( 'G = ' + G(a, p, m1, m2) );