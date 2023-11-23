// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.

let x = 0;

//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if ( x !== 0 ) {
    console.log('Вірно')
}
else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 32;
if (time <= 15){
    console.log('Перша')
}
else if(time <= 30){
    console.log('Друга')
}
else if(time <= 45){
    console.log('Третя')
}
else {
    console.log('Четверта')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 17;
if (day <=10 ){
    console.log('Перша')
}
else if(day <=20 ){
    console.log('Друга')
}
else{
    console.log('Третя')
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday = prompt('Номер дня тижня 1-7')
switch (+weekday){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 12341
let b = 234132
if (a === b) {
    console.log('рівні')
}
else if (a > b){
    console.log(a)
}
else {
    console.log(b)
}