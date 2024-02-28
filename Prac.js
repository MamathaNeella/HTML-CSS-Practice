// Java Script

// let x=10;
// let y=20;
// document.write("x "+" + " +"y "+"= "+(x+y)+("<br>"));

// Operators in JS

// Arthmetic Operators
let a=30;
let b=90;
let c=45;
document.write("a "+"+ "+"b "+"= "+(a+b)+("<br>"));
document.write("a "+"- "+"b "+"= "+(a-b)+("<br>"));
document.write("a "+"* "+"b "+"= "+(a*b)+("<br>"));
document.write("a "+"% "+"b "+"= "+(a%b)+("<br>"));
document.write("a "+"/ "+"b "+"= "+(a/b)+("<br>"));
// Negate
let d= 90
document.write((-d)+("<br>"+"<br>"));


// Assignment Operators

/*let x=10;
let y=13;
document.write(x=y+("<br>"));
document.write((x=x+y)+("<br>"));
document.write(x-=y+("<br>"));
document.write(x*=y+("<br>"));
document.write(x%=y+("<br>"));
document.write(x/=y+("<br>"));
document.write(x**=y+("<br>"+"<br>"));*/

// Comparison Operators
// output true or false

/*let x=98;
let y=54;
document.write((x==y)+("<br>"));
document.write((x!=y)+("<br>"));
document.write((x>y)+("<br>"));
document.write((x>=y)+("<br>"));
document.write((x<y)+("<br>"));
document.write((x<=y)+("<br>"+"<br>"));*/

//Logical Operators
// output true or false

/* let x=54;
let y=12;
document.write((x==y && y<x)+("<br>")); //both the conditions should be correct
document.write((x==y || y<x)+("<br>")); //one condition should be correct
document.write(!(x>y)+("<br>")); //when condition is not correct
*/

// Conditional Operators
// if the condition is true 1st statement will excute
// if the condition is false 2nd statement will excute

/* let x=34;
let y=90;
(x>y)?document.write("x is greater than y"+("<br>")):document.write("x is smaller than y"+("<br>"));
(x<y)?document.write("x is greater than y"+("<br>")):document.write("x is smaller than y"+("<br>"));
*/

// Type conversion in JS
// Implicit and Explicit

// Implicit, in certain situations js automatically convert one data type to the right one

/* let x="15";
let y=90;
document.write((x+y)+("<br>")); // in this case x is string and y is int but js converted y to string returns output 1590 */

/* let x=15;
let y=90;
document.write((x+y)+("<br>")); // in this case it returns output 105 because x and y are integers
*/

//Explicit conversion which you do manually as per your needs

// let x="90";
// let y=12;
// document.write((x+y)+("<br>"));
// document.write(typeof(x)+("<br>"));
// document.write(typeof(y)+("<br>"));
// document.write((Number(x)+y)+("<br>"));
// let z=Number(x);
// document.write(typeof(z)+("<br>"));

// String conversion

// let x=90;
// let y=12;
// document.write((x+y)+("<br>"));
// document.write(typeof(x)+("<br>"));
// document.write(typeof(y)+("<br>"));
// document.write((String(x)+y)+("<br>"));
// document.write((x+y)+("<br>"));

// Boolean conversion

// let x=90;
// let y=12;
// document.write((x+y)+("<br>"));
// document.write(typeof(x)+("<br>"));
// document.write(typeof(y)+("<br>"));
// let z=Boolean(x);
// document.write(typeof(z));

// Parseint conversion

// let x=90;
// let y=12;
// document.write((x+y)+("<br>"));
// document.write(typeof(x)+("<br>"));
// document.write(typeof(y)+("<br>"));
// let z=parseInt(x);
// document.write(typeof(z));

// Parsefloat

/* let x=90;
let y=12;
document.write((x+y)+("<br>"));
document.write(typeof(x)+("<br>"));
document.write(typeof(y)+("<br>"));
let z=parseFloat(x);
document.write(typeof(z)); */

// Math.floor()


/* let x=90.30;
let y=12;
document.write((x+y)+("<br>"));
document.write(typeof(x)+("<br>"));
document.write(typeof(y)+("<br>"));
let z=Math.floor(x);
document.write(typeof(z)); */

// Data types in JS - Primitive, Non-Primitive & Special data types

// Primitive data types- Number, String, Boolean

let x=("This is string data type");
document.write(x +("<br>"));
document.write(typeof(x) +("<br>"));

let y=90;
document.write(y +("<br>"));
document.write(typeof(y) +("<br>"));

let z=true;
document.write(z +("<br>"));
document.write(typeof(z) +("<br>"));

// Non-Primitive data types - arrays and objects

let salaries=[28000,31000,62000];
document.write(salaries +("<br>"));

let user={name:"Mammu", Age:20, Place:"Hyderabad"}
document.write(user.name +" " ,user.Age +" " ,user.Place +("<br>"));

// Special data types - undefined and null

let namee;
document.write(namee+("<BR>"));

let name3=null;
document.write(name3+("<br>"));

// control statements in JS
// conditional/ decision making

//if 
let num=20;
if(num>=12)
{
    document.write("num is greater than or equal to 12"+("<br>"))
};

// if-else
let num1=78;
if(num1<67){
    document.write("num1 is less than 67" + ("<br>"));
}
else{
    document.write("num1 is greater than 67" + ("<br>"));
}

// if-else-if ladder
let num2=90;
if(num2<87){
    document.write("num2 is less than 90" + ("<br>"));
}
else if(num2>98)
{
    document.write("num1 is greater than 67" + ("<br>"));
}
else{
    document.write("both are wrong" + ("<br>"));
}