// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині\
for (let i = 0; i < 10; i++) {
    document.write('<div>number</div>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> number ${i} </div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
for (let i = 0; i < 10; i++) {
    document.write('<h1>Error </h1>')
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i = 0; i < 10; i++) {
    document.write(`<h1>Error ${i} </h1>`)
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
document.write('<ul>')
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write('</ul>')
