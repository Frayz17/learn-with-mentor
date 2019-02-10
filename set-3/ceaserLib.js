function encryptRight(str, offset = 0) {
  offset = Math.abs(offset);

  if (offset !== 0) {
    let arr = str.split("");
    arr = arr.map(k => shiftValueInRangeRight(k, offset));

    str = arr.join("");

    return str;
  } else return str;
}

function decryptLeft(str, offset = 0) {
  offset = Math.abs(offset);

  if (offset !== 0) {
    let arr = str.split("");
    arr = arr.map(k => shiftValueInRangeLeft(k, offset));

    str = arr.join("");

    return str;
  } else return str;
}

function shiftValueInRangeRight(value, offset) {
  value = value.charCodeAt();
  const valueCodeBase = 97;
  const alphabetLettersAmount = 26;

  let cipherValue =
    ((value - valueCodeBase + offset) % alphabetLettersAmount) + valueCodeBase;

  cipherValue = String.fromCharCode(cipherValue);
  return cipherValue;
}

function shiftValueInRangeLeft(value, offset) {
  value = value.charCodeAt();
  const valueCodeBase = 97;
  const alphabetLettersAmount = 26;

  let cipherValue =
    ((value - valueCodeBase - offset + alphabetLettersAmount) %
      alphabetLettersAmount) +
    valueCodeBase;

  cipherValue = String.fromCharCode(cipherValue);
  return cipherValue;
}

let str1 =
  "NkvsxkbUryvsxKvodrskbwsocgyxkpvoodsxqfsmdybikdkdobbslvomycd^rooxowiZkbcroxnscewwyxondrofsyvoxdOfobcdybwgrsmrxygcgoozcdrogybvngsdrnocdbemdsyxkxnsxsdczkccsxqkgkuoxcdroyxmozokmopevkxncelcobfsoxdzkbcrwoxdydrorybbybypdrosbwsvvoxxskvyxqoxcvkfowoxdlirewkxcarsvoyxknoczobkdopvsqrddygkbxrscpkwsviypdrodrbokdUkvknsx]dybwlvocconwecdmywodyqbszcgsdrdropkmddrkddroxogviusxnvonkxqobypdrozkbcrwoxwkilogryvvitecdspson";

let str =
  "DalinarKholinAlethiarmieswonafleetingvictoryataterriblecostTheenemyParshendisummonedtheviolentEverstormwhichnowsweepstheworldwithdestructionandinitspassingawakenstheoncepeacefulandsubservientparshmentothehorroroftheirmillennialongenslavementbyhumansWhileonadesperateflighttowarnhisfamilyofthethreatKaladinStormblessedmustcometogripswiththefactthatthenewlykindledangeroftheparshmenmaybewhollyjustified";

console.log(encryptRight("qrs", 10));
console.log(decryptLeft(str1, 10));

// -----------------------------------------------
function max(x, y) {
  return x > y ? x : y;
}

function reduce1(fn, xs) {
  let z;
  if (Array.isArray(xs) && xs.length) {
    [z, ..._xs] = xs;
    for (x of _xs) {
      z = fn(z, x);
    }
  } else {
    throw Error("array can't be empty");
  }

  return z;
}
