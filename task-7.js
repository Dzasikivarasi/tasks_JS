// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, 
// например, знаки, null и так далее.

let array = [42, 0, 17, 0, 45, null, 'JS', 67, '', 50, 1023];

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
console.log(evenValue, oddValue, zeroValue);
