export function CheckEvenNumber(val) {
  // console.log('val', val);
  if (val % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
//intha mathiri function na ezhuthuna theva padum podhu eduthu
export function ValidateEmail(val) {
  console.log('val.length', val);
  let validationObj = { isMatching: false, isEmpty: false };
  let pattern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  console.log("test--->",pattern.test(val))
  // console.log("match--->",val.match( /@/ ))

  if ( !pattern.test(val)) {
    //includes athu irrukanu paakuthu
    validationObj.isMatching = true;
  }
  else {
   
     console.log("validationObj.isMatching",validationObj.isMatching)
  }
  if (val.length === 0) {
    validationObj.isEmpty = true;
    // validationObj.isdisplay=true
  }
if(validationObj.isEmpty===true){
  return "invalide email"
}
else if(validationObj.isMatching===true)
{
  return validationObj.isMatching
}
}


export function ValidatePassword(val) {
  // console.log('val--->2', val);
  let validationObj = { isMatchings: false, isEmptys: false };
  // if (val.length===0) {
  //    return "invalid password"
  // validationObj.isMatchings = true;//input la value varum podhu nadakkum
  // console.log(validationObj.isMatchings,"length--->",val.length)
  // }
  // else if(val.length!==0){
  //   return validationObj.isMatchings = truew
  // }
  let pattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})(?=.[!@#$\%^\&])/
  // let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  console.log("test->2222",pattern.test(val))
  
  if (val.length === 0) {
    validationObj.isEmptys = true;
  }
  if (val.length > 8) {
    validationObj.isMatchings = true;
    return validationObj.isMatchings;

  }

  if (validationObj.isMatchings === true) {
    return validationObj.isMatchings;
  } else if (validationObj.isEmptys === true) {
    return validationObj.isEmptys === true ? 'invalid password' : null;
  }
}

export function ValidateNumbers(val1,val2) {
  // console.log("val1-->",val1,"val2-->",val2)
  let processedData = {
    sum: val1 + val2,
    diff: val1 - val2,
    product: val1 * val2,
    isSumEven: (val1 + val2) % 2 === 0 ? true : false, //15 false
    isProdOdd: val1 * val2 * 2 === 1 ? true : false, //50 true
  };
  // console.log("processedData---->1",processedData.isSumEven)
  if (processedData.isSumEven) {
    return processedData.sum;
  } else {
    return processedData.product;
  }
}
