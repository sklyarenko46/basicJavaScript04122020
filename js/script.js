function temperatureConverter()
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

function setAdminName()
{
    let admin;
    const name = 'Василий';
    admin = name;
    alert( 'А вы знали что администратора зовут ' + admin + '?')
}

function whatIsExpressionEqualTo()
{
    alert( 'JS-выражение 1000 + "108" = ' + 1000 + "108")
}

function scriptAttributes()
{
    alert('Почитала, даже почти поняла, но ваше объяснение будет не лишним :)')
}