/*   otplib 
  generateUniqueSecret: Tạo mã Secret Key
  generateOTPtoken: Tạo mã OTP token
  verifyOTPToken: Xác thực (verify) mã OTP token.
  
    qrcode 
  generateQRCode : Tạo mã QR Code  */

import qrcode from 'qrcode'
import otplib from 'otplib'

/* Gọi ra để sử dụng đối tượng "authenticator" của thằng otplib */

const { authenticator } = otplib

/** Tạo secret key ứng với từng user để phục vụ việc tạo opt token 
    * Lưu ý: Secret phải được gen bằng lib otplib thì những app như 
      Google Authenticator hoặc tương tự mới xử lý chính xác được.
    * Chúng ta có thể thử để linh tinh cái secret này thì đến bước quét
      mã QR sẽ thấy lỗi ngay.

 */

const generateUniqueSecret = () => {
	return authenticator.generateSecret();
}

/* Tạo mã OTP token   */
const generateOTPToken = (username, serviceName, secret) => {
  return authenticator.keyuri(username, serviceName, secret)
}


/** Kiểm tra mã OTP token có hợp lệ hay không 
  * Có 2 method "verify" hoặc "check", ta có thể sử dùng một trong 2 tùy thích
*/

const verifyOTPToken = (token, secret) => {
	return authenticator.verify({token, secret});
	// return authenticator.check({token, secret})
};


/** Tạo QR code từ mã OTP để gửi về cho user sử dụng app quét mã */
const generateQRCode = async (otpAuth) => {
  try {
    const QRCodeImageUrl = await qrcode.toDataURL(otpAuth)
    return `<img src='${QRCodeImageUrl}' alt='qr-code-img-jayson' />`
  } catch (error) {
    console.log('Could not generate QR code', error)
    return
  }
}

export {
	generateUniqueSecret,
	verifyOTPToken,
	generateOTPToken,
	generateQRCode
}