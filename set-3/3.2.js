// Codon              | Protein
// -----------------------------------
// AUG                | Methionine
// UUU, UUC           | Phenylalanine
// UUA, UUG           | Leucine
// UCU, UCC, UCA, UCG | Serine
// UAU, UAC           | Tyrosine
// UGU, UGC           | Cysteine
// UGG                | Tryptophan
// UAA, UAG, UGA      | STOP
"use strict";

const codonProteinTable = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
};

let rna = "UGUUCGUCUUUUAUGUGAUAGUGC";
console.log(rnaToProteins(rna)); // [ 'Cysteine', 'Serine', 'Serine', 'Phenylalanine', 'Methionine' ]

function rnaToProteins(rna) {
  // codons array create
  const regex = /.{3}/g;
  let codonsArr = rna.match(regex);

  // codons array clean
  let index = codonsArr.findIndex(
    codon => codon === "UAA" || codon === "UAG" || codon === "UGA"
  );
  codonsArr = codonsArr.slice(0, index);

  // map codons to proteins
  let proteins = [];
  proteins = codonsArr.map(codons => codonProteinTable[codons]);

  return proteins;
}
