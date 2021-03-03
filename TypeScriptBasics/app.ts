//boolean
const isOpen: boolean = false;

//string
const myName:string = "hello dev.to";

//numbers (can be integers, fractions, even numerical operations)
const myNum:number = 5*9;

//arrays
const myArr:number[] = [0,1,2]
//OR
const myArr2:Array<number> = [2123,123213,12312312321]

//tuple
const myInfoArr:[string,number,boolean] = ['dev', 55, true]

console.log(myInfoArr[0].length)
//Property 'length' does not exist on type 'number'.
console.log(myInfoArr[1].length)
//Property 'length' does not exist on type 'boolean'.
console.log(myInfoArr[2].length)

//enum
enum myHobbies {biking, cooking, hiking}

const favoriteHobby:string = myHobbies[0]

//"biking"
console.log(favoriteHobby)

