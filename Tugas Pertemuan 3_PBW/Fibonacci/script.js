function printFibonacci() {
    const n = document.getElementById('fibInput').value;
    let fib = [0, 1];

    // Menghitung deret Fibonacci
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    // Menampilkan hasil di halaman web
    document.getElementById('fibOutput').innerText = fib.slice(0, n).join(', ');

    // Menampilkan hasil di console
    console.log("Deret Fibonacci:");
    console.log(fib.slice(0, n).join(', '));
}