var integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var bigRomanConvert = function(number) {

    var numberInputArray = number.split("");
    var numberCheck = true;
    var underFourThousand = true;

    numberInputArray.forEach(function(element) {
      var intquery = integers.indexOf(element);
      if (intquery === -1) {
        numberCheck = false;
      };
    });
    if(!numberCheck) {
        return "Please enter only numbers";
        //future self: find a way to do these two rules separately
      };
    if (number >=4000) {
      return "Please enter a number less than 4,000"
    }

    return Columns(number);

  };

  var Columns = function(number) {
    var numberInputArray = number.split("");
    var onesColumn = function(number) {
      var onesColumnIndex = integers.indexOf(number[numberInputArray.length-1])
      if (onesColumnIndex === 0) {
        return "_";
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
    var tensColumn = function(number) {
      var numberInputArray = number.split("");
      var tensColumnIndex = integers.indexOf(number[numberInputArray.length-2])
      if (tensColumnIndex === 0) {
        return "_";
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
  };

// };
// if(number >= 4000) {
//     return "Number is too large";
// }



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
