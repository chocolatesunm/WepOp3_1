// Workshop #2
// สร้าง Route ของ titles ใĀมี Method ดังนี้ ดวย Fastify
// - GET /titles
// - GET /title/:id
// - POST /title
// - PUT /title/:id
// - DELETE /title/:id
import 'dotenv/config'
import Fastify, { type FastifyRequest } from 'fastify'

// สร้าง instance ของ fastify
const app = Fastify({
    logger: true
})


// ฟังก์ชันเริ่ม server โดยเลือกพอร์ตอัตโนมัติ
const start = async (port = 3000) => {
  try {
    await app.listen({ port });
    console.log(`[server]: Fastify is running at http://localhost:${port}`);
  } catch (err: any) {
    if (err.code === "EADDRINUSE") {
      console.warn(`[server]: Port ${port} in use, trying ${port + 1}...`);
      start(port + 1); // ถ้า port ถูกใช้งาน → รันใหม่ที่ port ถัดไป
    } else {
      console.error(err);
      process.exit(1);
    }
  }
};

    //req = ข้อมูลที่ client ส่งมา เช่น req.params, req.body, req.query
    // res = ใช้ส่งข้อมูลกลับ เช่น res.send(), res.json()
    // ใน Express + TypeScript ถ้าไม่ใส่ type → req.params.id มักจะเป็น any หรือ string | undefined
app.get('/title', async (request, res) => {
    console.log('GET /title request received');
    return "Hello get fastify!";
});

 //FastifyRequest<{ Params: { id: string } }>
    // บอก TypeScript ว่า request ตัวนี้จะต้องมี params ที่มี property ชื่อ id และเป็น string
    // เวลาเรียก req.params.id จะมั่นใจได้เลยว่าเป็น string ไม่ต้องเช็ก undefined
    // FastifyReply = object ที่ใช้ส่ง response (เหมือน res ใน Express)
    
app.post('/title', async (req, res) => {
    console.log('POST /title request received');  // log ทุกครั้งที่มี client ยิง POST
    const body = req.body;
    console.log(`Body: ${JSON.stringify(body)}`);  // แสดง body ใน console
    return {
        message: "Hello post fastify!",
        received: body
    };  // ส่ง response กลับเป็น JSON
    });
    
app.get("/title/:id", async (req: FastifyRequest<{ Params: { id: string } }>, res) => {
    console.log('GET request received');
    const { id } = req.params;
    console.log(`ID: ${id}`);
    return `Hello get! Your ID is ${id}`;
});


app.put("/title/:id", async (req: FastifyRequest<{ Params: { id: string } }>, res) => {
    console.log('PUT request received');
    const { id } = req.params;
    console.log(`ID: ${id}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);
    return `Hello put fastify! Your ID is ${id}`;
});

app.delete("/title/:id", async (req: FastifyRequest<{ Params: { id: string } }>, res) => {
    console.log('DELETE request received');
    const { id } = req.params;
    console.log(`ID: ${id}`);
    return `Hello delete fastify! Your ID is ${id}`;
});

// try{
//     await app.listen({port:Number(post)})
//     console.log(`Server listening on port ${post}`)
// }catch (error) {
//     app.log.error(error)
//     process.exit(1)
// }

start(); // เริ่ม server ที่พอร์ต 3000 (หรือพอร์ตถัดไปถ้า 3000 ถูกใช้งาน)
