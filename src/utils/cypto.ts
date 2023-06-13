// const crypto = require('node:crypto')
import crypto from 'node:crypto'

// 生成加密后的 token
export function encryptToken(token: string) {
  const secret = 'your-secret-key' // 秘钥，用于加密和解密
  const cipher = crypto.createDecipher('aes-256-cbc', secret)

  let encryptedToken = cipher.update(token, 'utf8', 'hex')
  encryptedToken += cipher.final('hex')

  return encryptedToken
}

// 解密 token
export function decryptToken(encryptedToken: string) {
  const secret = 'your-secret-key' // 秘钥，用于加密和解密
  const decipher = crypto.createDecipher('aes-256-cbc', secret)

  let decryptedToken = decipher.update(encryptedToken, 'hex', 'utf8')
  decryptedToken += decipher.final('utf8')

  return decryptedToken
}

// 示例使用
const token = 'abc123'
const encryptedToken = encryptToken(token)
console.log('Encrypted Token:', encryptedToken)

const decryptedToken = decryptToken(encryptedToken)
console.log('Decrypted Token:', decryptedToken)
