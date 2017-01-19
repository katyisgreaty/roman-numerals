var integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var bigRomanConvert = function(number) {

  var numberInputArray = numberInput.split("");
  var number = true;
  numberInputArray.forEach(function(element) {
    var intquery = integers.indexOf(element);
    if (intquery = -1) {
      number = false;
    }
  })














}




//Front end logic
$(document).ready(function(){
  ("form#convert").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberEntry").val());

  });
});
