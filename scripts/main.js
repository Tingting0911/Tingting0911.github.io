let myHeading=document.querySelector('h1');
myHeading.textContent='Hello World!';

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

document.querySelector('html').onclick = function() {
  // alert('别戳我，我怕疼。');
}

let myImage=document.querySelector('img');
myImage.onclick=function(){
  let mySrc=myImage.getAttribute('src');
  if(mySrc==='images/firefox-icon.jpg'){
    myImage.setAttribute('src','images/sky.jpg');
  }else{
    myImage.setAttribute('src','images/firefox-icon.jpg');
  }
}

let myButton=document.querySelector('button');

function setUserName(){
  // prompt()弹出一个对话框
  let myName=prompt('请输入你的名字');
  if(!myName||myName===null){
    setUserName();
  }else{
     // localStorage将数据存储在浏览器中,关闭页面之后信息不会消失
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla酷毙了，'+myName;
  }  
}

// 以下代码在IE中会存在问题
if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storedName=localStorage.getItem('name');
  myHeading.textContent='Mozilla酷毙了，'+storedName;
}

// if(!localStorage.getItem('name')){
// }else{
  
// }

myButton.onclick=function(){
  setUserName();
}