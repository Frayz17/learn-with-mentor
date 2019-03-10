"use strict";

// libraries
let reduce1ArgLib = require("./libs/reduce1Arg.js");
let ceaserCipherLib = require("./libs/ceaserCipher.js");

// example strings
let str1 =
  "qeb zxjmxfdk yolrdeq elklrop xka moljlqflk ql jxkv, yrq clo jb fq exa klqefkd yrq jfpcloqrkb xka afpxpqbo. f txp objlsba colj jv yofdxab xka xqqxzeba ql qeb ybohpefobp, tfqe telj f pbosba xq qeb cxqxi yxqqib lc jxftxka. qebob f txp pqorzh lk qeb pelriabo yv x gbwxfi yriibq, tefze pexqqboba qeb ylkb xka doxwba qeb pryzixsfxk xoqbov. f pelria exsb cxiibk fkql qeb exkap lc qeb jroabolrp dexwfp exa fq klq ybbk clo qeb abslqflk xka zlroxdb peltk yv jrooxv, jv loaboiv, tel qeobt jb xzolpp x mxzhelopb, xka przzbbaba fk yofkdfkd jb pxcbiv ql qeb yofqfpe ifkbp.";
let str2 =
  "qilh qcnb juch, uhx qyue zlig nby jlifihayx bulxmbcjm qbcwb c bux ohxylaihy, c qum lygipyx, qcnb u alyun nluch iz qiohxyx mozzylylm, ni nby vumy bimjcnuf un jymbuqul. byly c luffcyx, uhx bux uflyuxs cgjlipyx mi zul um ni vy uvfy ni qufe uvion nby qulxm, uhx ypyh ni vume u fcnnfy ojih nby pyluhxu, qbyh c qum mnlowe xiqh vs yhnylcw zypyl, nbun wolmy iz iol chxcuh jimmymmcihm. zil gihnbm gs fczy qum xymjuclyx iz, uhx qbyh un fumn c wugy ni gsmyfz uhx vywugy wihpufymwyhn, c qum mi qyue uhx yguwcunyx nbun u gyxcwuf viulx xynylgchyx nbun hin u xus mbiofx vy fimn ch myhxcha gy vuwe ni yhafuhx. c qum xymjunwbyx, uwwilxchafs, ch nby nliijmbcj ilihnym, uhx fuhxyx u gihnb funyl ih jilnmgionb dynns, qcnb gs byufnb cllynlcypuvfs lochyx, von qcnb jylgcmmcih zlig u junylhuf aipylhgyhn ni mjyhx nby hyrn hchy gihnbm ch unnygjncha ni cgjlipy cn.";

// decoded strings
str1 = ceaserCipherDecoder(str1); // the campaign brought honours...
str2 = ceaserCipherDecoder(str2); // worn with pain, and weak from the prolonged...

console.log(str2);

// ---------------------------------------------------------
// ---------------------------------------------------------
function ceaserCipherDecoder(str) {
  // creating table of all letters in the string
  let lettersTable = letterAnalyzer(str);
  // take the most frequent letter from table
  let MostFreqLetter = MostFreqLetterFromString(lettersTable);
  // using decoder to return decoded string
  let decodedStr = decoder(MostFreqLetter, str);

  return decodedStr;
}

function letterAnalyzer(str) {
  let letersTable = {};

  for (let i = 97; i <= 122; i++) {
    let letter = String.fromCharCode(i);
    var regexLetter = new RegExp(letter, "g");

    // if string has letter find all occurrences and add to leters table
    if (regexLetter.test(str)) {
      letersTable[letter] = str.match(regexLetter).length;
    }
  }

  return letersTable;
}

function MostFreqLetterFromString(lettersTable) {
  const keys = Object.keys(lettersTable);
  const values = Object.values(lettersTable);
  if (!keys.length) throw Error("object can't be empty");

  let maxValue = reduce1ArgLib.reduce(reduce1ArgLib.max, values);

  let MostFrecLetter = {};
  for (let key of keys) {
    if (lettersTable[key] === maxValue) {
      MostFrecLetter[key] = maxValue;
    }
  }

  return MostFrecLetter;
}

function decoder(objLetter, str) {
  const eCode = 101;
  let keys = Object.keys(objLetter);
  let charCodes = keys.map(key => key.charCodeAt());
  let encryptKey = Math.abs(charCodes[0] - eCode);

  str =
    charCodes[0] > eCode
      ? ceaserCipherLib.decryptLeft(str, encryptKey)
      : ceaserCipherLib.encryptRight(str, encryptKey);
  return str;
}
