// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как 
// аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function getNumberOne(x) {
    return function(y) {
        return x + y;
    };
}

const addNumberOne = getNumberOne(10);
const getSum = addNumberOne(3);

console.log(getSum);
