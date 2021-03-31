// alert('Hello, World!');

// console.log('Hi!');
// console.warn('Warn');
// console.error('Error');

// let age = prompt('Сколько тебе лет?', 100);
// alert(`Тебе ${age} лет!`);

// let isBose = confirm("Ты здесь главный?");
// alert(isBose); 

// let x;
// x = 6;
// const y = 12;
// var z = 1;
// console.log(x);

let y;
const x = '' + prompt('Введите число', -1);

if (x < 0 && x > -2) {
 y = 0;
} else {
 y = 2;
}

if (y === 0) {
    alert('Делить на ноль нельзя')
}