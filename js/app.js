addEventListener('load', () => {
    main();
});

function main() {
    let n = parseInt(prompt('Escriba n:'));
    if (Number.isInteger(n) && n >= 0) {
        let resultado = cal2PowN(n);
        console.log(resultado);
    } else {
        console.error('n debe ser un número entero mayor igual que cero');
    }
}

function cal2PowN(n) {
    if (n === 0) {
        return 1;
    }
    return 2 * cal2PowN(n - 1);
}
