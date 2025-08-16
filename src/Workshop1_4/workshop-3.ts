// Workshop #3
// ให้เขียนฟังก์ชัน number_of_max เป็นฟังก์ชันที่มีการรับค่ ชุดตัวเลข 
// โดยจะนำเข้ามาเป็นตัวเลขและเว้นวรรคไปเรื่อย ๆ 
// จนกว่าจะจบบรรทัด เพื่อหาจำนวนของค่าที่มากที่สุดซ้ำกันใน 
// Array และคืนค่าจำนวนที่ได้ออกมา 
// แต่ถ้าไม่มีจำนวนที่ซ้ำกันเลยให้แสดงข้อความ "Not Duplicate"
// type numberArray = number[];
// let inputArray:numberArray = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];

type numberArray = number[];
let inputArray: numberArray = [1, 20, 3, 4, 20];
function number_of_max(arr:numberArray):number|string {
    let maxNum = Math.max(...arr);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxNum) {
            count++;
        }
    }
    return count > 1 ? count : "Not Duplicate";
}

console.log(number_of_max(inputArray));