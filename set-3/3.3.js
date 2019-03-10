// Task 3.3.
// Given a single stranded DNA string, compute how many times each nucleotide
// occurs in the string.

// The genetic language of every living thing on the planet is DNA.
// DNA is a large molecule that is built from an extremely long sequence of
// individual elements called nucleotides. 4 types exist in DNA and these differ
// only slightly and can be represented as the following symbols:
// 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' thymine.

// Here is an analogy: nucleotides are to DNA as legos are to lego houses.
"use strict";

const dna = "AACGTATTGTCCGA";

console.log(countNucleotides(dna)); // { A: 4, C: 3, G: 3, T: 4 }

function countNucleotides(dna) {
  let obj = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  };

  let strArr = dna.split("");

  return strArr.reduce((acc, nucleotid) => {
    switch (nucleotid) {
      case 'A':
        return {...acc, A: acc.A + 1} // this one don't mutate obj
      case 'C':
        acc.C = acc.C + 1;
        break;
      case 'G':
        acc.G = acc.G + 1;
        break;
      case 'T':
        acc.T = acc.T + 1;
        break;  
    }

    return acc;    
  }, obj);
}