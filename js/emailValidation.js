const email=document.querySelector("input");
const message=document.querySelector(".error_message");

email.addEventListener("invalid", function(e){
  e.preventDefault();
  this.classList.add("error_input");
  message.style.display="block";
  if(this.value==""){
    message.innerHTML="Whoops! It looks like you forgot to add your email";
  }
  else{
    this.value="example@email/com";
    message.innerHTML="Please provide a valid email address";
  }
});

email.addEventListener("focus", function(){
  if(this.classList.contains("error_input")){
    this.value="";
    message.style.display="none";
    this.classList.remove("error_input");
  }
});