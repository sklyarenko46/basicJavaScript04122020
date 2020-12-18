function lesson1Task1()
{
    let temperatureF = enterTemperatureF('');
    while(isNaN(temperatureF))
        temperatureF = enterTemperatureF('Значение некорректно!\n');

    let temperatureC = (temperatureF - 32) * 5/9;
    alert( temperatureF + '°F градусов по Фаренгейту = ' + temperatureC.toFixed(2) + '℃ градусов по Цельсию')
}

function enterTemperatureF(additionalMsg)
{
    return +prompt(additionalMsg + 'Введите температуру в градусах по Фаренгейту: ');
}

function lesson1Task2()
{
    let admin;
    const name = 'Василий';
    admin = name;
    alert( 'А вы знали что администратора зовут ' + admin + '?')
}

function lesson1Task3()
{
    let result = 1000 + '108';
    alert('JS-выражение 1000 + "108" = ' + result);
}

function lesson1Task4()
{
    alert('Окей! Почитала)');
}