import SimpleCrypto from "simple-encrypt-decrypt-cipher";

export function caesarEncrypt(text: string, shift: number) {
  const crypto = new SimpleCrypto(text);
  return crypto.encrypt(shift);
}

export function caesarDecrypt(text: string, shift: number) {
  const crypto = new SimpleCrypto(text);
  return crypto.decrypt(shift);
}

export function keyEncrypt(text: string, key: string) {
  const crypto = new SimpleCrypto(text);
  return crypto.encryptWithPassword(key);
}

export function keyDecrypt(text: string, key: string) {
  const crypto = new SimpleCrypto(text);
  return crypto.decryptWithPassWord(key);
}
