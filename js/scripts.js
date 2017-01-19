var integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var bigRomanConvert = function(number) {

  var numberInputArray = number.split("");
  var myAnswer = ""
  var number = true;

  numberInputArray.forEach(function(element) {
    var intquery = integers.indexOf(element);
    if (intquery === -1) {
      number = false;
      myAnswer = "please return only numbers";
    };
  // if(number = false) {
  //     return "Please enter only numbers";
    // };

  }); return myAnswer;
};


//Front end logic
$(document).ready(function(){
  $("form#convert").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#numberEntry").val();

    $(".result").text(bigRomanConvert(numberInput));

  });
});
