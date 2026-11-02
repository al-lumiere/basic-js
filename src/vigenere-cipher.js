const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(message, key) {
    return this.process(message, key, -1);
  }

  process(message, key, direction) {
    if (
      typeof message !== 'string' ||
      typeof key !== 'string' ||
      key.length === 0
    ) {
      throw new Error('Incorrect arguments!');
    }

    const text = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (const char of text) {
      if (char >= 'A' && char <= 'Z') {
        const letterCode = char.charCodeAt(0) - 65;
        const shift =
          upperKey.charCodeAt(keyIndex % upperKey.length) - 65;

        const newCode = (letterCode + direction * shift + 26) % 26;

        result += String.fromCharCode(newCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct
      ? result
      : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
