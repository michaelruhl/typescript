"use strict";
let message = 'Hello World';
message += ' again';
console.log(message);
let regexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
// A first in first out collection
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
let center = { x: number, y: number } = {
    x: 0,
    y: 0
};
let unit = { x: number, y: number } = {
    x: 1,
    y: 1,
};
const point = { x: 0, y: 0 };
point = { x: 1, y: 1 };
point.x = 123;
point.y = 456;
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log('LOG:', message);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
sum(1, 2);
sum(1, 2, 3);
let add, Add;
add = function (a, b) {
    return a + b;
};
add = (a, b) => a + b;
let user = { id: 'user-asfef23' };
let product = { id: 'product-fwefw575' };
let point2D = { x: 0, y: 10 };
let point3d = { x: 0, y: 10, z: 20 };
// Extra info ok
point2D = point3d;
function takesPoint2D(point) { }
takesPoint2D(point3D);
// Error: missing info
point3D = point2D;
function takesPoint3D(point) { }
takesPoint3D(point2D);
class Animal {
    constructor(name) {
        this.name = name;
    }
}
void {
    console, : .log(`${this.name} moves ${distanceInMeters}m.`)
};
let cat = new Animal('Cat');
cat.move(10);
cat.name = 'Dog';
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}
