var katzDeliLine = [];
var newPerson = "";

takeANumber(katzDeliLine,newPerson);
function takeANumber(line,person) {
var msg = "";
  var len = line.length();
  line[len+1] = person;
  msg = `Welcome, ${person}. You are number ${len+1} in line.`
  return msg;
}
//*************************************************************************
nowServing(katzDeliLine);
function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    katzDeliLine.shift();
  }
}
