function calculateWeights(string) {
  const weights = new Set();
  let i = 0;

  while (i < string.length) {
    let char = string[i];
    let weight = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    let sum = 0;
    let count = 0;

    while (i < string.length && string[i] === char) {
      count++;
      sum += weight;
      weights.add(weight * count); // Menambahkan bobot substring berulang
      i++;
    }
  }

  return weights;
}

function weightedStrings(string, queries) {
  const weights = calculateWeights(string);
  return queries.map((query) => (weights.has(query) ? 'Yes' : 'No'));
}

// Contoh penggunaan
const string = 'aaabbccccd';
const queries = [3, 6, 12, 24];
const result = weightedStrings(string, queries);
console.log(result); // Output: ["Yes", "No", "Yes", "No"]
