document.write( "<h1>  MATH EXPREAAIONS  <h1/>   "     )
 document.write( "<h1>  VARIABLES  A,B  <h1/>   "     )
 var a= 1
 var b= 2
 var result = ++a - --b + ++a -b--;


 var a= 1
 var b= 2
 var result1= ++b - --a + ++b - --b + a++;

 document.write( result +'<br/>'+ result1  )






// document.write( "<h1>  PERCENTAGE  <h1/>   "     )

// var num1= +prompt( "enter your number " )
// var num2= +prompt("enter your number")
// var opt= prompt("enter your opt  (+ / - * %)" )
// result;
// if(opt==="+") {
// result= num1+num2;
// }
// document.write( " obtained marks"+ result + '<br/>' )



// var num1= +prompt( "enter your number " )
// var num2= +prompt("enter your number")
// var opt= prompt("enter your opt  (+ / - * %)" )
// result;
// if(opt==="-") {
// result= num1-num2;
// }
// document.write( " total marks"+ result + '<br/>' )




// var num1= +prompt( "enter your number " )
// var num2= +prompt("enter your number")
// var opt= prompt("enter your opt  (+ / - * %)" )
// result;
// if(opt==="%") {
// result= num1/num2 *100;
// }
// document.write( " percentage marks"+ result + '<br/>' )

var eng= +prompt("emter the eng number")
var urdu= +prompt("emter the urdu number")
var math= +prompt("emter the math number")
var totalmarks=300
var obtainedmarks=eng + urdu + math;
var per=(obtainedmarks/totalmarks)*100;
document.write("<h1>percentage</h1>")
document.write("obtainedmarks="+obtainedmarks +"</br>")
document.write("totalmarks="+totalmarks+"</br>")
document.write("percentage="+per +"</br>")
