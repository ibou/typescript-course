var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var hobbies = ['sport', 'lecture', 'natation', 'javelo'];
var activitiesHobbies = ['kacking'];
activitiesHobbies.push.apply(activitiesHobbies, hobbies);
// console.log('hello', activitiesHobbies);
var person = {
    name: 'Ibra',
    age: 11
};
var copiedPerson = __assign({}, person);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) {
        return a + b;
    }, 0);
};
var addedNumbers = add(2, 3, 4);
// console.log("added...", addedNumbers);
var hobby0 = hobbies[0], hobby1 = hobbies[1], tt = hobbies.slice(2);
console.log(hobbies);
console.log.apply(console, __spreadArrays(["hobby splitted: ", hobby0, hobby1], tt));
var fname = person.name;
console.log(fname, __assign({}, person));
