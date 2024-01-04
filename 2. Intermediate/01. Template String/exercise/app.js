// 1. Store this in template string ~
// The quick
// brown fox
// jumps over
// the lazy dog

// 2. Create two variables (firstName, lastName)
// 3. Use that variables in template string.

let text = `The quick
brown fox
jumps over
the lazy dog`;

// ----------------
let firstName = "Dora";
let lastName = "Explorer";

let text2 = `Welcome ${firstName}, ${lastName}!`;
console.log(text2);
console.log(text);
// ----------------
