function fibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo.slice(0, n);
}

document.getElementById('calcular').addEventListener('click', function() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (isNaN(numero) || numero <= 0) {
        alert('Por favor, ingrese un número entero positivo.');
        return;
    }

    let fiboArray = fibonacci(numero);
    fiboArray.forEach(num => {
        let li = document.createElement('li');
        li.textContent = num;
        resultado.appendChild(li);
    });
});

document.getElementById('limpiar').addEventListener('click', function() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
});

document.getElementById('salir').addEventListener('click', function() {
    window.close();
});


