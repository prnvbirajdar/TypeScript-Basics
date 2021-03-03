"use strict";
//boolean
var isOpen = false;
//string
var myName = "hello dev.to";
//numbers (can be integers, fractions, even numerical operations)
var myNum = 5 * 9;
//arrays
var myArr = [0, 1, 2];
//OR
var myArr2 = [2123, 123213, 12312312321];
//tuple
var myInfoArr = ['dev', 55, true];
console.log(myInfoArr[0].length);
//Property 'length' does not exist on type 'number'.
console.log(myInfoArr[1].length);
//Property 'length' does not exist on type 'boolean'.
console.log(myInfoArr[2].length);
//enum
var myHobbies;
(function (myHobbies) {
    myHobbies[myHobbies["biking"] = 0] = "biking";
    myHobbies[myHobbies["cooking"] = 1] = "cooking";
    myHobbies[myHobbies["hiking"] = 2] = "hiking";
})(myHobbies || (myHobbies = {}));
var favoriteHobby = myHobbies[0];
//"biking"
console.log(favoriteHobby);
