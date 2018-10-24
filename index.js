let katzDeliLine = [];
let newPerson = "";

takeANumber(katzDeliLine,newPerson);
function takeANumber(line,person) {
let msg = "";
  var len = line.length();
  line[len+1] = person;
  msg = `Welcome, ${person}. You are number ${len+1} in line.`
  return msg;
}
//*************************************************************************
nowServing(katzDeliLine);
function nowServing(line) {
  let msg= "";
  if(line.length === 0) {
    msg = "There is nobody waiting to be served!";
  }
  else {
    msg = `Now serving ${line[0]}.`;
    katzDeliLine.shift();
  }
  return msg;
}

//*************************************************************************
currentLine(katzDeliLine);
function currentLine(line) {
  let msg = "";
  if(line.length === 0 ) {
    msg = "Current Line is empty";
  }
  else {
    for(let i = 0; i<line.length-1;i++) {
      msg += `${i+1}. line[i],`;
    }
    //Add the last person in line and end msg with a ".""
    msg+ = `${line.length-1}. line[line.length-1].`;
  }
}
//*************************************************************************