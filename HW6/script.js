// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s1 = 'hello world'
let s2 = 'lorem ipsum'
let s3 = 'javascript is cool'
console.log(s1.length);
console.log(s2.length);
console.log(s3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let s1up = s1.toUpperCase()
let s2up = s2.toUpperCase()
let s3up = s3.toUpperCase()
console.log(s1up)
console.log(s2up)
console.log(s3up)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(s1up.toLowerCase());
console.log(s2up.toLowerCase());
console.log(s3up.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim())
console.log(str.trim()[0]);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str1 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

console.log(str1.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
arrs = arr.map(value =>{
    return value + ''
})
console.log(arrs)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sorted = []
function sortNums(arr, filter){
    sorted = arr.sort((a, b) =>{
        if (filter === 'ascending'){ return a - b }
        else if(filter === 'descending'){ return b - a}
        else {return 'ERROR'}
    })
}
sortNums(nums, 'descending')
console.log(sorted)

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
sorted = [];
sorted = coursesAndDurationArray.sort((a,b) => {
    return b.monthDuration - a.monthDuration
})
// console.log(sorted);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
filtered = coursesAndDurationArray.filter((course) => course.monthDuration > 5)
console.log(filtered)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
mapped = coursesAndDurationArray.map((value, index) => {
    value.id = index
    return value
})
console.log(mapped);
// описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
]
// - знайти піковий туз
filtered = cards.find((card) => card.cardSuit ==='spade' && card.value === 'ace')
console.log(filtered)
// - всі шістки
filtered = cards.filter((card) => card.value ==='6')
console.log(filtered)
// - всі червоні карти
filtered = cards.filter((card) => card.color ==='red')
console.log(filtered)
// - всі буби
filtered = cards.filter((card) => card.cardSuit ==='diamond')
console.log(filtered)
// - всі трефи від 9 та більше
filtered = cards.filter((card) => (card.value ==='9' ||card.value ==='10' ||card.value ==='jack' ||card.value ==='queen' ||card.value ==='king' ||card.value ==='ace') && card.cardSuit ==='clubs')
console.log(filtered)
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cardsreduced = cards.reduce((accum, card) =>{
    if (card.cardSuit === 'spade'){
        accum.spade.push(card)
    }
    else if (card.cardSuit === 'diamond'){
        accum.diamond.push(card)
    }
    else if(card.cardSuit === 'heart'){
        accum.heart.push(card)
    }
    else if (card.cardSuit === 'clubs'){
        accum.clubs.push(card)
    }
    return accum;
    },{spade:[], diamond:[],heart: [], clubs:[]}
)
console.log(cardsreduced)


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
sorted = coursesArray.filter((value) =>value.modules.includes('sass'))
console.log(sorted);
// --написати пошук всіх об'єктів, в який в modules є docker
sorted = coursesArray.filter((value) =>value.modules.includes('docker'))
console.log(sorted);