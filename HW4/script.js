let ReginaRaut = [878,'SitaCeng',491, true, false, 1235, 'YusufNayak']
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area_of_rectangl(a) {
    let area = a*6;
    document.write(`<div>${area}</div>`)
    return area;
}
area_of_rectangl(12)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function area_of_circle(r){
    let R = r;
    let area = R * R * Math.PI;
    document.write(`<div>${area}</div>`)
    return area;
}
area_of_circle(11);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area_of_cilindre(h, r){
    let area = (2 * Math.PI * r * h) + (2 * Math.PI * r * r);
    document.write(`<div>${area}</div>`)
    return area;
}
area_of_cilindre(12, 4);

// - створити функцію яка приймає масив та виводить кожен його елемент
function iterator (arr){
    for (const arrElement of arr) {
        document.write(arrElement);
    }
}
iterator(ReginaRaut)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function par(text){
    document.write(`<p> ${text} </p>`)
}
par('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nesciunt reiciendis repudiandae?');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul_creating3(text){
    document.write('<ul>');
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write('</ul>');
}
ul_creating3(3245345);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul_creating_x(text, x){
    document.write('<ul>');
        for (let i = 0;i < x; i++){
            document.write(`<li> ${text} </li>`)
        }
    document.write('</ul>');
}
ul_creating_x(234234,12);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function ul_builder(arr){
    document.write('<ul>');
        for (let arrElement of arr) {
            document.write(`<li>${arrElement}</li>`)
        }
    document.write('</ul>');
}

ul_builder(ReginaRaut);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arr_sorting(arr){
    for (const arrElement of arr) {
        document.write('<div>');
        for (const arrElementKey in arrElement) {
            document.write(` ${arrElement[arrElementKey]} `)
        }
        document.write('</div>');
    }
}
let LisaShu = [{id: 0, name: 'HaHuynh', age: 42 },{id: 1, name: 'UshaCaudhari', age: 24 },{id: 2, name: 'AhmadMia', age: 18 }];
arr_sorting(LisaShu);

// - створити функцію яка повертає найменьше число з масиву
function min_number(arr){
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        if (arrElement < result){
            result = arrElement;
        }
    }
    document.write(result);
    return result
}
let PingZhong = [100, 54, 12, 654, 234, 13, 456, 44, 876];
min_number(PingZhong);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let resultsum = 0;
    for (const arrElement of arr) {
        resultsum += arrElement;
    }
    document.write(`<div>${resultsum}</div>`);
    return resultsum;
}
sum(PingZhong)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,i1,i2){
    let reserved = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = reserved
    document.write(arr)
}
let SalehBao =[11,22,33,44];
swap(SalehBao,0,1)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
   let currences = [{currency:'USD',value:40},{currency:'EUR',value:42}];
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let exchange_value = 0;
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency ){
            exchange_value = currency.value;
        }
    }
    let result = sumUAH / exchange_value
    document.write(`<div>${result}</div>`);
}
exchange(100000,currences, 'EUR');
document.write('<div>----------------------------</div>')
exchange(100000,currences, 'USD');


