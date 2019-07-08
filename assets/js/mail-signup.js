$('#signup-to-mailform').submit(function (e) {
    e.preventDefault();

    $.ajax({
        url: 'https://bigthinkingapplied.us9.list-manage.com/subscribe/post-json?u=c1e1a922da09c2907bce06d4b&amp;id=97aa5aff0e&c=?',
        type: 'POST',
        data: $('#signup-to-mailform').serialize(),
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        success: function(data, text, xhr){
            console.log(data['msg']);
            $('#mailform-response-msg').html(data['msg']);
            if(data['result'] != "error") {
                $('.mailform-signup').addClass("hidden");
                $('.mailform-signup').css({"display":"none"});
                $('#mailform-error-msg').addClass("hidden");
                $('#mailform-error-msg').css({"display":"none"});
                $('#mailform-response-msg').removeClass('hidden');
                $('#mailform-response-msg').css({"display":"block"});
                $('#mailform-success-msg').removeClass("hidden");
                $('#mailform-success-msg').css({"display":"inline-block"});   
            }
            else {
                //ERROR
                $('#mailform-response-msg').html(data['msg']);
                $('#mailform-response-msg').removeClass('hidden');
                $('#mailform-response-msg').css({"display":"block"});
                $('#mailform-error-msg').removeClass("hidden");
                $('#mailform-error-msg').css({"display":"inline-block"});
            }
        },
        error: function (xhr, text, error) {
            //ERROR
            console.log(JSON.stringify(xhr.msg));
            $('#mailform-error-msg').removeClass("hidden");
            $('#mailform-error-msg').css({"display":"inline-block"});
        }
    });
});