// quick, dirty hash function. For example purposes only.
// In production, would want a solid, fast, stable, unique, well-tested hash function,
// but not necessarily a cryptographic one like MD5 of SHA1/256
function hash(string, number) {
  let num = 0;
  for (let i = 0; i < string.length; i++) {
    num = num + string.charCodeAt(i) * number;
  }
  return num % 100;
}

class BloomFilter {
  HASH_VALUES = [4, 5, 6];

  constructor(size = 100) {
    this.filter = new Array(size);
    this.filter.fill(0);
  }

  add(string) {
    const hash1 = hash(string, this.HASH_VALUES[0]);
    const hash2 = hash(string, this.HASH_VALUES[1]);
    const hash3 = hash(string, this.HASH_VALUES[2]);
    if (!this.filter[hash1]) {
      this.filter[hash1] = 1;
    }
    if (!this.filter[hash2]) {
      this.filter[hash2] = 1;
    }
    if (!this.filter[hash3]) {
      this.filter[hash3] = 1;
    }
  }

  check(string) {
    const hash1 = hash(string, this.HASH_VALUES[0]);
    const hash2 = hash(string, this.HASH_VALUES[1]);
    const hash3 = hash(string, this.HASH_VALUES[2]);
    if (!this.filter[hash1] && !this.filter[hash2] && !this.filter[hash3]) {
      return "no";
    } else {
      return "maybe";
    }
  }
}

const bf = new BloomFilter();
// console.log(bf);
bf.add("Robert");
bf.add("Anja");
// console.log(bf);
console.log(bf.check("Robert"));
console.log(bf.check("Anja"));
console.log(bf.check("Maxwell"));
