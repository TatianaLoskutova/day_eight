'use strict';

let car = creatCar('toyota', 'black');

function creatCar(model, color) {
    return{
        model, // когда имся свойста совпадает с перемнной можно просто написать так
        color
    };
}

console.log(car.model);

let book = {
    title: 'название',
    author: 'Тургенев',
    price: 100,
    nPages: 282,
};
for(let key in book) {
    console.log(key+': '+book[key]);
}

let lib = book; // когда ОБЪЕКТЫ, тут либ будет ссылаться на один и тот-же объект
// когда речь не об объектах, то создается другая переменная
lib.title = 'Муму';
console.log(book.title);

/*let phoneCodes = {
    '7': 'Россия',
    '49': 'Германия',
    '41': 'Швейцария',
    '1': 'США',
};*/

let phoneCodes = {
    '+7': 'Россия',
    '+49': 'Германия',
    '+41': 'Швейцария',
    '+1': 'США',
};

for(let code in phoneCodes) {
    console.log(code);  //  !! когда ключи цифры они на выводе будет по порядку, лучше поставить + перед
};