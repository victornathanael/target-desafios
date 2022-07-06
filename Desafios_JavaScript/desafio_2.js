let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

let number = 89;

if (fibonacci.includes(number)) {
    console.log(`${number} pertence a sequência de Fibonacci`);
} else {
    console.log(`${number} não pertence a sequência de Fibonacci`);
}
