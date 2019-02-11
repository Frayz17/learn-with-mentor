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
  const regexA = /A/g;
  const regexC = /C/g;
  const regexG = /G/g;
  const regexT = /T/g;

  let obj = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  };

  let strArr = dna.split("");
  return strArr.reduce((acc, nucleotid) => {
    console.log(acc, obj[nucleotid]);
    // if (nucleotid === "A") {
    //   return acc.A = ;
    // } else if (nucleotid === "C") {
    //   return acc.C++;
    // } else if (nucleotid === "G") {
    //   return acc.G++;
    // } else if (nucleotid === "T") {
    //   return acc.T++;
    // } else throw Error("letter is incorrect");
  }, obj);
  // console.log(strArr);
}

// function countNucleotides(dna) {
//   const regexA = /A/g;
//   const regexC = /C/g;
//   const regexG = /G/g;
//   const regexT = /T/g;

//   const amountNucleotidesA = dna.match(regexA).length;
//   const amountNucleotidesC = dna.match(regexC).length;
//   const amountNucleotidesG = dna.match(regexG).length;
//   const amountNucleotidesT = dna.match(regexT).length;

//   return {
//     A: amountNucleotidesA,
//     C: amountNucleotidesC,
//     G: amountNucleotidesG,
//     T: amountNucleotidesT
//   };
// }
