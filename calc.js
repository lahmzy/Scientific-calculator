

 var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

for(i=0; i<btn.length; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click",function(e){
    var btnText = e.target.innerText;
    if(btnText== "x"){
      btnText= "*"
    }
    if(btnText== "÷"){
      btnText="/"
    }

    screen.value+= btnText
  })
}

document.querySelectorAll(".equals")[0].addEventListener("click",function(){
  screen.value= eval(screen.value); 
})

document.querySelector(".sin").addEventListener("click", function(){
 screen.value = Math.sin(screen.value * Math.PI/180 )
})

document.querySelector(".cos").addEventListener("click", function(){
  screen.value = Math.cos(screen.value * Math.PI/180 )
 })

 document.querySelector(".tan").addEventListener("click", function(){
  screen.value = Math.tan(screen.value * Math.PI/180 )
 })


 document.querySelector(".sin").addEventListener("click", function(){
   screen.value = Math.sin(screen.value * Math.PI/180 )
})  

document.querySelector(".sqrt").addEventListener("click", function(){
  screen.value = Math.sqrt(screen.value,2)
 })

 document.querySelector(".pow").addEventListener("click", function(){
  screen.value = Math.pow(screen.value,2)
 })

 document.querySelector(".pi").addEventListener("click", function(){
  screen.value = Math.PI
 })

 document.querySelector(".log").addEventListener("click", function(){
  screen.value = Math.log10(screen.value)
 })

 document.querySelector(".exp").addEventListener("click", function(){
  screen.value = Math.E
 })

 document.querySelector(".fact").addEventListener("click", function(){
  var i, num, f;
  num =screen.value
  f = 1
  for(i=1; i<=num; i++){
   f = f*i
  }
   
  screen.value = f
 })

 document.querySelector(".ce").addEventListener("click", function(){
    screen.value= screen.value.substring(0,screen.value.length-1)
 })
 
 document.querySelector(".ac").addEventListener("click", function(){
  screen.value= 0
})


document.querySelector(".mod").addEventListener("click", function(){
  screen.value= screen.value/100
})