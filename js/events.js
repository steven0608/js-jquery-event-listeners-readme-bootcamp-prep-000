function getIt(){
$("p").on("click",function(){
  alert("Hey!");
});
}

function frameIt(){
  $("img").on("click",function(){
  $("img").addClass("tasty");
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
frameIt();
getIt();
frameIt();
pressIt();
submitIt();
})
