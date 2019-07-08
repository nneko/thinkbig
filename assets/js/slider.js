
var sliderbutton = document.getElementById('slider-close-button');
var slidermsgbutton = document.getElementById('slider-msg-toggle');
var slider = document.querySelector('.slider');
var sliderinputemail = document.getElementById('slider-emailaddr');
var slidergainedfocus = false;
var hideslider = null;
sliderbutton.addEventListener('click', toggle, false);
slidermsgbutton.addEventListener('click', msgtoggle, false);


function waitOrToggle(){
  if(slidergainedfocus){
    //Subscriber form engaged so do nothing. User will manually close.
  }
  else {
    toggle();
  }
}

function toggle(){
  if (slider.classList.contains('closed')) {
    slider.classList.remove('closed');
    $('#slider-close-button').css({"display": "inherit"});
  } else {
    slider.classList.add('closed');
    $('#slider-close-button').css({"display": "none"});
    setTimeout(function(){
    /*$('.slider').css({"display": "none"})*/},1000);
  }
}

function msgtoggle(){
    $('.slider-response').addClass("hidden");
    $('.slider-response').css({"display":"none"});
    $('.inlineform').removeClass('hidden');
    $('.inlineform').css({"display":"inline-block"});
}

$('#slider-form').submit(function (e) {
    e.preventDefault();

    $.ajax({
        url: 'https://bigthinkingapplied.us9.list-manage.com/subscribe/post-json?u=c1e1a922da09c2907bce06d4b&amp;id=97aa5aff0e&c=?',
        type: 'POST',
        data: $('#slider-form').serialize(),
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        success: function(data, text, xhr){
            console.log(data['msg']);
            $('#slider-response-msg').html(data['msg']);
            if(data['result'] != "error") {
                $('.inlineform').addClass("hidden");
                $('.inlineform').css({"display":"none"});
                $('.slider-response').removeClass('hidden');
                $('.slider-response').css({"display":"inline-block"});
                $('#slider-msg-toggle').addClass("hidden");
                $('#slider-msg-toggle').css({"display":"none"});
                $('#slider-response-msg').removeClass('hidden');
                $('#slider-response-msg').css({"display":"block"});
                $('#slider-success-msg').removeClass("hidden");
                $('#slider-success-msg').css({"display":"block"});
                slidergainedfocus = false;
                hideslider = setTimeout(waitOrToggle,10000);
            }
            else {
                //ERROR
                $('.inlineform').addClass("hidden");
                $('.inlineform').css({"display":"none"});
                $('.slider-response').removeClass('hidden');
                $('.slider-response').css({"display":"inline-block"});
                $('#slider-response-msg').html(data['msg']);
                $('#slider-response-msg').removeClass('hidden');
                $('#slider-response-msg').css({"display":"block"});
                $('#slider-msg-toggle').removeClass("hidden");
                $('#slider-msg-toggle').css({"display":"block"});
            }
        },
        error: function (xhr, text, error) {
            //ERROR
            console.log(JSON.stringify(xhr.msg));
            $('#slider-msg-toggle').removeClass("hidden");
            $('#slider-msg-toggle').css({"display":"block"});
        }
    });
});

$(sliderinputemail).focus(function(){
    slidergainedfocus = true;
    if(hideslider){clearTimeout(hideslider);}
});
/*
$(function(){
  hideslider = setTimeout(waitOrToggle,20000);
});
*/
