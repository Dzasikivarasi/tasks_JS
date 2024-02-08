// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.

const isValid = (x, n) => {
    if (
        typeof x !== 'number' || isNaN(x) || !Number.isInteger(x) || x < 1 ||
        typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n < 1) {
        return false;
    }
    return true;
}

const calculateExponent = (x, n) => {
    if (!isValid(x, n)) {
        console.log('Введены невалидные значения');
        return;
    }

    if (n === 0) {
        return 1;
    }

    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(calculateExponent(3, 3));
