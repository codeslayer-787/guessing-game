'use strict';
var YES = true;
var NO = false;

function q1(){
let whereFrom = prompt ('Am I from Puerto Rico?');
if (whereFrom.toUpperCase() =='YES')
{
  alert("That is true!")
}
else 
{alert('Not so much')
}
}
q1();

function q2(){
let faveGenre = prompt ('Is my favorite music genre Heavy Metal?')

if (faveGenre.toUpperCase() =='YES')
{
  alert("Yup, since I was a kid!")
}
else
{alert('Hint, I like lots of noise')
}
}
q2();

function q3(){
let workHistory = prompt ('Have I worked in the oil field?')

if (workHistory.toUpperCase() =='YES')
{
  alert("Yeah, the Bakken gets REALLY COLD!")
}
else
{alert('Incorrect, I still kinda do')
}
}
q3();

function q4(){
let faveInstrument = prompt ('My favorite musical instrument is the piano')

if (faveInstrument.toUpperCase() =='YES')
{
  alert('Mine has 5 strings')
}
else
{alert('My favorite instrument is the bass guitar')
}
}
q4();

function q5(){
let raceCar = prompt ('Do I like fast cars?')

if (raceCar.toUpperCase() =='YES')
{
  alert('Yes!!!  I have been building race cars for over a decade')
}
else
{
  alert('I LOVE car racing')
}
}
q5();

