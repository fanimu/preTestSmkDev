function isBalanced(string) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let char of string) {
    if (brackets[char]) {
      // Jika karakter adalah kurung buka, masukkan ke stack
      stack.push(char);
    } else {
      // Jika karakter adalah kurung tutup, periksa apakah cocok dengan kurung buka terakhir di stack
      const lastBracket = stack.pop();
      if (brackets[lastBracket] !== char) {
        return 'NO';
      }
    }
  }

  // Jika stack kosong, maka semua kurung berpasangan dengan benar
  return stack.length === 0 ? 'YES' : 'NO';
}

// Contoh penggunaan
console.log(isBalanced('([{}])')); // Output: YES
console.log(isBalanced('([{]})')); // Output: NO
console.log(isBalanced('({[]})')); // Output: YES

// # Balanced Brackets

// ## Deskripsi
// Fungsi ini menentukan apakah sebuah string memiliki tanda kurung yang seimbang. Tanda kurung yang diperbolehkan adalah: (, ), {, }, [, ].

// ## Kompleksitas
// ### Waktu
// Kompleksitas waktu dari fungsi ini adalah O(n), di mana n adalah panjang string. Ini karena kita hanya mengiterasi string sekali dan setiap operasi stack (push dan pop) memakan waktu O(1).

// ### Ruang
// Kompleksitas ruang dari fungsi ini adalah O(n), di mana n adalah panjang string. Dalam kasus terburuk, kita mungkin perlu menyimpan semua kurung buka dalam stack.

// ## Contoh Penggunaan
// ```javascript
// console.log(isBalanced("([{}])")); // Output: YES
// console.log(isBalanced("([{]})")); // Output: NO
// console.log(isBalanced("({[]})")); // Output: YES
