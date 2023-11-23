// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [15, 31, 456, 'fgh', 546, 'rthrth', true, false, 'dfgdgdfg', 'gergf'];

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title:  'Red gun',
    pageCount:  15,
    genre:  'fantastic'
}
let book2 = {
    title:  'White trees',
    pageCount:  153,
    genre:  'romance'
}
let book3 = {
    title:  'Blue oceans',
    pageCount:  98,
    genre:  'sincetific'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title:  'Red gun',
    pageCount:  15,
    genre:  'fantastic',
    author: {
        age: 31,
        name: 'Genry'
    }
}
let book5 = {
    title:  'White trees',
    pageCount:  153,
    genre:  'romance',
    author: {
        age: 54,
        name: 'Arthur'
    }
}
let book6 = {
    title:  'Blue oceans',
    pageCount:  98,
    genre:  'sincetific',
    author: {
        age: 62,
        name: 'Robert'
    }
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let arr2= [
    user1 = {
    name: 'Arthur',
    username: 'rtgwer',
    password: '4563463456345'
    },
    user2 = {
    name: 'Robert',
    username: 'fghdfg',
    password: 'ergfw4ergf45gf'
    },
    user3 = {
    name: 'Jason',
    username: 'htrw3h',
    password: 'g5rt4fefewfse'
    },
    user4 = {
    name: 'Name1',
    username: 'h34th',
    password: 'vwrt345g454'
    },
    user5 = {
    name: 'Name2',
    username: 'h345thg',
    password: 'g345g43g45g'
    },
    user6 = {
    name: 'Name3',
    username: 'h5th3e45t',
    password: 'ge45g4tgrw4g'
    },
    user7 = {
    name: 'Name4',
    username: 'h45thr',
    password: 'g45g4ger'
    },
    user8 = {
    name: 'Name5',
    username: 'h45hgfr',
    password: 'g4w5gwefvwer'
    },
    user9 = {
    name: 'Name6',
    username: '5grtge4',
    password: 'ny5n467hgrt'
    },
    user10 = {
    name: 'Mike',
    username: 'h5t6h65hregf',
    password: 'ge45gefbdretr'
    },
]
console.log(arr2[0].password);
console.log(arr2[1].password);
console.log(arr2[2].password);
console.log(arr2[3].password);
console.log(arr2[4].password);
console.log(arr2[5].password);
console.log(arr2[6].password);
console.log(arr2[7].password);
console.log(arr2[8].password);
console.log(arr2[9].password);