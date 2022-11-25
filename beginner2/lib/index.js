"use strict";
let exampleAny;
let exampleUnknown;
// any
exampleAny = 123;
exampleAny = 'Hello';
// unknown
exampleUnknown = 123;
exampleUnknown = 'World';
// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool = exampleAny;
// unkown
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownSetBool = exampleUnknown;
}
