// Определите иерархию электроприборов. 
// Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает. Реализуйте на прототипах.


// Родительский конструктор
function ElectricalDevice(power) {
    this.power = power;
    this.isPlugged = false;
}

// Функция включения
ElectricalDevice.prototype.plugIn = function () {
    this.isPlugged = true;
    console.log(this.name + ' подключен к сети.');
}
ElectricalDevice.prototype.plugOff = function () {
    this.isPlugged = false;
    console.log(this.name + ' отключен от сети.');
}

// Конструктор для ноутбука
function Laptop(name, power) {
    ElectricalDevice.call(this, power);
    this.name = name;
}

Laptop.prototype = new ElectricalDevice();

// Конструктор для пианино
function Piano(name, power, brand) {
    ElectricalDevice.call(this, power);
    this.name = name;
    this.brand = brand;
}

Piano.prototype = new ElectricalDevice();

// Экземпляры
const laptop = new Laptop('Ноутбук', 40);
const piano = new Piano('Пианино', 80, 'Yamaha');

// Считаем сумму затраченной электроэнергии
function defineTotalPowerConsumption(devices) {
    return devices.reduce((sum, device) => {
        if (device.isPlugged) {
            return sum + device.power;
        }
        return sum;
    }, 0);
}

// Включаем приборы и проверяем суммарную потребляемую мощность
laptop.plugIn();
piano.plugIn();

const allDevices = [laptop, piano];
console.log('Затрачиваемая электроэнергия: ', defineTotalPowerConsumption(allDevices) + 'Вт');
