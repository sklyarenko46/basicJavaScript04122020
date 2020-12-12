function lesson2Task1()
{
    let a = 1, b = 1, c, d;
    c = ++a; // а = 2! с = 2! преинкремент
    d = b++; // b = 2! d = 1! постинкремент
    c = (2 + ++a); //а = 3!  c = 5! преинкремент
    d = (2 + b++);// b = 3! d = 4! постинкремент
    alert(
        'ПРЕИНКРЕМЕНТ(++variable) - значение сначала увеличевается на 1 потом используется(присваевается)\n' +
        'ПОСТИНКРЕМЕНТ(variable++) - значение сначала используется(присваевается) потом увеличивается на 1'
    );
}

function lesson2Task2()
{
    alert('Сначала идет умножение а на 2, затем присвоение к а, после добавляется 1, результат = 5');
}

function lesson2Task3()
{
    const printResult = (action, a, b, result) => 
    {
        alert(action + ' ' + a + ' и ' + b + ' = ' + result);
    };

    let a = enterVariable('a');
    let b = enterVariable('b');

    if(a >= 0 && b >= 0)
        printResult('разность', a , b, (a > b ? a - b : b - a));
    if(a < 0 && b < 0)
        printResult('произведение', a , b, (a * b));
    if((a < 0 && b >= 0 )|| (a >= 0 && b < 0 ))
        printResult('сумма', a , b, (a + b));
}

function lesson2Task4()
{
    const variable = enterVariable('от 0 до 15 включительно');
    if(variable < 0 || variable > 15)
        lesson2Task4();
    let result = '';
    switch(variable) 
    {
        case 1: result+='1, ';
        case 2: result+='2, ';
        case 3: result+='3, ';
        case 4: result+='4, ';
        case 5: result+='5, ';
        case 6: result+='6, ';
        case 7: result+='7, ';
        case 8: result+='8, ';
        case 9: result+='9, ';
        case 10: result+='10, ';
        case 11: result+='11, ';
        case 12: result+='12, ';
        case 13: result+='13, ';
        case 14: result+='14, ';
        case 15: result+='15.';
    }
    alert('Числа от ' + variable + ' до 15: '  + result);
}

function lesson2Task5()
{
    alert(multiple);
    alert(division);
    alert(sum);
    alert(difference);
}

function lesson2Task6()
{
    const a = enterVariable('a');
    const b = enterVariable('b');   
   
    printMathOperationData(
        defineMathOperation(a, b, '*'),
        defineMathOperation(a, b, '/'),
        defineMathOperation(a, b, '+'), 
        defineMathOperation(a, b, '-')
    );
}

function lesson2Task7()
{
    alert('0 (ноль) - это значение числового типа(конкретное значение, число),\nnull - это особое значение объектного типа(обозначающее его полное отсутствие).\nЭто разные вещи!');
}

function lesson2Task8()
{
    const variable = enterVariable('введите число');
    const degree = enterVariable('введите степень');   

    alert(variable + ' в ' + degree + ' степени =' + exponentiation(variable, degree));
}

function exponentiation(variable, degree)
{
    if(degree === 1)
        return variable;
    return variable * exponentiation(variable, --degree);
}


function enterVariable (text) {
    let result = +prompt('введите целочисленное значение ' + text + ':')
    if(isNaN(result))
        enterVariable(text);
    return result;
};


function defineMathOperation(variable1, variable2, operation) 
{
    const collectMathOperationData = (variable1, variable2, operation, fun) =>
    {
        return { 
            variable1: variable1, 
            variable2: variable2,
            operation: operation,
            result: fun(variable1, variable2),
        };
    }
    
    switch (operation)
    {
        case '*': 
            return collectMathOperationData(variable1, variable2, operation, multiple);
        case '/':
            return collectMathOperationData(variable1,variable2, operation, division);
        case '+': 
            return collectMathOperationData(variable1,variable2, operation, sum);
        case '-': 
            return collectMathOperationData(variable1,variable2, operation, difference);
        default: return null;
    }
}

function multiple (a, b) 
{
    return a*b;
}
function division(a, b)
{
    return a/b;
}
function sum(a, b)
{
    return a+b;
}
function difference(a, b)
{
    return a-b;
}

function printMathOperationData(...mathOperationData) 
{
    let text = '';
    mathOperationData.forEach(
        function(entry) 
        {
            if(entry != null)
                text +=  entry.variable1 + ' ' + entry.operation + ' ' + entry.variable2  + ' = ' + entry.result + '\n';
        }
    );
    alert(text);
}

