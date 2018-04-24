'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string) {
  let array = string.split(" ");

  for (let i = 0; i < array.length; i++) {
    let word = array[i].split('');
    word[0] = word[0].toUpperCase();
    array[i] = word.join('');

  }

  return array.join(' ');
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("Je code comme une merde"),
  "Je Code Comme Une Merde")
// End of tests */
