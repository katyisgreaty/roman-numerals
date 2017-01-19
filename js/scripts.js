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

    return onesColumn(number);

  };

  var onesColumn = function(number) {
    var numberInputArray = number.split("");
    var onesColumnIndex = integers.indexOf(number[numberInputArray.length-1])
    if (onesColumnIndex === 0) {
      return "The result is:";
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
