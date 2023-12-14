// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone)  {
    this.name = name
    this.id = id
    this.surname = surname
    this.email = email
    this.phone = phone
}
let arr = [
    new User(1,'Marcos','Karim','Antegravida@afa.com',19345332453),
    new User(2,'JaneLiao','FatmaHoang','Antegravida@afa.com',19345332453),
    new User(3,'RinaWeng','PavelRashid','Antegravida@afa.com',19345332453),
    new User(4,'AndrewRivera','DilipHernandez','Antegravida@afa.com',19345332453),
    new User(5,'MoussaUsman','JavierSultana','Antegravida@afa.com',19345332453),
    new User(7,'VictorGonzalez','PengRamadan','Antegravida@afa.com',19345332453),
    new User(6,'SamuelMou','YunMahato','Antegravida@afa.com',19345332453),
    new User(8,'ManjuPang','ShantiJin','Antegravida@afa.com',19345332453),
    new User(9,'LihuaXiong','EdithNie','Antegravida@afa.com',19345332453),
    new User(10,'LihuaXiong','EdithNie','Antegravida@afa.com',19345332453)
]
console.log(arr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arr.filter(User => User.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arr.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client' +
let ArrOrder1 = ['XsskrtW6','bYtMHOQH','RdaG4uhTNx']
let ArrOrder2 = ['RdaG4uhTNx','z8AJxi9Kxa']
let ArrOrder3 = ['bYtMHOQH','RdaG4uhTNx','z8AJxi9Kxa','HNjdm7B']
let ArrOrder4 = []
let ArrOrder5 = ['XsskrtW6','RdaG4uhTNx','z8AJxi9Kxa','gCCsw45OAA','kQ13mX8ALK']
let ArrOrder6 = ['XsskrtW6','bYtMHOQH','RdaG4uhTNx','z8AJxi9Kxa','2sBSexacjO','YmLmGAP']
let ArrOrder7 = ['XsskrtW6','bYtMHOQH','z8AJxi9Kxa','mjWW2IdKV','DsRqUoF2','cAMHkax','xVDyiF3335s']
let ArrOrder8 = ['XsskrtW6','bYtMHOQH','bYtMHOQH','z8AJxi9Kxa','uJFnIDKmrF','bYtMHOQH','z8AJxi9Kxa','uJFnIDKmrF']
let ArrOrder9 = ['XsskrtW6','bYtMHOQH','z8AJxi9Kxa','uJFnIDKmrF','bYtMHOQH','z8AJxi9Kxa','uJFnIDKmrF','bYtMHOQH','z8AJxi9Kxa','uJFnIDKmrF']
let ArrOrder10 = ['XsskrtW6','bYtMHOQH','RdaG4uhTNx','z8AJxi9Kxa','2sBSexacjO','mjWW2IdKV','bYtMHOQH','z8AJxi9Kxa','uJFnIDKmrF','bYtMHOQH','z8AJxi9Kxa','uJFnIDKmrF','bYtMHOQH','z8AJxi9Kxa','uJFnIDKmrF']

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.name = name
        this.id = id
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
let ArrClients = [
    new Client(2,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder2),
    new Client(4,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder4),
    new Client(8,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder8),
    new Client(5,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder5),
    new Client(6,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder6),
    new Client(10,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder10),
    new Client(7,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder7),
    new Client(1,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder1),
    new Client(3,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder3),
    new Client(9,'Jianming','Yamamoto','dfgsqwefeg@gmail.com',45363343516,ArrOrder9)

]
console.log(ArrClients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 let sorted = ArrClients.sort((a, b) => a.order.length - b.order.length);
console.log(sorted);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function CarCreat1(model,creator,year,speed,engine){
    this.model = model
    this.creator = creator
    this.year = year
    this.speed = speed
    this.engine = engine

    this.drive = function(){console.log(`їдемо зі швидкістю ${this.speed} на годину`)}
    this.info = function (){
        document.write(`model: ${this.model} `)
        document.write(`creator: ${this.creator} `)
        document.write(`year: ${this.year} `)
        document.write(`speed: ${this.speed} `)
        document.write(`engine: ${this.engine} `)
    }
    this.increaseMaxSpeed = function (newSpeed){this.speed +=newSpeed}
    this.changeYear = function (NewValue){this.year = NewValue}
    this.addDriver =function (driver){this.driver = driver}


}
let car1 = new CarCreat1('KUGPQVU6t','yye8pf6mde0',345,234,'fHcMpwH7VVc')
car1.drive()
car1.info()
let driverInfo = {
    name: 'John Doe',
    age: 30,
    license: 'ABC12345'
};
car1.addDriver(driverInfo)
car1.changeYear(3452223)
car1.increaseMaxSpeed(3452)
console.log(car1);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarCreat2 {
    constructor(model,creator,year,speed,engine) {
        this.model = model
        this.creator = creator
        this.year = year
        this.speed = speed
        this.engine = engine
    }
    drive(){console.log(`їдемо зі швидкістю ${this.speed} на годину`)}
    info(){
        document.write(`model: ${this.model} `)
        document.write(`creator: ${this.creator} `)
        document.write(`year: ${this.year} `)
        document.write(`speed: ${this.speed} `)
        document.write(`engine: ${this.engine} `)
    }
    increaseMaxSpeed(newSpeed){this.speed +=newSpeed}
    changeYear(NewValue){this.year = NewValue}
    addDriver(driver){this.driver = driver}
}
let NewCar = new CarCreat2('Civic', 'Honda', 2022, 180, '1.5L')
console.log(NewCar);
NewCar.increaseMaxSpeed(35)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Girl {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let girls = [
    new Girl('Girl1', 18, 32),
    new Girl('Girl2', 20, 33),
    new Girl('Girl3', 22, 34),
    new Girl('Girl4', 19, 35),
    new Girl('Girl5', 21, 36),
    new Girl('Girl6', 23, 37),
    new Girl('Girl7', 25, 38),
    new Girl('Girl8', 27, 39),
    new Girl('Girl9', 24, 40),
    new Girl('Girl10', 26, 41)
];
let prince1 = new Prince('VijayAlam',23,37)
let result = {}
for (const girl of girls) {
    if (prince1.foundShoe === girl.footSize){
        result = girl
        break
    }
}
console.log(result);
console.log(girls.find(girl => girl.footSize === prince1.foundShoe));