const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter month', month => {
    console.log(`Entered Month is  ${month}`)
    Month=month;
  readline.question('Enter Day', day => {
    console.log(`Entered Day is ${day}`);
    Day=day;
    MonthTest(Month,Day);
    readline.close();
  })
});

function MonthTest(Month,Day)
{
var month = (Month*100);
var day=Day*1;
var day_of_month = month+day;
console.log("day_of_month" + day_of_month);
if((day_of_month>320) && (day_of_month<620))
{
    console.log("True");
}
else{
    console.log("False");
}
}