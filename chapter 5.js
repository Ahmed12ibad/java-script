document.write( " <h1> chap& 5 mathmatic expression <h1/>    " )


document.write( " <h1> teble <h1/>    " )
var teble=prompt("enter your number")
document.write("<h3>" +teble+ "x1=" +teble*1 +"</h3>"    )
document.write("<h3>" +teble+ "x2=" +teble*2 +"</h3>"    )
document.write("<h3>" +teble+ "x3=" +teble*3 +"</h3>"    )
document.write("<h3>" +teble+ "x4=" +teble*4 +"</h3>"    )
document.write("<h3>" +teble+ "x5=" +teble*5 +"</h3>"    )
document.write("<h3>" +teble+ "x6=" +teble*6 +"</h3>"    )
document.write("<h3>" +teble+ "x7=" +teble*7 +"</h3>"    )
document.write("<h3>" +teble+ "x8=" +teble*8 +"</h3>"    )
document.write("<h3>" +teble+ "x9=" +teble*9 +"</h3>"    )
document.write("<h3>" +teble+ "x10=" +teble*10 +"</h3>"    )

// var x1= (5*1)
// var x2= (5*2)
// var x3= (5*3)
// var x4= (5*4)
// var x5= (5*5)
// var x6= (5*6)
// var x7= (5*7)
// var x8=(5*8)
// var x9 =(5*9)
// var x10 =(5*10)
// document.write(x1+'<br/>'+x2+'<br/>'+x3+'<br/>'+x4+'<br/>'+x5+'<br/>'+x6+'<br/>'+x7+'<br/>'+x8+'<br/>'+x9+'<br/>'+x10 )


document.write( " <h1> shopping card <h1/>  " )

document.write( " <h3> prize of item 1 is 650 <h3/>  " )
document.write( " <h3> quentity of item 1 of 3 <h3/>  " )
document.write( " <h3> prize of item 2 of 100 <h3/>  " )
document.write( " <h3> quentity of item 2 is 7 <h3/>  " )
document.write( " <h3> shoping charges 100 <h3/>  " )

var num1= +prompt("enter your number")
var num2= +prompt("enter your number" )
var num3= +prompt("enter your number" )
var opt4= prompt("enter your number (+)" )
var result;
if(opt4=== "+") {
  var  result= num1+num2+num3
}

document.write( " <h1> total <h1/>  " )
document.write( result + '<h3/>' )
