let message: string = "hello world"
console.log(message)

// let price: number;
// ตัั้งตัวแปรข้างบนข้างล่างต้องเหมือยนกัน
// ไม่ตั้งข้างบนข้างล่างไม่ต้องเหมือนกัน
// price = 9.95;
// price = 0b100; // Binary Numbers (use with 0b or 0B)
// price = 0XA; //Hexadecimal numbers

// let price;
let price: any; // any type
console.log(typeof price, price)
price = 9.95;

console.log(typeof price, price)
price = "0b100"; // Binary Numbers (use with 0b or 0B)
console.log(typeof price, price)

price = 0xA; //Hexadecimal numbers
console.log(typeof price, price)
console.log(price)

let skill: [string|number, number|string];
skill = ['Programming', 5];
skill = [5, 'Programming'];

type name = string//จะได้ระบุ Obj ที่เป็นชื่อได้ หรือเพิ่ม Type อื่นได้
let fname:name;
fname = "my name"

function b():void{
    console.log('test')
    return undefined
    //voidundefied ใช้ได้เหมือนกันแต่ถ้าเป็น never ห้าม return
}

function a(): never {
    // never ใช้สำหรับฟังก์ชันที่ไม่จบ เช่น ฟังก์ชันที่มีลูปไม่สิ้นสุด หรือฟังก์ชันที่โยนข้อผิดพลาด
    console.log('test')
    while (true) {
        // do something
        throw new Error('This is an error');
    }
}
function raiseError(message:string): void {
    throw new Error(message);
}


function c(message? : string):void{
    console.log('test',message)
   
}
c()
c('11') // จะ error ถ้าไม่ใส่?(optional parameter)ตรง message ก็คือไม่สามารถรีบค่ากลับมาได้

function d(...input:number[]){
 console.log(input)

d(1.2, 3, 4, 5) // ...input จะรับค่าที่ส่งมาเป็น Array
d()
d(1)
}
//ทำ Overload ฟังก์ชันเฉพาะส่วนของฟังก์ชันต้องใช้แบบนี้
//ต้องเป็น any ถึงจะใช้ได้
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
   function add(a: any, b: any) {
    return a+b;;
}
console.log(add("1", 2)); 

//ลักษณะการใช้ get set ในตัวแปร
// ไม่สามารถเรียกตัวแผปรที่เป็น private ได้โดยตรง
// ต้องใช้ get และ set ในการเข้าถึงและปรับค่า
class student {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}
let mystudent = new student("my name");
console.log(mystudent.name); // John
mystudent.name = "new name"; //ใช้เท่ากับในการใช้ value ของ set
console.log(mystudent.name); // new name    

//type เปลี่ยนไม่ได้ต้องใช้ and เท่านั้นนั้น Interface Extend ได้