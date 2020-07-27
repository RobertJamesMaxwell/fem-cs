// quick, dirty hash function. For example purposes only.
// In production, would want a solid, fast, stable, unique, well-tested hash function,
// but not necessarily a cryptographic one like MD5 of SHA1/256
function hash(string, number) {
  let num = 0;
  for (let i = 0; i < string.length; i++) {
    num = num + string.charCodeAt(i) * number;
  }
  return num % 500;
}

class BloomFilter {}

console.log(hash("Robert", 4));
console.log(hash("Robert", 5));
console.log(hash("Robert", 4));
console.log(hash("Roberttt", 5));
