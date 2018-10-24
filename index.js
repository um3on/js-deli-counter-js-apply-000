var katzDeliLine = [];
var currentLine = [];
var newPerson = "";

takeANumber(currentLine,newPerson);
function takeANumber(line,person) {
var msg = "";
  var len = line.length();
  line[len+1] = person;
  msg = `Welcome, ${person}. You are number ${len+1} in line`
}
