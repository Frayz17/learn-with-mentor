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

let rna = "AUGUUUUCUUAAAUG";

function rnaToCodons(rna) {
  const regex = /.{3}/g;
  const codonsArr = rna.match(regex);
  return codonsArr;
}

function codonsToProteine(codons) {
  let _codons = [];
  _codons = codons.map(codons => codonProteinTable[codons]);
  return _codons;
}

const codons = rnaToCodons(rna);
console.log(rnaToCodons(rna));
console.log(codonsToProteine(codons));

function rnaToProteins() {}
