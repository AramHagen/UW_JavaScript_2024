// Create a function testPhoneNumber
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid
const testPhoneNumber = (phoneNumber) => {
  const regex = /^\(?\d{3}\)?[-\s]\d{3}[-\s]\d{4}$/;

  const result = regex.test(phoneNumber);
  if (result) {
    console.log(`%c${phoneNumber} is a valid phone number.`, "color:green");
    return true;
  } else {
    console.log(`%c${phoneNumber} isn't a valid phone number.`, "color:red");
    return false;
  }
};

// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber("(206) 333-4444")); // should return true
console.log(testPhoneNumber("(206) 33-4444")); // should return false, missing a digit

// 1. Create a function parsePhoneNumber that takes in a phoneNumber string
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
// const parsePhoneNumber = (phoneNumberString) => {
//   if (testPhoneNumber(phoneNumberString)) {
//     const areaRegex = /^\(?(\d{3})\)?/;
//     const phoneRegex = /(?:\(?\d{3}\)?[-\s]?)?(\d{3})[-\s](\d{4})/;

//     // const regExp1 = new RegExp("\\d{3,}", "g");
//     // const regExp1 = /\d{3,}/g; // use /g to get all matches

//     const areaCode = phoneNumberString.match(areaRegex);
//     const phoneNumber = phoneNumberString.match(phoneRegex);
    
//     return {
//       areaCode: areaCode[1],
//       phoneNumber: phoneNumber[1] + phoneNumber[2],
//     };
//   }
// };




const parsePhoneNumber = (phoneNumber) => {
  const regExp1 = /\d{3,}/g; 
  let arrPhoneNumParts;
  // arrPhoneNumParts = regExp1.exec(phoneNumber);
  arrPhoneNumParts = phoneNumber.match(regExp1);
  console.log(arrPhoneNumParts);
  const phoneObject = {
    areaCode : arrPhoneNumParts[0],
    phoneNumber: arrPhoneNumParts[1]//+arrPhoneNumParts[2]
  };
  return arrPhoneNumParts;
};

// Check parsePhoneNumber
console.log(parsePhoneNumber("206-333-4444"));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber("(222) 422-5353"));
// returns {areaCode: '222', phoneNumber: '4225353'}
// Create a function testPhoneNumber
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid
const testPhoneNumber = (phoneNumber) => {
  const regex = /^\(?\d{3}\)?[-\s]\d{3}[-\s]\d{4}$/;

  const result = regex.test(phoneNumber);
  if (result) {
    console.log(`%c${phoneNumber} is a valid phone number.`, "color:green");
    return true;
  } else {
    console.log(`%c${phoneNumber} isn't a valid phone number.`, "color:red");
    return false;
  }
};

// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber("(206) 333-4444")); // should return true
console.log(testPhoneNumber("(206) 33-4444")); // should return false, missing a digit

// 1. Create a function parsePhoneNumber that takes in a phoneNumber string
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
const parsePhoneNumber = (phoneNumberString) => {
  if (testPhoneNumber(phoneNumberString)) {
    const areaRegex = /^\(?(\d{3})\)?/;
    const phoneRegex = /(?:\(?\d{3}\)?[-\s]?)?(\d{3})[-\s](\d{4})/;

    const areaCode = phoneNumberString.match(areaRegex);
    const phoneNumber = phoneNumberString.match(phoneRegex);

    return {
      areaCode: areaCode[1],
      phoneNumber: phoneNumber[1] + phoneNumber[2],
    };
  }
};
// Check parsePhoneNumber
console.log(parsePhoneNumber("206-333-4444"));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber("(222) 422-5353"));
// returns {areaCode: '222', phoneNumber: '4225353'}