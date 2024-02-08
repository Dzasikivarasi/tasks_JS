// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, 
// например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, 
// проанализируйте синтаксис.

let arrayTest = [42, 0, 17, 0, 45, null, 'JS', 67, '', 50, 1023];

function countNumberTypes(array) {
    let evenValue = 0;
    let oddValue = 0;
    let zeroValue = 0;
    array.forEach(item => {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) {
                zeroValue++;
            } else if (item % 2 === 0) {
                evenValue++;
            } else {
                oddValue++;
            }
        }
    });
    let result = `четные: ${evenValue}, нечетные: ${oddValue}, ноль:${zeroValue}`
    return result;
}

console.log(countNumberTypes(arrayTest));
