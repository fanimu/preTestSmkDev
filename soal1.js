function getCharWeight(char) {
  return char.charCodeAt(0) - 96; // Convert char to its respective weight (a=1, b=2, ..., z=26)
}

function getAllSubstringsWeights(s) {
  let weights = new Set();
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let weight = 0;
    for (let j = i; j < n; j++) {
      weight += getCharWeight(s[j]);
      weights.add(weight);
    }
  }

  return weights;
}

function weightedStrings(s, queries) {
  let weights = getAllSubstringsWeights(s);
  let result = [];

  for (let query of queries) {
    if (weights.has(query)) {
      result.push('Yes');
    } else {
      result.push('No');
    }
  }

  return result;
}

// Sample Input
let s = 'deeffggg';
let queries = [5, 10, 21, 15];

// Function Call
console.log(weightedStrings(s, queries)); // Output: [ 'Yes', 'Yes', 'Yes', 'No' ]
