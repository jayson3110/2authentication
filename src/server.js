import express from 'express'
import { initAPIs } from './routers/api.js'



const app = express()


// Cho phép lý dữ liệu từ form method POST

app.use(express.urlencoded({extended: true}))
app.use(express.json())



// Khởi tạo các APIs cho ứng dụng
initAPIs(app)


// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
const port = 8017
app.listen(port, () => {
  console.log(`Hello, I'm running at localhost:${port}/`)
}) 
