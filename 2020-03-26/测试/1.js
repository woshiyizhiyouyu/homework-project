Number.prototype.plus = function (num) {
    return this + num;
}
Number.prototype.minus = function (num) {
    return this - num;
}

let n = 10;
let m = n.plus(10).minus(5);
console.log(m);//=>15（10+10-5）