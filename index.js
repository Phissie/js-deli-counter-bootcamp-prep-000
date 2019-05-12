function takeANumber(line, name)
{
	line.push(name)
  let position = line.length
	
	return  `Welcome ${name}. You're ${position} in the line `
 
}
takeANumber([], "Fisayo"); 

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length == 1) {
  
    katzDeliLine.splice(0)
  

  }else{
console.log (`There is nobody waiting to be served!`)
}

}
nowServing ([]);

function currentLine(line)
{
var message = "the line is currently: ";  
if(line.length >= 1);
console.log(message)
for (i = 0, i > 0, i++); {
console.log (line[i]); 
}
else
console.log ("The line is currently empty")
} 
