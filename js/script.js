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

});