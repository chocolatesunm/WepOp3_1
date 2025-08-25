// Workshop #4
// ตัวอย่างโปรแกรมแสดงตารางสูตรคูณจากค่าที่รับจากผู้ใช้
// 44
// ตัวอย่างเช่น Input number เป็น 2 จะได้
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20
// 2 x 11 = 22
// 2 x 12 = 24
type numberInput = number;
let inputNumber: numberInput = 2;
function multiplicationTable(num: numberInput): void {
    //รับพารามิเตอร์ num ที่ชื่อว่า numberInput
    for(let i = 1; i <=12 ; i++) {
        //loop ตั้งแต่ 1 ถึง 12
        console.log(`${num} x ${i} = ${num * i}`);
    //ฝั่งซ้ายคือแสดง 2*1 ขวาคือ 2
    }
}
multiplicationTable(inputNumber);
