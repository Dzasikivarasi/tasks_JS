// Написать функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и 
// значения только собственных свойств. Данная функция не должна возвращать значение.

function getOwnProperties(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(`ключ: ${key}, значение: ${object[key]}`);
        };
    };
}
