let message: string = 'Hello World';
message+=' again';
console.log(message);

let regexp: RegExp = new RegExp('ab+c')

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

// A first in first out collection
class Queue<T> {
    private data: Array<T> =[];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
}

let queue: Queue<number> = new Queue();

// object types & aliases
type Point = { x: number, y: number }

let center: Point = { x: number, y: number } = {
    x: 0
    y: 0
}

let unit: Point = { x: number, y: number } = {
    x: 1,
    y: 1,
}

const point: Point = { x: 0, y: 0 }

point = { x: 1, y: 1 }

point.x = 123
point.y = 456

function add(a: number, b: number): number {
    return a + b
}

function log(message: string): void {
    console.log('LOG:', message)
}

function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current
    })
}

sum(1, 2)
sum(1, 2, 3)

type Add = (a: number, b: number) => number

let add Add

add = function (a: number, b: number): number {
    return a + b
}

add = (a, b) => a + b

type user = { id: string }
type product = { id: string }

let user: User = { id: 'user-asfef23' }
let product: Product = { id: 'product-fwefw575' }

type Point2D = { x: number, y: number }
type Point3D = { x: number, y: number, z: number }

let point2D: Point2D = { x: 0, y: 10 }
let point3d: Point3D = { x: 0, y: 10, z: 20 }


// Extra info ok
point2D = point3d
function takesPoint2D(point: Point2D) { }
takesPoint2D(point3D)

// Error: missing info
point3D = point2D
function takesPoint3D(point: Point3D) {  }
takesPoint3D(point2D)

class Animal {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    public move(distanceinMeters: number) void{
        console.log(`${this.name} moves ${distanceInMeters}m.`)
    }
}

let cat = new Animal('Cat')
cat.move(10)
cat.name = 'Dog'

class Bird extends Animal {
    fly(distanceInMeters: number) {
        console.log(`${this.name} flew ${distanceInMeters}m.`)

    }
}