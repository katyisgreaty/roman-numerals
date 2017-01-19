var integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var bigRomanConvert = function(number) {

  var numberInputArray = number.split("");

  var bigRomanNumberCheck = function(number){
    var numberCheck = true;
    var underFourThousand = true;
    numberInputArray.forEach(function(element) {
      var intquery = integers.indexOf(element);
      if (intquery === -1) {
        numberCheck = false;
      };
    });
    if(!numberCheck) {
      return "Numbers only"
    }
    if (number >=4000) {
      return "Please enter a number less than 4,000"
    } else {
      return false;
    }
  };

  var onesColumn = function() {
    var onesColumnIndex = integers.indexOf(number[numberInputArray.length-1]);
    if (onesColumnIndex === 0) {
      return "";
    } else if (onesColumnIndex === 1) {
      return "I"
    } else if (onesColumnIndex === 2) {
      return "II"
    } else if (onesColumnIndex === 3) {
      return "III"
    } else if (onesColumnIndex === 4) {
      return "IV"
    } else if (onesColumnIndex === 5) {
      return "V"
    } else if (onesColumnIndex === 6) {
      return "VI"
    } else if (onesColumnIndex === 7) {
      return "VII"
    } else if (onesColumnIndex === 8) {
      return "VIII"
    } else if (onesColumnIndex === 9) {
      return "IX"
    }
  };
  var tensColumn = function() {
    var tensColumnIndex = integers.indexOf(number[numberInputArray.length-2])
    if (tensColumnIndex === 0 || tensColumnIndex === -1) {
      return "";
    } else if (tensColumnIndex === 1) {
      return "X"
    } else if (tensColumnIndex === 2) {
      return "XX"
    } else if (tensColumnIndex === 3) {
      return "XXX"
    } else if (tensColumnIndex === 4) {
      return "XL"
    } else if (tensColumnIndex === 5) {
      return "L"
    } else if (tensColumnIndex === 6) {
      return "LX"
    } else if (tensColumnIndex === 7) {
      return "LXX"
    } else if (tensColumnIndex === 8) {
      return "LXXX"
    } else if (tensColumnIndex === 9) {
      return "XC"
    }
  };
  var hundredsColumn = function() {
    var hundredsColumnIndex = integers.indexOf(number[numberInputArray.length-3])
    if (hundredsColumnIndex === 0 || hundredsColumnIndex === -1) {
      return "";
    } else if (hundredsColumnIndex === 1) {
      return "C"
    } else if (hundredsColumnIndex === 2) {
      return "CC"
    } else if (hundredsColumnIndex === 3) {
      return "CCC"
    } else if (hundredsColumnIndex === 4) {
      return "CD"
    } else if (hundredsColumnIndex === 5) {
      return "D"
    } else if (hundredsColumnIndex === 6) {
      return "DC"
    } else if (hundredsColumnIndex === 7) {
      return "DCC"
    } else if (hundredsColumnIndex === 8) {
      return "DCCC"
    } else if (hundredsColumnIndex === 9) {
      return "CM"
    }
  };
  var thousandsColumn = function() {
    var thousandsColumnIndex = integers.indexOf(number[numberInputArray.length-4])
    if (thousandsColumnIndex === 0 || thousandsColumnIndex === -1) {
      return "";
    } else if (thousandsColumnIndex === 1) {
      return "M"
    } else if (thousandsColumnIndex === 2) {
      return "MM"
    } else if (thousandsColumnIndex === 3) {
      return "MMM"
    }
  };

  var checkResult = bigRomanNumberCheck(number);

  if (checkResult) {
    return checkResult;
  } else {
    return "Your Roman Numeral is: " + thousandsColumn() + hundredsColumn() + tensColumn() + onesColumn();
  }
};

//Front end logic
$(document).ready(function(){
  $("form#convert").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#numberEntry").val();
    // var numberInputParse = parseInt($("input#numberEntry").val());
    // var numberInputLength = numberInput.length;

    $(".result").text(bigRomanConvert(numberInput));

  });
});
