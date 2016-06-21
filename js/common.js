$(function () {

    $('.balance-diet-slider').owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        pagination: true,
        navigation: true,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    ;

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

});
var $rangeslider = $('#js-amount-range');
var $amount = $('#js-amount-input');
var $rangeslider2 = $('#js-amount-range2');
var $amount2 = $('#js-amount-input2');

$rangeslider
    .rangeslider({
        polyfill: false
    })
    .on('input', function () {
        $amount[0].value = this.value;
    });

$amount.on('input', function () {
    $rangeslider.val(this.value).change();
});

$rangeslider2
    .rangeslider({
        polyfill: false
    })
    .on('input', function () {
        $amount2[0].value = this.value;
    });

$amount2.on('input', function () {
    $rangeslider2.val(this.value).change();
});

function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}

$(function () {

    var dd = new DropDown($('#dd'));

    $(document).click(function () {
        // all dropdowns
        $('.wrapper-dropdown-2').removeClass('active');
    });

});

