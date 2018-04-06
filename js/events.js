function getIt(){
$("p").on("click",function(){
  alert("Hey!");
});
}

function frameIt(){
  $("img").on("load",function(){
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
<<<<<<< HEAD

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
=======
>>>>>>> a4ad2aa84ce648462d6970ba61aeca52bfb99800

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
  
});
