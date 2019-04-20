
function multiply(num1,num2){
  var result = num1 * num2;
  return result;
}

var test1 = multiply(2,5);
console.log(test1);

/*
document.querySelector('html').onclick = function(){
  alert('dont use java in javascript');
}
*/
 var myImage = document.querySelector('img');
myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  console.log(mySrc)
   if( mySrc === 'images/992742.jpg')
  {
    console.log("test",mySrc);
myImage.setAttribute('src','images/984322.jpg');
  }
  else
  {
    console.log("test1",mySrc);

    myImage.setAttribute('src','images/992742.jpg');

  }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);

  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')){
setUserName();
}
else
{
  var storeName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storeName;

}
