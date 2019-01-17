// -------------------------- Home work 1 --------------------------
// ----------------------- Ivanova Anastasiia ----------------------

// --------------------------lesson 1 strings-----------------------
// ----------------------------the task 1---------------------------
let value;
let str = 'some test string';
value = str[0] + str[str.length - 1];

// ----------------------------the task 2---------------------------
value = str[0].toUpperCase() + str.slice(1, str.length - 1) + str[str.length - 1].toUpperCase();

// ----------------------------the task 3---------------------------
value = str.indexOf('string');

// ----------------------------the task 4---------------------------
value = str.indexOf(' ');
value = str.indexOf(' ', 5);

// ----------------------------the task 5---------------------------
value = str.substr(5, 4);

// ----------------------------the task 6---------------------------
value = str.substring(5, 9);

// ----------------------------the task 7---------------------------

value = str.slice(0, -6);

// ----------------------------the task 8---------------------------
let a = 20;
let b = 16;
value = String(a) + String(b);

// --------------------------lesson 1 numbers-----------------------
// ----------------------------the task 1---------------------------
value = Math.PI;
value = Math.round(Math.PI * 100) / 100;
// or
// value = Math.PI.toFixed(2);

// ----------------------------the task 2---------------------------
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

// ----------------------------the task 3---------------------------
//-a-
value = Math.random();
value = Math.random().toFixed(2);
// or
// value = Math.round(Math.random() * 100) / 100;

//-b-
value = Math.ceil(Math.random() * 10);

// ----------------------------the task 4---------------------------
let x = 0.6;
let y = 0.7;
value = (x + y).toFixed(1);

// ----------------------------the task 5---------------------------
value = parseFloat('100$');

// --------------------------lesson 2 objects-----------------------
// ----------------------------the task 1---------------------------
let product = {
	name: 'iphone',
}

// ----------------------------the task 2---------------------------
product.price = '1000';
product.currency = 'dollar';

// ----------------------------the task 3---------------------------
product.details ={
    model: 'XS',
    color: 'Silver'
};



