function isBalanced(input) {
  // Buat mapping untuk tanda kurung yang buka dan tutup
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  // Inisialisasi stack untuk menyimpan tanda kurung buka
  let stack = [];

  // Loop melalui setiap karakter dalam string input
  for (let char of input) {
    // Jika karakter adalah tanda kurung buka, masukkan ke stack
    if (brackets[char]) {
      stack.push(char);
    } else {
      // Jika karakter adalah tanda kurung tutup
      // Cek jika stack tidak kosong dan tanda kurung tutup ini memiliki pasangan dengan tanda kurung buka teratas di stack
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return 'NO';
      }
    }
  }

  // Jika setelah loop stack kosong, berarti tanda kurung seimbang
  return stack.length === 0 ? 'YES' : 'NO';
}

// Contoh penggunaan
console.log(isBalanced('{[(())]}')); // Output: YES
console.log(isBalanced('{[(])}')); // Output: NO
console.log(isBalanced('[{()}]')); // Output: YES
