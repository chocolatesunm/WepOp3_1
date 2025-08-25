
/*
ให้นิสิตเขียนโปรแกรมเพื่อรับค่าจากผู้ใช้ผ่านเว็บเบราว์เซอร์โดยจะรับเป็นตัวเลข และส่งผลรับออกมาเป็น ผลรวมของ
ตัวเลขในแต่ละหลัก
เช่น
Input 1234
Output 10
เกิดจาก 1 + 2 + 3 + 4 ได้เป็น 10
*/

// นำเข้าโมดูล http สำหรับสร้างเซิร์ฟเวอร์ HTTP และ querystring สำหรับการแปลงข้อมูล POST
import http from "http";
import { parse } from "querystring";

// กำหนดพอร์ตที่เซิร์ฟเวอร์จะฟัง
const port = 3000;

// สร้างเซิร์ฟเวอร์ HTTP
const server = http.createServer((req, res) => {
  let body = "";  // ตัวแปรเพื่อเก็บข้อมูลที่ได้รับจากผู้ใช้

  // ตรวจสอบว่าเป็นคำขอแบบ POST หรือไม่
  if (req.method === "POST") {
    // เมื่อได้รับข้อมูลจากผู้ใช้ ให้เพิ่มข้อมูลลงในตัวแปร body
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // เมื่อรับข้อมูลเสร็จแล้ว
    req.on("end", () => {
      // แสดงข้อมูลที่ได้รับในคอนโซล
      console.log("Received POST DATA:", body);
      
      // กำหนด Header ของการตอบกลับ
      res.writeHead(200, { "Content-Type": "text/plain" });

      // แปลงข้อมูล POST ที่รับเข้ามาให้เป็น Object
      const data = parse(body);
      // ดึงค่าที่กรอกใน input name="value" มา
      const input = data.value || "";
      let sum = 0;

      // วนลูปผ่านตัวเลขที่ได้รับจากผู้ใช้ เพื่อหาผลรวมของแต่ละหลัก
      for (let i = 0; i < input.length; i++) {
        const digit = parseInt(input[i]); // แปลงแต่ละตัวอักษรให้เป็นตัวเลข
        if (!isNaN(digit)) {
          sum += digit; // ถ้าค่าคือเลข (ไม่ใช่ NaN) ให้บวกกับ sum
        }
      }

      // ส่งผลลัพธ์กลับไปให้ผู้ใช้เป็นผลรวมของตัวเลขในแต่ละหลัก
      res.end(`Output: ${sum}\n`);
    });
  } else {
    // ถ้าไม่ใช่ POST (เช่น GET) ให้ส่งฟอร์ม HTML กลับไป
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <form method="POST" action="/">
        <input type="text" name="value"/>
        <button type="submit">Submit</button>
      </form>
    `);
  }
});

// เริ่มต้นเซิร์ฟเวอร์ที่พอร์ต 3000
server.listen(port, () => {
  // แสดงข้อความเมื่อเซิร์ฟเวอร์เริ่มทำงาน
  console.log(`Server running at http://localhost:${port}/`);
});
