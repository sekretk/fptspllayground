import { getStructEq, struct as eqStuct } from "fp-ts/lib/Eq";
import { getEq } from "fp-ts/lib/Array";
import { Eq } from "fp-ts/lib/Eq";

const eqNumber: Eq<number> = {
    equals: (x, y) => x === y
}

function isElem<A>(E: Eq<A>): (a: A, arr: Array<A>) => boolean {
    return (a, arr) => arr.some(_ => E.equals(a, _));
}

// console.log(isElem(eqNumber)(1, [1,2,3,4]));
// console.log(isElem(eqNumber)(5, [1,2,3,4]));

type Point = {
    x: number,
    y: number
}

const eqPoint: Eq<Point> = eqStuct({
    x: eqNumber,
    y: eqNumber
});

console.log(eqPoint.equals({x:1, y: 2}, {x: 1, y: 2})) //?

const eqArrayOfPoints: Eq<Array<Point>> = getEq(eqPoint)

export declare const contramap: <A, B>(f: (b: B) => A) => (fa: Eq<A>) => Eq<B>;
