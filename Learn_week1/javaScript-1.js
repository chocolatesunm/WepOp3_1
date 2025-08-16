import { addTwo } from "./myprint.js";  // นำเข้า addTwo จาก myprint.js

let value1;
let value2 = null;
let value3 = 0;

console.log(value1, value2, value3); // แสดงค่า undefined null 0
let result = value1 || value2 || value3; // คำนวณผลรวมของตัวแปร falsy
console.log(result); // 0

let obj = {
    value: value1 || value2 || value3,
    result
};

console.log(obj); // { value: 0, result: 0 }

if (false || console.log("hello")) {} // พิมพ์ "hello"

let x = 5; // กำหนดค่า x ให้ถูกต้อง
x > 0 ? console.log("True") : console.log("False"); // พิมพ์ "True"

x > 0 && console.log("True"); // พิมพ์ "True" ถ้า x > 0

(() => {
    console.log("Hello from IIFE");
})(); // พิมพ์ "Hello from IIFE"

let a = () => {
    console.log("a");
};

// เรียกใช้ addTwo จาก myprint.js
console.log(addTwo(1)); // ควรพิมพ์ 3
