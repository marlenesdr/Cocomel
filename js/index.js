$(document).ready(function(){

  $('.apoyo').mouseover(function(){
    $('#img_apoyo').attr({'src':'img/apoyo1.jpg'});
    $('#p_apoyo').css({'text-decoration':'underline'});
    $('#a_prod').attr({'src':'img/b002.png'});
  });

  $('.apoyo').mouseout(function(){
    $('#img_apoyo').attr({'src':'img/apoyo.jpg'});
    $('#p_apoyo').css({'text-decoration':'none'});
    $('#a_prod').attr({'src':'img/b001.png'});
  });

  $('.arte').mouseover(function(){
    $('#img_arte').attr({'src':'img/arte1.jpg'});
    $('#p_arte').css({'text-decoration':'underline'});
    $('#a_serv').attr({'src':'img/b002.png'});
  });

  $('.arte').mouseout(function(){
    $('#img_arte').attr({'src':'img/arte.jpg'});
    $('#p_arte').css({'text-decoration':'none'});
    $('#a_serv').attr({'src':'img/b001.png'});
  });

  $('.expresion').mouseover(function(){
    $('#img_expresion').attr({'src':'img/expresion1.jpg'});
    $('#p_expresion').css({'text-decoration':'underline'});
    $('#a_prod').attr({'src':'img/b002.png'});
  });

  $('.expresion').mouseout(function(){
    $('#img_expresion').attr({'src':'img/expresion.jpg'});
    $('#p_expresion').css({'text-decoration':'none'});
    $('#a_prod').attr({'src':'img/b001.png'});
  });

  $('.ballet').mouseover(function(){
    $('#img_ballet').attr({'src':'img/ballet1.jpg'});
    $('#p_ballet').css({'text-decoration':'underline'});
    $('#a_serv').attr({'src':'img/b002.png'});
  });

  $('.ballet').mouseout(function(){
    $('#img_ballet').attr({'src':'img/ballet.jpg'});
    $('#p_ballet').css({'text-decoration':'none'});
    $('#a_serv').attr({'src':'img/b001.png'});
  });


  $('.taekwondo').mouseover(function(){
    $('#img_taekwondo').attr({'src':'img/taekwondo1.jpg'});
    $('#p_tae_kwondo').css({'text-decoration':'underline'});
    $('#a_serv').attr({'src':'img/b002.png'});
  });

  $('.taekwondo').mouseout(function(){
    $('#img_taekwondo').attr({'src':'img/taekwondo.jpg'});
    $('#p_tae_kwondo').css({'text-decoration':'none'});
    $('#a_serv').attr({'src':'img/b001.png'});
  });

  $('#im1').mouseover(function(){
    $(this).attr({'src':'img/Ubicacion001.png'});
  });
  $('#im1').mouseout(function(){
    $(this).attr({'src':'img/Ubicacion.png'});
  });



});
