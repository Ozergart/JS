// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let submit = document.getElementById('submit')
submit.onclick = function CreateObject(ev){
    ev.preventDefault();
    let name = document.getElementById('name').value;
    let sruname = document.getElementById('sruname').value;
    let age  = document.getElementById('age').value;
    let p = document.createElement('p');
    document.body.appendChild(p);
    let pers = {
        name,
        sruname,
        age
    }
    p.innerText = JSON.stringify(pers)
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
window.onload =  function numberUpper() {
    let number = document.getElementById('number');
    let numberValue = parseInt(localStorage.getItem('LSNumber')) || 0;
    numberValue++;
    number.innerText = numberValue + '';
    localStorage.setItem('LSNumber', numberValue);
}
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let newDate = new Date();
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(newDate);
localStorage.setItem('sessions', JSON.stringify(sessions));


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let objects = document.getElementById('objects')
let objectsArray = [];
for (let i = 0; i < 100; i++) {
    objectsArray.push(i + 1);
}
console.log(objectsArray)
let page = 1;
let prev = document.getElementById('prev')
let next = document.getElementById('next')
prev.onclick = function (){
    page--
    DisplayObj(page, objects)
}
next.onclick = function (){
    page++

    DisplayObj(page, objects)
}
function DisplayObj(page, block) {
    const displayedObjects = objectsArray.slice((page - 1) * 10, (page - 1) * 10 + 10);
    block.innerText = '';
    for (const obj of displayedObjects) {
        let objElement = document.createElement('p');
        objElement.innerText = JSON.stringify(obj);
        block.appendChild(objElement);
    }
}
DisplayObj(page, objects)

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let hideButton = document.getElementById('hideButton');
let textElement = document.getElementById('text');

hideButton.onclick = function() {
    textElement.style.display = 'none';
};


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let confirm = document.getElementById('confirm')
confirm.onclick = function (){
    let ageInput = document.getElementById('ageInput');
    let age = ageInput.innerText*1
    if (age < 18) {
        document.write('Меньше 18');
    } else {
        document.write('Є 18');
    }
}


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається