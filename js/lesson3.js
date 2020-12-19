function lesson3Task1()
{
    // через while не удобно!
    console.log('используя while: ' + usingWhile());
    // лучше через for....
    console.log('используя for:   ' + usingFor());
}

function usingWhile()
{
    let result = '';
    let number = 2;
    while(number <= 100)
    {
        if(isSimpleUsingWhile(number))
            result += number + ', ';
        number++;
    }
    return result.substring(0, result.length -2);
}

function isSimpleUsingWhile(number)
{
    let i = 2;
    while(i < number)
    {
        if(number % i == 0)
            return false;
        i++;
    }
    return true;
}

function usingFor()
{
    let result = '';
    for (let i = 2; i <= 100; i++)
        if(isSimpleUsingFor(i))
            result += i + ', ';
    return result.substring(0, result.length -2);
}

function isSimpleUsingFor(number)
{
    for (let i = 2; i < number; i++)
        if(number % i == 0)
            return false;
    return true;
}


function lesson3Task2()
{
    console.log('метод подсчета стоимости товаров в корзине:\n' + calculateCost)
}

function calculateCost(cart) 
{
    let cost = 0;
    cart.forEach((element) => {
        cost += element.cost * element.count;
    });
    return cost;
};

function lesson3Task3()
{
    const cart = [
        {name: 'apple', cost: 5, count: 2},
        {name: 'orange', cost: 6, count: 1},
        {name: 'banana', cost: 10, count: 1.5},
        {name: 'blueberry', cost: 45, count: 2.6},
        {name: 'raspberry', cost: 60, count: 0.6},
        {name: 'strawberry', cost: 65, count: 3.2}
    ];
    
    const cartCost = calculateCost(cart);
    console.log('contents of the shopping cart: ');
    cart.forEach((element) => {
        console.log(element.name + ' (' + element.cost + '$/kg) ' + element.count + 'kg');
    });
    console.log('cost: ' + cartCost + '$')
}

function lesson3Task4()
{
    for(let i = 0; i<=9; console.log(i++)){}
}

function lesson3Task5()
{
    let x = 'x';
    for(let i = 0; i < 20; i++)
    {
        console.log(x);
        x+='x';
    }
}