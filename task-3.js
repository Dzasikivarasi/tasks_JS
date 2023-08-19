// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

const str = "Hello";
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
