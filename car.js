'use strict';

let car = creatCar('toyota', 'black');

function creatCar(model, color) {
    return{
        model, // когда имся свойста совпадает с перемнной можно просто написать так
        color
    };
}

console.log(car.model);