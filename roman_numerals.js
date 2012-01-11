var _ = require('underscore')

function RomanNumeralCalculator(){
  this.calculate = function(number){
    if (typeof number === 'number')
      return arabicToRoman(number)
    else
      return romanToArabic(number)
  }

  function arabicToRoman(number){
    switch(number){
      case 1: return 'I';
      case 5: return 'V';
      case 10: return 'X';
      case 50: return 'L';
      case 100: return 'C';
      case 500: return 'D';
      case 1000: return 'M';
    }
  }

  function romanToArabic(number){
    var romans = {  'M':1000, 'CM':900, 'D':500, 'CD':400, 'C':100, 'XC':90, 'L':50, 'XL':40, 'X':10, 'IX':9, 'V':5, 'IV':4, 'I':1 };
    var total = 0
    _.each(romans, function(arabic, roman){
      while(number.indexOf(roman) === 0) {
        total += arabic;
        number = number.slice(roman.length)
      }
    })
    return total
  }
}

module.exports = RomanNumeralCalculator
