# Cryptographic Utilities

Cryptographic Utilities is a JavaScript package that provides functionalities for common cryptographic tasks such as hashing, encryption, and decryption.

## Installation

To install Cryptographic Utilities, simply run:

```bash
npm install cryptographic-utils
```

## Usage

```javascript
const CryptoUtils = require('cryptographic-utils');

// Hashing
const hashedData = CryptoUtils.hash('Hello, world!');
console.log('Hashed data:', hashedData);

// Encryption
const key = 'mySecretKey';
const encryptedData = CryptoUtils.encrypt('Sensitive information', key);
console.log('Encrypted data:', encryptedData);

// Decryption
const decryptedData = CryptoUtils.decrypt(encryptedData, key);
console.log('Decrypted data:', decryptedData);
```

## API

### `CryptoUtils.hash(data, algorithm)`

Hashes the provided `data` using the specified `algorithm` (default is SHA-256) and returns the hashed value as a hexadecimal string.

### `CryptoUtils.encrypt(data, key, algorithm)`

Encrypts the provided `data` using the specified `key` and `algorithm` (default is AES-256-CBC) and returns the encrypted value as a hexadecimal string.

### `CryptoUtils.decrypt(data, key, algorithm)`

Decrypts the provided `data` using the specified `key` and `algorithm` (default is AES-256-CBC) and returns the decrypted value as a string.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
