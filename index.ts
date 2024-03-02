/*interface IUser {
    name: string;
    age: number;
}

class UserAccount { 
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

const new_user: IUser = new UserAccount("shark", 34);

type myBool = true | false | "nothing";

function wrapInArray(obj: string | string[]){
    if(typeof obj === "string"){
        return [obj];
    }
    return obj;
}

console.log(wrapInArray("hellooo "));
type ObjectWitharr = Array<{name:string}>;
*/

function print_details(name:string, age: number, major?:string){
    return `${name} - ${age} - ${major}`;
}
console.log(print_details("shark", 34));