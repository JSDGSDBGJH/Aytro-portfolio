// paglami start

let piOOlas = document.querySelectorAll(".piOOlas");
let myOOnas = document.querySelectorAll(".myOOnas");

let jkOOxcf = document.querySelectorAll(".jkOOxcf");


let C = 0;
let c = 1;

piOOlas[0].addEventListener("click", function(){
  C++;
  jkOOxcf[0].innerText = c + C;
});


myOOnas[0].addEventListener("click", function(){
  if(C > 1){
    C--;
    jkOOxcf[0].innerText = C;
  } else{
    alert('Stop...!! You have to buy atleast 1 pice');
  }
});


//shadow

piOOlas[1].addEventListener("click", function(){
    C++;
    jkOOxcf[1].innerText = c + C;
  });
  
  
  myOOnas[1].addEventListener("click", function(){
    if(C > 1){
      C--;
      jkOOxcf[1].innerText = C;
    } else{
      alert('Stop...!! You have to buy atleast 1 pice');
    }
  });


//paglami end