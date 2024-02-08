// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, 
// является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, 
// что данные неверны. Обратите внимание на числа 0 и 1.

function defineNumberType(number) {
    if (number > 1000) {
        return "Данные неверны.";
    } else if (number < 2) {
        return "Число не простое.";
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return "Число не простое.";
        }
    }
    return "Число простое.";
};

console.log(defineNumberType(23));