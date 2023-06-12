$(document).ready(function () {

    //change active class for .catalog_item
    $('div.service_wrapper').on('click', 'div:not(div.catalog_item_active, div.item__title)', function () {
        $(this)
            .addClass('catalog_item_active').siblings().removeClass('catalog_item_active')
            .closest('div.container').find('div.service_list').removeClass('service_list_active').eq($(this).index()).addClass('service_list_active');
    });

    //change title for .selected_service_title

    $('.catalog_item').each(function (i) {
        $(this).on('click', function () {
            $('.selected_service_title').text($('.item__title').eq(i).text());
            $('.catalog_item').fadeIn();
        });
    });

    // .modal consultation
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks').fadeOut();
    });

    //sending the form to the email

    //phone mask

    $(function ($) {
        $("input[name=phone]").mask("+38(999) 999-9999");
    });

    //form validation
    function formValidation(form) {
        $(form).validate({
            rules: {
                // simple rule, converted to {required:true}
                name: {
                    required: true,
                    minlength: 5

                },
                phone: {
                    required: true,
                },
                // compound rule
                email: {
                    required: true,
                    email: true
                }
            }
        });
    }
    formValidation('#consultation-form');
    formValidation('#consultation form');


    //sent email from the .form

    $('form').submit(function (e) {
        e.preventDefault();

        // не отправляет пустую невалидную форму
        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');

        });
        return false;
    });



});