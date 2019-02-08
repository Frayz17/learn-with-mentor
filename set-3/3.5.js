

  let str = 'aaaaasfdgjgjghjdjthersgrgsegrthytukiolppndth';
  

  function letterAnalyzer(str) {
    letersTable = {};

    for (i = 97; i <= 122; i++) {
      let letter = String.fromCharCode(i);  
      var regexLetter = new RegExp(letter, 'g');
      
      // if string has letter find all occurrences and add to leters table
      if (regexLetter.test(str)) {
        letersTable[letter] = str.match(regexLetter).length;
      }

      
      // console.log(letter);
    }

    return letersTable;
  }

// let obj = { a: 4, b: 0.5 , c: 0.35, d: 5 };

// let arr = Object.values(obj);

// let min = Math.min(...arr);
// let max = Math.max(...arr);

// console.log( `Min value: ${min}, max value: ${max}` );

// let obj1 = Object.keys(obj).reduce((acc, curr) => Math.max(obj[acc], obj[curr]), {});

// console.log( obj1 );



let obj = { a: 4, b: 5 , c: 35, d: 5, k: 6 };

function MaxValueFromObj(obj) {
  let _obj = Object.assign(obj);

  _obj = Object.keys(obj).reduce((a, c) => {

    return Math.max(_obj[a], _obj[c]);
  }, {});

  return _obj;
}

console.log(MaxValueFromObj(obj));   // NaN
console.log(Math.max(obj.a, obj.b)); // 5

let p = 7;
function foo(p) {
  p = 800;
  return p;
}

console.log(foo(p)); // 8
console.log(p); // 7