$(document).ready(function () {
    $("a.aparrow").on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });



    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    var mail = $('#mail');

    mail.blur(function () {
        if (mail.val() != '') {
            if (mail.val().search(pattern) == 0) {
                $('#valid').text('Заполнено верно');
                $('#submit').attr('disabled', false);
                mail.removeClass('error').addClass('ok');
            }
            else {
                $('#valid').text('Поле заполнено не верно');
                $('#submit').attr('disabled', true);
                mail.addClass('ok');
            }
        } else {
            $('#valid').text('Поле e-mail не должно быть пустым!');
            mail.addClass('error');
            $('#submit').attr('disabled', true);
        }
    });


    $(document).on('click', '#heart', function (e) {
        var tekst = $('<div id="message-success"><p>Добавлено в избранное!</p></div>'),
            linc = $('#jGrowl');
        linc.html(tekst).fadeIn();
        setTimeout(function () {
            linc.fadeOut();
        }, 2000);
    });



});