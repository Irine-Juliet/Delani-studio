$(document).ready(function() {
  $(".clickDesign").click(function() {
    $(".showDesign").slideToggle();
    $(".hideDesign").slideToggle();
  });
  $(".clickDev").click(function() {
    $(".showDev").slideToggle();
    $(".hideDev").slideToggle();
  });
  $(".clickProduct").click(function() {
    $(".showProduct").slideToggle();
    $(".hideProduct").slideToggle();
  });
  $(".img").hover(function() {
    $(this).find(".projectName").toggle(400);
  });
  $("form").submit(function() {
    var name=document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var message=document.getElementById('message').value;

    if(name===""){
     alert("Please fill all the fields");
    }
    else if(message===""){
      alert("Please enter your message");
      }
    else if(email.length<10) {
      alert("Please enter a valid email address");
    }
    else{
      alert(" " + name + ", your message has been sent successfully. Thank you for reaching out to us.");
    }
  });
  $("form#form").on ('submit',function() {
    $('form').each(function(){
    this.reset();
  });
}) ;
});
