// Task 3.1
// Given a DNA strand, return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides.
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

// G -> C
// C -> G
// T -> A
// A -> U
// more (biological) information can be found here.
"use strict";

const rnaComplementList = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

function dnaToRna(dna) {
  let _dna = [];
  _dna = dna.map(nucleotid => rnaComplementList[nucleotid]);
  return _dna;
}

console.log(dnaToRna([])); // []
console.log(dnaToRna(["G", "C", "G", "A"])); // ["C", "G", "C", "U"]
