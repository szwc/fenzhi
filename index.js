/*
* @Author: Administrator
* @Date:   2016-09-05 13:05:34
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-05 23:11:32
*/

'use strict';
window.onload=function(){
  slide();
}
function slide(){
  var slide=document.querySelector('.slide');
  var slideUl=slide.querySelector('ul');

  var slideWidth=slide.offsetWidth;
  // console.log(slideWidth);
  var index=0;
  var timer=setInterval(function(){
      index++;
      if(index>=5){
        index=0;
        slideUl.style.transform="translate("+-slideWidth*index+"px)";
        slideUl.style.transition="none";
      }
      slideUl.style.transform="translate("+-slideWidth*index+"px)";
      slideUl.style.transition="all 0.2s";

      var liList=document.querySelectorAll('.list li');
      // console.log(liList);
      for(var i=0;i<liList.length;i++){
        liList[i].className="";
        liList.index=i;
        // console.log(index);
      }
      liList[index].className="active";
      
  }, 1000);
}