// index.js

const crypto = require('crypto');

class CryptoUtils {
  static hash(data, algorithm = 'sha256') {
    return crypto.createHash(algorithm).update(data).digest('hex');
  }

  static encrypt(data, key, algorithm = 'aes-256-cbc') {
    const cipher = crypto.createCipher(algorithm, key);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  static decrypt(data, key, algorithm = 'aes-256-cbc') {
    const decipher = crypto.createDecipher(algorithm, key);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}

module.exports = CryptoUtils;
