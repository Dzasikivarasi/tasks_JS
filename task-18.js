// Переписать консольное приложение из task-4 на классы.

class ElectricalDevice {
    constructor(power){
        this.power = power;
        this.isPlugged = false;
    }

    plugIn() {
        this.isPlugged = true;
        console.log(this.name + ' подключен к сети.');
    }

    plugOff() {
        this.isPlugged = false;
        console.log(this.name + ' отключен от сети.');
    }
}

class Laptop extends ElectricalDevice {
    constructor(name, power) {
        super(power);
        this.name = name;
    }
}

class Piano extends ElectricalDevice {
    constructor(name, power, brand) {
        super(power);
        this.name = name;
        this.brand = brand;
    }
}

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
