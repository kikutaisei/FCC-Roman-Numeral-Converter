function convertToRoman(num) {

    // Object to store the roman numerals and their corresponding decimal values
    const romanToDecimal = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }
  
    // Object to store the decimal values and their corresponding roman numerals
    const decimalToRoman = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I",
    }
    
    // Variable to store the parameter and to act as a counter for the while loop
    let currentNum = num;
  
    // Array to store the decimal values
    let decimalNums = [];
  
    // For loop through each of the roman numerals
    for (let value in romanToDecimal){
      while (currentNum >= romanToDecimal[value]){
        decimalNums.push(romanToDecimal[value]);
        currentNum -= romanToDecimal[value];
      }
    }
  
    // Array to store the roman numeral equivalent of the decimal values
    let romanNums = [];
  
    // For loop through each of the stored decimal values
    for (let i = 0; i < decimalNums.length; i++){
      romanNums.push(decimalToRoman[decimalNums[i]]);
    }
  
    // Variable to store the string version of the roman numeral conversion
    let romanConvert = romanNums.join("");
  
    return romanConvert;
  }
  
  convertToRoman(36);