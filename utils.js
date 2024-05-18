const crypto = require('crypto')
const path = require('path')
const fs = require('fs')

const encrypt = function (toEncrypt, relativeOrAbsolutePathToPublicKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey)
  const publicKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(toEncrypt, 'utf8')
  const encrypted = crypto.publicEncrypt({
    key: publicKey  
  }, buffer)
  return encrypted
}

const decrypt = function(toDecrypt, relativeOrAbsolutePathtoPrivateKey, _passphrase) {
  const absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey)
  const privateKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(toDecrypt)
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey.toString(),
      passphrase: _passphrase,
    },
    buffer,
  )
  return decrypted.toString('utf8')
}
