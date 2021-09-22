/* File này khá đơn giản, chỉ có một controller để gọi tra trang chủ homepage. 
Mình chỉ sử dụng module path lấy đường dẫn file html để trả về client. */


import path from 'path'

// Lấy đường dẫn thư mục gốc của ứng dụng

const __dirname = path.resolve();

/* controller get homepage      */

const getHomePage =  async (req, res ) => {
	return res.sendFile(path.join(`${__dirname}/src/views/home.html`));
} ;



export {
  getHomePage,
}