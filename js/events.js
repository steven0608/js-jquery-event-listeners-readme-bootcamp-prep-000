function getIt(){
$("p").on("click",function(){
  alert("Hey!");
});
}

function frameIt(){
  $("img").on("load",function(){
  $("img").addClass("tasty");
  return;
});
}

function pressIt(){
$("#typing").on("keydown", function(k){
  if(k.which==71){
    alert("G key was pressed down");
  }
})
}

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
})
