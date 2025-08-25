// สร้าง Route ของ titles ให้มี Method ดังนี้ ด้วย Express JS
// - GET /titles
// - GET /title/:id
// - POST /title
// - PUT /title/:id
// - DELETE /title/:id


import 'dotenv/config';
// โหลด environment variables จากไฟล์ .env (เช่น PORT
import express ,{type Express,type Request,type Response} from 'express'

// สร้างตัวแปร app เป็น instance ของ Express
const app : Express = express();
const port = process.env.PORT || 3000;

// GET /title → ใช้สำหรับดึงข้อมูล
app.get("/title", (req: Request, res: Response) => {
  res.send("Hello get!");
});

// GET /title/:id → ใช้สำหรับดึงข้อมูลโดยมี parameter id
app.get("/title/:id", (req: Request, res: Response) => {
    let id = req.params.id;
    console.log(`ID: ${id}`);
  res.send(`Hello get! Your ID is ${id}`);
});

// POST /title → ใช้สำหรับสร้างข้อมูลใหม่
app.post("/title", (req: Request, res: Response) => {
  res.send("Hello Post!");
});

// PUT /title/:id → ใช้สำหรับแก้ไขข้อมูลที่มีอยู่ (ตาม id)
app.put('/title/:id', (req: Request, res: Response) => {
    res.send(`Hello put! Your ID is ${req.params.id}`);
});

// DELETE /title/:id → ใช้สำหรับลบข้อมูลที่มีอยู่ (ตาม id)
app.delete('/title/:id', (req: Request, res: Response) => {
    res.send(`Hello delete! Your ID is ${req.params.id}`);
});

/**
 * -------------------------
 * Start Server
 * -------------------------
 */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
