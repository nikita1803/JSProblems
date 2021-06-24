var maximum = 0;
var minimum = 999;

 for (count = 1; count <= 5; count++) 
 {
     number = Math.floor(Math.random() * 900 + 100);
     console.log("Number" + count + " is: " + number)
     if (number > maximum) 
     {
         maximum = number;
     }
     else (number < minimum) 
     {
         minimum = number;
     }
 }
console.log("Maxium Num is: " +maximum)
console.log("Minimum Num is: " +minimum)

