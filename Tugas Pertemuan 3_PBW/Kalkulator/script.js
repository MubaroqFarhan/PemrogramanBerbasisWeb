const add = (...numbers) => numbers.reduce((a, b) => a + b, 0);
const subtract = (...numbers) => numbers.reduce((a, b) => a - b);
const multiply = (...numbers) => numbers.reduce((a, b) => a * b, 1);
const divide = (...numbers) => numbers.reduce((a, b) => a / b);
const modulus = (...numbers) => numbers.reduce((a, b) => a % b);

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        case 'modulus':
            result = modulus(num1, num2);
            break;
        default:
            result = 'Operasi tidak valid';
    }

    // Menampilkan hasil di halaman web
    document.getElementById('result').innerText = `Hasil: ${result}`;

    // Menampilkan hasil di console
    console.log(`Operasi: ${operation}`);
    console.log(`Angka 1: ${num1}`);
    console.log(`Angka 2: ${num2}`);
    console.log(`Hasil: ${result}`);
}