
 // popover script
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});


// IF #isf-filed has value, than place button in Shipment-header-right
$('input[name=isf-filed]').keyup(function(){
if($(this).val().length)
$('.isf-filed-notice').show();
    else
    $('.isf-filed-notice').hide();
});



/*ACTIVE NAV TABS */
var changeColor = function(obj){

  if(obj.value < 6){
    obj.style.backgroundColor = 'green';
  } else if(obj.value >= 6 && obj.value <= 9){
    obj.style.backgroundColor = 'orange';
  } else if(obj.value > 9){
    obj.style.backgroundColor = 'red';
  }

};

$('ul .nav-pills').click(function (e) {
  $('ul.nav-pills li.active').removeClass('active')
  $(this).li.addClass('active')
})

$('ul.nav-pills li a').click(function (e) {
  $('ul.nav-pills li.active').removeClass('active')
  $(this).parent('li').addClass("active")
})




// Message Badges add & remove active class
$('.message-badge').click(function() {

      $(".message-badge.active").removeClass("active");
      $(this).addClass("active");
});


// Message Badges remove new message
$('.message-badge').click(function() {
      $(this).children(".new-message-label").remove();
});


//Menu Toggle Script

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


