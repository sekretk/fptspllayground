"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eq_1 = require("fp-ts/lib/Eq");
var eqNumber = {
    equals: function (x, y) { return x === y; }
};
function isElem(E) {
    return function (a, arr) { return arr.some(function (_) { return E.equals(a, _); }); };
}
var eqPoint = Eq_1.struct({
    x: eqNumber,
    y: eqNumber
});
console.log(eqPoint.equals({ x: 1, y: 2 }, { x: 1, y: 2 }));
