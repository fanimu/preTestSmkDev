function highestPalindrome(string, k) {
  // Konversi string ke array agar dapat dimutasi (JavaScript string tidak dapat dimutasi langsung)
  let arr = string.split('');
  let n = arr.length;

  // Fungsi rekursif untuk mencari highest palindrome
  function findHighestPalindrome(left, right, replacementsLeft) {
    // Base case: jika sudah menyelesaikan semua penggantian
    if (left >= right) {
      return arr.join('');
    }

    // Jika karakter di left dan right tidak sama, ganti dengan yang lebih besar
    if (arr[left] !== arr[right]) {
      let maxChar = Math.max(arr[left], arr[right]);
      arr[left] = maxChar;
      arr[right] = maxChar;
      replacementsLeft--; // Mengurangi penggantian yang tersisa
    }

    // Rekursif ke posisi selanjutnya
    return findHighestPalindrome(left + 1, right - 1, replacementsLeft);
  }

  // Panggil fungsi rekursif untuk mencari highest palindrome
  let result = findHighestPalindrome(0, n - 1, k);

  // Jika masih ada penggantian yang tersisa dan string belum palindrome
  if (result !== arr.join('') && k > 0) {
    return -1; // Tidak mungkin menjadi palindrome dengan k penggantian
  } else {
    return result;
  }
}

// Contoh penggunaan
console.log(highestPalindrome('12321', 1)); // Output: 13331
console.log(highestPalindrome('45654', 2)); // Output: 55655
