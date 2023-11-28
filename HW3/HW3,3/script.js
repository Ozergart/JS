// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true

for (const user of users) {
   if (user.status){
      document.write('<div>')
       for (const userKey in user) {
           document.write(`${userKey}: ${user[userKey]}  `)
       }
       document.write('</div>')
   }
}

document.write('<div>-----------------------------</div>')

// - користувачів зі статусом false

for (const user of users) {
    if (!user.status){
        document.write('<div>')
        for (const userKey in user) {
            document.write(`${userKey}: ${user[userKey]}  `)
        }
        document.write('</div>')
    }
}
document.write('<div>-----------------------------</div>')

// - користувачів які старші за 30 років
for (const user of users) {
    if (user.age>30){
        document.write('<div>')
        for (const userKey in user) {
            document.write(`${userKey}: ${user[userKey]}  `)
        }
        document.write('</div>')
    }
}