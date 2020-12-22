'use strict'

function lesson4Task1()
{
    let obj = numberToObject(1000);
    console.log(obj.toString());
    obj = numberToObject(945);
    console.log(obj.toString());
    obj = numberToObject(94);
    console.log(obj.toString());
    obj = numberToObject(9);
    console.log(obj.toString());
    obj = numberToObject();
    console.log(obj.toString());
    obj = numberToObject(-1);
    console.log(obj.toString());
}

function numberToObject(number)
{
    const obj = {
        units: 0,
        tens: 0,
        hundreds: 0,
        complete: false,
        fill(number)
        {
            if(!isNaN(number) && number >= 0 && number <= 999)
            {
                let numberAsString = number + "";
                for (let index = numberAsString.length; index < 3; index++) 
                    numberAsString = '0'+numberAsString;
                this.units = numberAsString.charAt(2);
                this.tens = numberAsString.charAt(1);
                this.hundreds = numberAsString.charAt(0);
                this.complete = true;
            }
        },
        toString()
        {
            return this.complete ? 
                    'единицы: ' + this.units +  ', десятки: ' + this.tens +  ', сотни: ' + this.hundreds : 
                    'Значение не входит в диапозон от 0 до 999!'
        }
    };
    
    obj.fill(number);
    return obj;
}
function lesson4Task2_1()
{
    console.log(
        'три объекта:\n' + 
        '1)продукт(название+цена)\n' + 
        '2)маппинг продукта и кол-ва(продукт(1)+кол-во+подсчет цены с учетом кол-ва)\n' + 
        '3)корзина(список маппинга продукта и кол-ва(2)+расчет стоимости)'
    );
}

function lesson4Task2_2_and_3()
{
    const product = { // продукт
        name: 'anyProduct', 
        cost: 1,
        reset(name, cost)
        {
            this.name = name;
            this.cost = cost;
        },
        toString()
        {
            return 'name: ' + this.name + '/cost: ' + this.cost;
        }
    };
    const productCountMap = { // маппигн продукта и кол-ва
        product: product, 
        count: 1,
        reset(product, count)
        {
            this.product = product;
            this.count = count;
        },
        total()
        {
            return this.product.cost * this.count;
        },
        toString()
        {
            return this.product.toString() + '/count: ' + this.count;
        }
    };
    const cart = { // корзина
        products: [productCountMap],
        add(productCountMap)
        {
            this.products.push(productCountMap); 
        },
        remove(index)
        {
            this.products.splice(index, 1);
        },
        clear()
        {
            this.products = [];
        }, 
        calculateCost() 
        {
            let cost = 0;
            this.products.forEach((element) => {
                cost += element.total();
            });
            return cost;
        },
        toString()
        {
            let content = 'contents of the shopping cart: ';
            this.products.forEach((element) => {
                content += '\n' + element.toString();
            });
            return content + '\ntotal: ' + this.calculateCost();
        }
    };
    console.log(cart.toString())
}
