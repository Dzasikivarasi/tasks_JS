// Напишите функцию, которая принимает два числа. 
// Каждую секунду необходимо выводить в консоль число, начиная от первого и заканчивая вторым. 
// Используйте setInterval.

function displayNums(x, y) {
    let current = x;
    const intervalId = setInterval(() => {
        if (current <= y) {
            console.log(current);
            current++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

displayNums(2, 10);
