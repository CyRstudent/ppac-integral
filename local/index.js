const prompt = require('prompt-sync')();
const n = Number(
	prompt('Introduce el numero de partes por el cual quieres dividir: ')
);
const x1 = Number(
	prompt('Introduce el valor de x1: ')
);
const x2 = Number(
	prompt('Introduce el valor de x2: ')
);
const exp = prompt('Introduce la expresion de f(x) (Ej. x*x): ')
let integral = 0;
let x = x1;
const y = [0];
const dx = (x2 - x1) / n;
for(let i = 1; i <= n; i++) {
	const res = eval(exp);
	y.push(res);
	integral += dx * y[y.length - 1];
	x += dx;
}
console.log(`Resultado de la integral = ${integral}`);
